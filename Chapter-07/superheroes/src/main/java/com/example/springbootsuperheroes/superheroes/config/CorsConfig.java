package com.example.springbootsuperheroes.superheroes.config;


import java.util.Arrays;
import java.util.Collections;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    final AppProperties appProperties;

    public CorsConfig(AppProperties appProperties) {
        this.appProperties = appProperties;
    }

    @Value("${client.url}")
    private String CLIENT_URL;

    @Bean
    CorsFilter corsFilter() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowCredentials(true);
        corsConfiguration.setAllowedOrigins(Arrays.asList(CLIENT_URL));
        corsConfiguration.setAllowedHeaders(
                Arrays.asList(
                        "Origin",
                        "Access-Control-Allow-Origin",
                        "Content-Type",
                        "Accept",
                        "Authorization",
                        "Origin, Accept",
                        "X-Requested-With",
                        "Access-Control-Request-Method",
                        "Access-Control-Request-Headers"
                )
        );
        corsConfiguration.setExposedHeaders(
                Arrays.asList(
                        "Origin",
                        "Content-Type",
                        "Accept",
                        "Authorization",
                        "Access-Control-Allow-Origin",
                        "Access-Control-Allow-Origin",
                        "Access-Control-Allow-Credentials"
                )
        );
        corsConfiguration.setAllowedMethods(
                Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS")
        );
        var urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
        urlBasedCorsConfigurationSource.registerCorsConfiguration(
                "/**",
                corsConfiguration
        );

        return new CorsFilter(urlBasedCorsConfigurationSource);
    }
}
