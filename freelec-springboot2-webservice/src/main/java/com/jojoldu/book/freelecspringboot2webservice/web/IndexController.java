package com.jojoldu.book.freelecspringboot2webservice.web;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@RequiredArgsConstructor
@Controller
public class IndexController {

    @GetMapping("/")
    public String index() {
        return "index"; // mustache 스타터 덕에 확장자 자동지정
    }

    @GetMapping("/posts/save")
    public String postSave() {
        return "posts-save";
    }


}
