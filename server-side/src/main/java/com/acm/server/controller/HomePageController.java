package com.acm.server.controller;


import com.acm.server.config.Constants;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Farid Masjedi
 * description: This class is the controller for the home page
 */

@RestController
@RequestMapping(Constants.BASE_API_URL + "/home")
public class HomePageController {
}
