package com.example.chatapplication.dto;

public class GreetingDto {

    private String message;

    public GreetingDto() {
    }

    public GreetingDto(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
