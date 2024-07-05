package com.profconsult.administration.controller;


import com.profconsult.administration.config.ImageUtils;
import com.profconsult.administration.dao.request.LinkObject;
import com.profconsult.administration.dao.request.SignUpRequest;
import com.profconsult.administration.dao.request.SigninRequest;
import com.profconsult.administration.dao.response.GalleryDto;
import com.profconsult.administration.dao.response.JwtAuthenticationResponse;
import com.profconsult.administration.dao.response.ProjectDto;
import com.profconsult.administration.entity.Partner;
import com.profconsult.administration.entity.Project;
import com.profconsult.administration.service.AuthenticationService;
import com.profconsult.administration.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.apache.commons.codec.binary.Base64;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.zip.DataFormatException;

@RestController
@RequestMapping("/api/v1/dashboard")
@RequiredArgsConstructor
@CrossOrigin(value = "*")
public class DashboardController {

    private final DashboardService dashboardService;

    /**-------------------------------Project---------------------------------**/
    @PostMapping(path = "/item", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> submitProject(@RequestParam(value = "titleEn") String titleEn, @RequestParam(value = "topicEn") String topicEn,
                                           @RequestParam(value = "titleAr") String titleAr, @RequestParam(value = "topicAr") String topicAr,
                                           @RequestParam(value = "id" , required = false) Integer id,
                                        @RequestPart("file") MultipartFile file) throws IOException {
        dashboardService.submitItem(file , titleEn, topicEn, titleAr ,topicAr ,id);
        return ResponseEntity.ok("done");
    }

    @GetMapping(path = "/all-items")
    public ResponseEntity<?> getAllProjects() {
        List<ProjectDto> projects = new ArrayList<>();
        dashboardService.getAllItems().forEach(item -> {
                String base64Image = null;
                try {
                    base64Image = Base64.encodeBase64String(ImageUtils.decompressImage(item.getImage()));
                } catch (DataFormatException e) {
                    throw new RuntimeException(e);
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
                ProjectDto projectDto = ProjectDto.builder()
                        .image(base64Image)
                        .fileName(item.getFileName())
                        .fileType(item.getFileType())
                        .id(item.getId())
                        .titleAr(item.getTitleAr())
                        .titleEn(item.getTitleEn())
                        .topicAr(item.getTopicAr())
                        .topicEn(item.getTopicEn())
                        .build();
                projects.add(projectDto);
        });
        return ResponseEntity.ok(projects);
    }

    /**-------------------------------Gellary---------------------------------**/
    @PostMapping(path = "/gallery", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> submitGallery(@RequestPart("file") MultipartFile file , @RequestParam(value = "id" , required = false) Integer id) throws IOException {
        dashboardService.submitGallery(file, id);
        return ResponseEntity.ok("done");
    }

    @GetMapping(path = "/all-galleries")
    public ResponseEntity<?> getAllGalleries() {
        List<GalleryDto> galleryDtoList = new ArrayList<>();
        dashboardService.getAllGalleries().forEach(gallery -> {

            String base64Image = null;
            try {
                base64Image = Base64.encodeBase64String(ImageUtils.decompressImage(gallery.getImage()));
            } catch (DataFormatException e) {
                throw new RuntimeException(e);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            GalleryDto galleryDto = GalleryDto.builder()
                    .image(base64Image)
                    .fileName(gallery.getFileName())
                    .fileType(gallery.getFileType())
                    .id(gallery.getId())
                    .build();
            galleryDtoList.add(galleryDto);
        });
        return ResponseEntity.ok(galleryDtoList);
    }

    /**-------------------------------Partner---------------------------------**/
    @PostMapping(path = "/partner", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> submitPartner(@RequestPart("file") MultipartFile file, @RequestParam(value = "id" , required = false) Integer id ) throws IOException {
        dashboardService.submitPartner(file , id);
        return ResponseEntity.ok("done");
    }

    @GetMapping(path = "/all-partners")
    public ResponseEntity<?> getAllPartners() {
        List<GalleryDto> partners = new ArrayList<>();
        dashboardService.getAllPartners().forEach(partner -> {
            try {
                GalleryDto partnerDto = GalleryDto.builder()
                        .fileName(partner.getFileName())
                        .image(Base64.encodeBase64String(ImageUtils.decompressImage(partner.getImage())))
                        .fileType(partner.getFileType())
                        .id(partner.getId())
                        .build();
                partners.add(partnerDto);
            } catch (DataFormatException e) {
                throw new RuntimeException(e);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
        return ResponseEntity.ok(partners);
    }

    /**-------------------------------Links---------------------------------**/
    @PostMapping(path = "/links", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> submitPartner(@RequestBody LinkObject linkObj) {
        dashboardService.submitLinks(linkObj);
        return ResponseEntity.ok("done");
    }

    @GetMapping(path = "/all-links")
    public ResponseEntity<?> getAllLinks() {
        return ResponseEntity.ok(dashboardService.getAllLinks());
    }

    /**-------------------------------Generic for all types---------------------------------**/
    @DeleteMapping(path = "/delete/{id}/{key}")
    public ResponseEntity<?> deleteGallery(@PathVariable int id , @PathVariable String key ) {
        return ResponseEntity.ok(dashboardService.deleteGallery(id , key));
    }
}
