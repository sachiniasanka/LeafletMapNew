package com.javasampleapproach.angular4mongodb.dto;

public class Location1DTO {

    private String id;
    private String lat;
    private String lng;


    public Location1DTO() {
    }

    public Location1DTO(String id, String lat, String lng) {
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
        return "Location1DTO{" +
                "id='" + id + '\'' +
                ", lat='" + lat + '\'' +
                ", lng='" + lng + '\'' +
                '}';
    }
}
