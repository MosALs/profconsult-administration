package com.profconsult.administration.service;

import com.profconsult.administration.dao.request.LinkObject;
import com.profconsult.administration.entity.CompanyLinks;
import com.profconsult.administration.entity.Gallery;
import com.profconsult.administration.entity.Partner;
import com.profconsult.administration.entity.Project;
import com.profconsult.administration.repository.CompanyLinksRepository;
import com.profconsult.administration.repository.GalleryRepository;
import com.profconsult.administration.repository.PartnerRepository;
import com.profconsult.administration.repository.ProjectRepository;
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
    public void submitItem(MultipartFile file, String title, String topic) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Project item = Project.builder()
                .title(title)
                .topic(topic)
                .image(file.getBytes())
                .fileName(fileName)
                .fileType(file.getContentType())
                .build();

        item = itemRepository.save(item);
    }

    @Override
    public List<Project> getAllItems() {
        return itemRepository.findAll();
    }

    /**-------------------------------Partner---------------------------------**/
    @Override
    public void submitPartner(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Partner partner = Partner.builder()
                .image(file.getBytes())
                .fileName(fileName)
                .fileType(file.getContentType())
                .build();

        partner = partnerRepository.save(partner);
    }

    @Override
    public List<Partner> getAllPartners() {
        return partnerRepository.findAll();
    }

    /**-------------------------------Gellary---------------------------------**/
    @Override
    public void submitGallery(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Gallery gallery = Gallery.builder()
                .image(file.getBytes())
                .fileName(fileName)
                .fileType(file.getContentType())
                .build();

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
}