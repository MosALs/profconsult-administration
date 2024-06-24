package com.profconsult.administration.repository;

import com.profconsult.administration.entity.Partner;
import com.profconsult.administration.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PartnerRepository extends JpaRepository<Partner, Integer> {
}
