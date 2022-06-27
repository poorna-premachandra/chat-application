package com.example.chatapplication.controller;

import com.example.chatapplication.dto.GreetingDto;
import com.example.chatapplication.dto.HelloMessageDto;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class HelloWorldController {

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public GreetingDto greeting(HelloMessageDto helloMessage) throws InterruptedException {
        Thread.sleep(1000);
        return new GreetingDto("Hello, " + HtmlUtils.htmlEscape(helloMessage.getName()) + "!");
    }
}
