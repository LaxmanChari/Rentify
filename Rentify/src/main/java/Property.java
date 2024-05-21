package com.rentify.model;

import javax.persistence.*;

@Entity
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String area;
    private int numberOfBedrooms;
    private int numberOfBathrooms;
    private String nearbyHospitals;
    private String nearbyColleges;
    @ManyToOne
    private User seller;

    // getters and setters
}
