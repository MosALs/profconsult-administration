package com.profconsult.administration.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface DashboardService {
    void submitItem(MultipartFile file, String title, String topic) throws IOException;
}
