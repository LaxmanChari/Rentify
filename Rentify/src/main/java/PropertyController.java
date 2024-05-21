package com.rentify.controller;

import com.rentify.model.Property;
import com.rentify.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/properties")
public class PropertyController {
    @Autowired
    private PropertyService propertyService;

    @PostMapping
    public Property postProperty(@RequestBody Property property) {
        return propertyService.saveProperty(property);
    }

    @GetMapping("/seller/{sellerId}")
    public List<Property> getPropertiesBySeller(@PathVariable Long sellerId) {
        return propertyService.getPropertiesBySeller(sellerId);
    }

    @GetMapping
    public List<Property> getAllProperties() {
        return propertyService.getAllProperties();
    }
}
