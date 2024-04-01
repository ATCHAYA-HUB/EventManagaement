package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.Event_Details;

@Repository
public interface Event_DetailsRepo extends JpaRepository<Event_Details,Integer> {

}


