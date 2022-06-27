package com.example.chatapplication.dto;

public class HelloMessageDto {

    private String name;

    public HelloMessageDto() {
    }

    public HelloMessageDto(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
