package com.javasampleapproach.angular4mongodb.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "location1")

public class Location1 {

    @Id
    private String id;
    private String lat;
    private  String lng;


    public Location1() {
    }

    public Location1(String id, String lat, String lng) {
        this.setId(id);
        this.setLat(lat);
        this.setLng(lng);
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLat() {
        return lat;
    }

    public void setLat(String lat) {
        this.lat = lat;
    }

    public String getLng() {
        return lng;
    }

    public void setLng(String lng) {
        this.lng = lng;
    }

    @Override
    public String toString() {
        return "Location1{" +
                "id='" + id + '\'' +
                ", lat='" + lat + '\'' +
                ", lng='" + lng + '\'' +
                '}';
    }
}
