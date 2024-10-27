package com.acm.server.model.dto;

import com.acm.server.domain.GraduationLevel;
import com.acm.server.domain.ShirtSize;
import com.acm.server.model.Gender;
import lombok.Data;
import lombok.experimental.Accessors;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

/**
 * Data Transfer Object (DTO) representing a contestant.
 * @see com.acm.server.domain.Contestant
 * @see com.acm.server.model.dto.PictureDto
 * @author Farid Masjedi
 */
@Data
@Accessors(chain = true)
public class ContestantDto {
    private Long id;
    @NotBlank(message = "First name is required!")
    @Size(max = 50, message = "First name length must be less than 50 characters!")
    private String firstname;
    @NotBlank(message = "Last name is required!")
    @Size(max = 50, message = "Last name length must be less than 50 characters!")
    private String lastname;
    @Size(max = 100, message = "Info Should be short!")
    private String otherInfo;
    @NotNull(message = "Gender is required!")
    private Gender gender;
    @NotBlank(message = "Phone number is require!")
    @Pattern(regexp = "^+989\\d{9}$", message = "Phone number is not valid!")
    private String phoneNumber;
    @NotBlank(message = "Email is required!")
    @Pattern(regexp = "^\\S+@\\S+\\.\\S+$", message = "Email is not valid!")
    private String email;
    @NotNull(message = "Graduation level is required!")
    private GraduationLevel graduationLevel;
    @NotNull(message = "Shirt size is required!")
    private ShirtSize shirtSize;
    @NotNull(message = "Student id is required!")
    private String studentId;
    @NotNull(message = "National id picture is required!")
    @Valid
    private PictureDto nationalIdPicture;
    @NotNull(message = "Student card picture is required!")
    @Valid
    private PictureDto studentCardPicture;
    private String orderId;
    private Boolean paid = false;
}
