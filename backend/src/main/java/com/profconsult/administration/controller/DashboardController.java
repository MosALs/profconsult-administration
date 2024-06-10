package com.profconsult.administration.controller;


import com.profconsult.administration.dao.request.SignUpRequest;
import com.profconsult.administration.dao.request.SigninRequest;
import com.profconsult.administration.dao.response.JwtAuthenticationResponse;
import com.profconsult.administration.service.AuthenticationService;
import com.profconsult.administration.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/dashboard")
@RequiredArgsConstructor
@CrossOrigin(value = "http://localhost:4200")
public class DashboardController {

    private final DashboardService dashboardService;

    @PostMapping(path = "/item", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> submitItem(@RequestParam(value = "title") String title, @RequestParam(value = "topic") String topic,
                                        @RequestPart("file") MultipartFile file) throws IOException {
        dashboardService.submitItem(file , title, topic);
        return ResponseEntity.ok("done");
    }
}
