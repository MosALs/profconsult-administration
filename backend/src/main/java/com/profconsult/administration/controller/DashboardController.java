package com.profconsult.administration.controller;


import com.profconsult.administration.dao.request.LinkObject;
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

    /**-------------------------------Project---------------------------------**/
    @PostMapping(path = "/item", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> submitProject(@RequestParam(value = "title") String title, @RequestParam(value = "topic") String topic,
                                        @RequestPart("file") MultipartFile file) throws IOException {
        dashboardService.submitItem(file , title, topic);
        return ResponseEntity.ok("done");
    }

    @GetMapping(path = "/all-items")
    public ResponseEntity<?> getAllProjects() {
        return ResponseEntity.ok(dashboardService.getAllItems());
    }

    /**-------------------------------Gellary---------------------------------**/
    @PostMapping(path = "/gallery", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> submitGallery(@RequestPart("file") MultipartFile file) throws IOException {
        dashboardService.submitGallery(file);
        return ResponseEntity.ok("done");
    }

    @GetMapping(path = "/all-galleries")
    public ResponseEntity<?> getAllGalleries() {
        return ResponseEntity.ok(dashboardService.getAllGalleries());
    }

    /**-------------------------------Partner---------------------------------**/
    @PostMapping(path = "/partner", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> submitPartner(@RequestPart("file") MultipartFile file) throws IOException {
        dashboardService.submitPartner(file);
        return ResponseEntity.ok("done");
    }

    @GetMapping(path = "/all-partners")
    public ResponseEntity<?> getAllPartners() {
        return ResponseEntity.ok(dashboardService.getAllPartners());
    }

    /**-------------------------------Links---------------------------------**/
    @PostMapping(path = "/links", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> submitPartner(@RequestBody LinkObject linkObj) {
        dashboardService.submitLinks(linkObj);
        return ResponseEntity.ok("done");
    }
}
