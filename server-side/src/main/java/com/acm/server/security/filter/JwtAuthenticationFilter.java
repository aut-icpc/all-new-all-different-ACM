package com.acm.server.security.filter;

import com.acm.server.service.JwtService;
import com.acm.server.service.UserService;
import io.micrometer.common.util.StringUtils;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

/**
 * Filter class for JWT authentication.
 * The JwtAuthenticationFilter class is responsible for validating and processing JWT tokens
 * for authentication purposes.
 *
 * @author Farid Masjedi
 */
@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtService jwtService;
    private final UserService userService;

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request,
                                    @NonNull HttpServletResponse response, @NonNull FilterChain filterChain)
            throws ServletException, IOException {
        // Extract the Authorization header from the request
        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String username;

        // If the Authorization header is empty or does not start with "Bearer ", continue to the next filter
        if (StringUtils.isEmpty(authHeader) || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        // Extract the JWT token from the Authorization header
        jwt = authHeader.substring(7);
        username = jwtService.extractUserName(jwt);

        // If the username is not empty and there is no existing authentication in the SecurityContext
        if (StringUtils.isNotEmpty(username) &&
                SecurityContextHolder.getContext().getAuthentication() == null) {
            // Load the UserDetails for the username
            UserDetails userDetails = userService.userDetailsService().loadUserByUsername(username);

            // If the JWT token is valid for the user, create an authentication token and set it in the SecurityContext
            if (jwtService.isTokenValid(jwt, userDetails)) {
                SecurityContext context = SecurityContextHolder.createEmptyContext();
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                context.setAuthentication(authToken);
                SecurityContextHolder.setContext(context);
            }
        }

        // Continue to the next filter
        filterChain.doFilter(request, response);
    }
}