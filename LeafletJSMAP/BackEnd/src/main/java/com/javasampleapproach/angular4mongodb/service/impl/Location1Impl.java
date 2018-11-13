package com.javasampleapproach.angular4mongodb.service.impl;

import com.javasampleapproach.angular4mongodb.dto.CustomerDTO;
import com.javasampleapproach.angular4mongodb.dto.Location1DTO;
import com.javasampleapproach.angular4mongodb.model.Customer;
import com.javasampleapproach.angular4mongodb.model.Location1;
import com.javasampleapproach.angular4mongodb.repo.Location1MongoRepository;
import com.javasampleapproach.angular4mongodb.service.Location1Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;


@Service
@Transactional(propagation = Propagation.SUPPORTS,readOnly = true)
public class Location1Impl implements Location1Service {

    @Autowired
    private Location1MongoRepository repository;

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean saveCoodinates(Location1DTO dto) {
        Location1 location1 = new Location1(dto.getId(),
                dto.getLat(),
                dto.getLng());

        repository.save(location1);
        return true;
    }

    @Override
    public ArrayList<Location1DTO> getAllCoodinates() {
        List<Location1> location1s = repository.findAll();
        ArrayList<Location1DTO> alLocations = new ArrayList<>();
        for (Location1 location1 : location1s) {
            Location1DTO location1DTO = new Location1DTO(location1.getId(),
                    location1.getLat(),
                    location1.getLng());
            alLocations.add(location1DTO);
        }
        return alLocations;    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean deleteCoodinate(String id) {
        repository.delete(id);
        return true;    }

}
