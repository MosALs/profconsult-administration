package com.profconsult.administration.service;

import com.profconsult.administration.config.ImageUtils;
import com.profconsult.administration.dao.request.LinkObject;
import com.profconsult.administration.entity.CompanyLinks;
import com.profconsult.administration.entity.Gallery;
import com.profconsult.administration.entity.Partner;
import com.profconsult.administration.entity.Project;
import com.profconsult.administration.repository.CompanyLinksRepository;
import com.profconsult.administration.repository.GalleryRepository;
import com.profconsult.administration.repository.PartnerRepository;
import com.profconsult.administration.repository.ProjectRepository;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


@Service
@AllArgsConstructor
public class DashboardServiceImpl implements DashboardService{

    private final ProjectRepository itemRepository;
    private final PartnerRepository partnerRepository;
    private final GalleryRepository galleryRepository;
    private final CompanyLinksRepository companyLinksRepository;
    @Override
    public void submitItem(MultipartFile file, String titleEn, String topicEn, String titleAr, String topicAr , Integer id) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Project project;
        if(!id.equals(000)) {
            project = Project.builder()
                    .id(id)
                    .titleEn(titleEn)
                    .topicEn(topicEn)
                    .titleAr(titleAr)
                    .topicAr(topicAr)
                    .image(ImageUtils.compressImage(file.getBytes()))
                    .fileName(fileName)
                    .fileType(file.getContentType())
                    .build();
        } else {
            project = Project.builder()
                    .titleEn(titleEn)
                    .topicEn(topicEn)
                    .titleAr(titleAr)
                    .topicAr(topicAr)
                    .image(ImageUtils.compressImage(file.getBytes()))
                    .fileName(fileName)
                    .fileType(file.getContentType())
                    .build();
        }
        project = itemRepository.save(project);
    }

    @Override
    public List<Project> getAllItems() {
        return itemRepository.findAll();
    }

    /**-------------------------------Partner---------------------------------**/
    @Override
    public void submitPartner(MultipartFile file , Integer id) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Partner partner;
        if(!id.equals(000)) {
            partner = Partner.builder()
                    .id(id)
                    .image(ImageUtils.compressImage(file.getBytes()))
                    .fileName(fileName)
                    .fileType(file.getContentType())
                    .build();
        } else {
            partner = Partner.builder()
                    .image(ImageUtils.compressImage(file.getBytes()))
                    .fileName(fileName)
                    .fileType(file.getContentType())
                    .build();
        }
        partner = partnerRepository.save(partner);
    }

    @Override
    public List<Partner> getAllPartners() {
        return partnerRepository.findAll();
    }

    /**-------------------------------Gellary---------------------------------**/
    @Override
    public void submitGallery(MultipartFile file, Integer id) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Gallery gallery;
        if(!id.equals(000)) {
            gallery = Gallery.builder()
                    .id(id)
                    .image(ImageUtils.compressImage(file.getBytes()))
                    .fileName(fileName)
                    .fileType(file.getContentType())
                    .build();
        } else {
            gallery = Gallery.builder()
                    .image(ImageUtils.compressImage(file.getBytes()))
                    .fileName(fileName)
                    .fileType(file.getContentType())
                    .build();
        }

        gallery = galleryRepository.save(gallery);
    }

    @Override
    public List<Gallery> getAllGalleries() {
        return galleryRepository.findAll();
    }

    /**-------------------------------Links---------------------------------**/
    @Override
    public void submitLinks(LinkObject linkObj) {
        CompanyLinks companyLinks = CompanyLinks.builder()
                .instagramURL(linkObj.getInstagramURL())
                .facebookURL(linkObj.getFacebookURL())
                .twitterURL(linkObj.getTwitterURL())
                .linkedinURL(linkObj.getLinkedinURL())
                .build();

        companyLinks = companyLinksRepository.save(companyLinks);
    }

    @Override
    public boolean deleteGallery(int id, String key) {
        if(key.equals("GALLERY")) {
            galleryRepository.deleteById(id);
        } else if(key.equals("PARTNER")) {
            partnerRepository.deleteById(id);
        } else if (key.equals("PROJECT")) {
            itemRepository.deleteById(id);
        } else {
            throw new RuntimeException("Unknown key: " + key);
        }
        return true;
    }
}