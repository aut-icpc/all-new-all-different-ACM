package com.acm.server.model.dto.zify;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class PayerDto {
    private String first_name;
    private String last_name;
    private String phone;
    private String email;
    private String address_1 = "hmm";
    private String address_2 = "hmsm";
}
