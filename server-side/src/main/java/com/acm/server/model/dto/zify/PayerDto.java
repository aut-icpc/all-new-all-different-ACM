package com.acm.server.model.dto.zify;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class PayerDto {
    private String firstName;
    private String lastName;
    private String phone;
    private String email;
    private String addressOne = "hmm";
    private String addressTwo = "hmsm";
}
