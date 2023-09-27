package com.andrew.profilowebsite;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.condition.OS;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.io.File;
import java.nio.file.Files;
import java.util.stream.Collectors;


@AutoConfigureMockMvc
@ContextConfiguration(classes = {WebController.class})
@WebMvcTest
public class MainControllerTest {
    @Autowired
    private MockMvc mvc;

    /**
     * Try the /Home endpoint and verify that html file is being served non-mutated
     * Fails if 404 or if content differs from file
     * @throws Exception if any error occurs
     */
    @Test
    public void testMainPage() throws Exception {
       MvcResult result =  mvc.perform(MockMvcRequestBuilders.get("/Home").accept("text/html")).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
       String strResult = result.getResponse().getContentAsString().strip();
        String homeHtmlFile;
       if(OS.current() == OS.WINDOWS){
           homeHtmlFile = Files.readAllLines(new File("src/main/resources/templates/Home.html").toPath()).stream().map(Object::toString).collect(Collectors.joining("\r\n")).strip();
       }
       else{
           homeHtmlFile = Files.readAllLines(new File("src/main/resources/templates/Home.html").toPath()).stream().map(Object::toString).collect(Collectors.joining("\n")).strip();
       }
       Assertions.assertEquals(strResult,homeHtmlFile);
    }

    /**
     * Try the /Blog endpoint and verify that html file is being served non-mutated
     * Fails if 404 or if content differs
     * @throws Exception if any errors occurs
     */
    @Test
    public void testBlogPage() throws Exception {
        MvcResult result =  mvc.perform(MockMvcRequestBuilders.get("/Blog").accept("text/html")).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
        String strResult = result.getResponse().getContentAsString().strip();
        String blogHtmlFile;
        if(OS.current() == OS.WINDOWS){
           blogHtmlFile = Files.readAllLines(new File("src/main/resources/templates/Blog.html").toPath()).stream().map(Object::toString).collect(Collectors.joining("\r\n")).strip();
        }
        else {
            blogHtmlFile = Files.readAllLines(new File("src/main/resources/templates/Blog.html").toPath()).stream().map(Object::toString).collect(Collectors.joining("\n")).strip();
        }
        Assertions.assertEquals(strResult,blogHtmlFile);
    }
}
