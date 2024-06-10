package com.profconsult.administration.entity;


import com.profconsult.administration.enums.Role;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_item")
public class Item  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String topic;
    @Lob
    private byte[] image;
    private String fileName;
    private String fileType;
     public Item(String fileName, String fileType, byte[] image) {
         this.fileName = fileName;
         this.fileType = fileType;
         this.image = image;
     }
}
