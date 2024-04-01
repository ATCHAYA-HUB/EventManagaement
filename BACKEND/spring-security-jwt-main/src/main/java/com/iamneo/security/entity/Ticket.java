package com.iamneo.security.entity;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Entity
@Transactional
@Table(name="ticket")
public class Ticket 
{
	@Id
	@GeneratedValue
	private int ticketid;
	private int attendeeid;
	private int eventid;
	private int NumberofTickets;
	private int amount;
	
	
	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public int getTicketid() {
		return ticketid;
	}
	
	public int getAttendeeid() {
		return attendeeid;
	}

	public void setAttendeeid(int attendeeid) {
		this.attendeeid = attendeeid;
	}

	public void setTicketid(int ticketid) {
		this.ticketid = ticketid;
	}
	public int getEventid() {
		return eventid;
	}
	public void setEventid(int eventid) {
		this.eventid = eventid;
	}
	public int getNumberofTickets() {
		return NumberofTickets;
	}
	public void setNumberofTickets(int numberofTickets) {
		NumberofTickets = numberofTickets;
	}
	public Ticket(int ticketid, int attendeeid, int eventid, int numberofTickets, int amount) {
		super();
		this.ticketid = ticketid;
		this.attendeeid = attendeeid;
		this.eventid = eventid;
		this.NumberofTickets = numberofTickets;
		this.amount = amount;
	}
	public Ticket()
	{
		
	}
}