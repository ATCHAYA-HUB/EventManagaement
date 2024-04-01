package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.Event_Status;

@Repository
public interface Event_StatusRepo extends JpaRepository<Event_Status,Integer> {

}


