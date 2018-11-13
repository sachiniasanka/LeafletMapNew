package com.javasampleapproach.angular4mongodb.service;

import com.javasampleapproach.angular4mongodb.dto.CustomerDTO;
import com.javasampleapproach.angular4mongodb.dto.Location1DTO;

import java.util.ArrayList;

public interface Location1Service {

    public boolean saveCoodinates(Location1DTO dto);
    public ArrayList<Location1DTO> getAllCoodinates();
    public  boolean deleteCoodinate(String id);

}
