package com.andrew.profilowebsite;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping(value = {"/","/home","/Home","home.html","Home.html"})
    public String home(){
        return "Home";
    }

    @GetMapping(value = {"/Blog","/blog","Blog.html","blog.html"})
    public String blog(){
        return "Blog";
    }
}
