package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.Attendee;

@Repository
public interface AttendeeRepo extends JpaRepository<Attendee,Integer> {

}

