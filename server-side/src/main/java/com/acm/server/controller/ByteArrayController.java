package com.acm.server.controller;

import com.acm.server.config.Constants;
import lombok.SneakyThrows;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.util.Arrays;

@RestController
@RequestMapping(Constants.BASE_API_URL + "/byte")
public class ByteArrayController {
    @GetMapping
    public ResponseEntity<String> getByteArray(@RequestParam String address, @RequestParam String type) {
        return ResponseEntity.ok(
                Arrays.toString(toByteArray(address, type))
        );
    }

    @SneakyThrows
    private byte[] toByteArray(String address, String type) {
        BufferedImage bImage = ImageIO.read(new File(address));
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ImageIO.write(bImage, type, bos);
        return bos.toByteArray();
    }
}
