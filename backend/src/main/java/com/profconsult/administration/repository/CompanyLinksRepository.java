package com.profconsult.administration.repository;

import com.profconsult.administration.entity.CompanyLinks;
import com.profconsult.administration.entity.Gallery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyLinksRepository extends JpaRepository<CompanyLinks, Integer> {
}
