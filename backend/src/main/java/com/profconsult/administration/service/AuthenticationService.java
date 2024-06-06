package com.profconsult.administration.service;

import com.profconsult.administration.dao.request.SignUpRequest;
import com.profconsult.administration.dao.request.SigninRequest;
import com.profconsult.administration.dao.response.JwtAuthenticationResponse;

public interface AuthenticationService {

    JwtAuthenticationResponse signup(SignUpRequest request);

    JwtAuthenticationResponse signin(SigninRequest request);
}
