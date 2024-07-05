package com.profconsult.administration.dao.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LinkObject {
    private String instagramURL;
    private String facebookURL;
    private String linkedinURL;
    private String twitterURL;
}
