package com.profconsult.administration.dao.response;

import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GalleryDto {

    private Integer id;
    private String image;
    private String fileName;
    private String fileType;

}
