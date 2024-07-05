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
@Table(name = "_item")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titleEn;
    private String topicEn;
    private String titleAr;
    private String topicAr;
    @Lob
    @Column(name = "image" , nullable = true , columnDefinition = "LONGBLOB")
    private byte[] image;
    private String fileName;
    private String fileType;
     public Project(String fileName, String fileType, byte[] image) {
         this.fileName = fileName;
         this.fileType = fileType;
         this.image = image;
     }
}
