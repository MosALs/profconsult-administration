package com.profconsult.administration.service;

import com.profconsult.administration.entity.Item;
import com.profconsult.administration.repository.ItemRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


@Service
@AllArgsConstructor
public class DashboardServiceImpl implements DashboardService{

    private final ItemRepository itemRepository;
    @Override
    public void submitItem(MultipartFile file, String title, String topic) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Item item = Item.builder()
                .title(title)
                .topic(topic)
                .image(file.getBytes())
                .fileName(fileName)
                .fileType(file.getContentType())
                .build();

        item = itemRepository.save(item);
    }
}