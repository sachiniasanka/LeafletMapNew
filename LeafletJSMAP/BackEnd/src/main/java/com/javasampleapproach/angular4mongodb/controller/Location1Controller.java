package com.javasampleapproach.angular4mongodb.controller;

import com.javasampleapproach.angular4mongodb.dto.CustomerDTO;
import com.javasampleapproach.angular4mongodb.dto.Location1DTO;
import com.javasampleapproach.angular4mongodb.dto.LocationDTO;
import com.javasampleapproach.angular4mongodb.service.Location1Service;
import com.javasampleapproach.angular4mongodb.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/v1/location1")
public class Location1Controller {

    @Autowired
    private Location1Service service;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean saveCoodinates(@RequestBody Location1DTO location1)
    {
//

        System.out.println("result"+location1);

        return  service.saveCoodinates(location1);

    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<Location1DTO> getAllCoodinates() {
        return service.getAllCoodinates();
    }

    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean deleteCoodinate(@PathVariable("id") String id) {
        return service.deleteCoodinate(id);
    }


}
