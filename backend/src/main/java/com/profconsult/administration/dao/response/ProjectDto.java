package com.profconsult.administration.dao.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectDto {


    private Integer id;
    private String titleEn;
    private String topicEn;
    private String titleAr;
    private String topicAr;
    private String image;
    private String fileName;
    private String fileType;
}
