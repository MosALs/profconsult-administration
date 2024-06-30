package com.profconsult.administration.service;

import com.profconsult.administration.dao.request.LinkObject;
import com.profconsult.administration.entity.Gallery;
import com.profconsult.administration.entity.Partner;
import com.profconsult.administration.entity.Project;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface DashboardService {
    void submitItem(MultipartFile file, String titleEn, String topicEn, String titleAr, String topicAr , Integer id) throws IOException;

    List<Project> getAllItems();

    void submitPartner(MultipartFile file , Integer id) throws IOException;
    List<Partner> getAllPartners();

    void submitGallery(MultipartFile file, Integer id) throws IOException;
    List<Gallery> getAllGalleries();

    void submitLinks(LinkObject linkObj);


    boolean deleteGallery(int id,  String key);
}
