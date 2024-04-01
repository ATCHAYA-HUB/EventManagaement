package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.Ticket;

@Repository
public interface TicketRepo extends JpaRepository<Ticket,Integer> {

}


