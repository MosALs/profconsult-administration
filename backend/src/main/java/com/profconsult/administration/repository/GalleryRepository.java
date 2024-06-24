package com.profconsult.administration.repository;

import com.profconsult.administration.entity.Gallery;
import com.profconsult.administration.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GalleryRepository extends JpaRepository<Gallery, Integer> {
}
