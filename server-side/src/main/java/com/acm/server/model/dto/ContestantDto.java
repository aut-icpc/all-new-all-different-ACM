package com.acm.server.model.dto;

import com.acm.server.domain.GraduationLevel;
import com.acm.server.domain.ShirtSize;
import com.acm.server.domain.picture.NationalIdPicture;
import com.acm.server.domain.picture.StudentCardPicture;
import com.acm.server.model.Gender;
import jakarta.persistence.*;
import lombok.Data;

@Data
public class ContestantDto {

    private Long id;

    private String firstname;

    private String lastname;

    private Gender gender;

    private String phoneNumber;

    private String email;

    private GraduationLevel graduationLevel;

    private ShirtSize shirtSize;

    private String studentId;

    private PictureDto nationalIdPicture;

    private PictureDto studentCardPicture;
}
