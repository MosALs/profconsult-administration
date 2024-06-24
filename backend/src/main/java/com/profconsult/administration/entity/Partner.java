package com.profconsult.administration.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_partner")
public class Partner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Lob
    private byte[] image;
    private String fileName;
    private String fileType;
     public Partner(String fileName, String fileType, byte[] image) {
         this.fileName = fileName;
         this.fileType = fileType;
         this.image = image;
     }
}
