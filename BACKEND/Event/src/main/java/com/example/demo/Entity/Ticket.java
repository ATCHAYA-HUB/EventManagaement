package com.example.demo.Entity;





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
	private String tickettype;
	private int NumberofTickets;
	private int paymentid;
	
	
	
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
	public String getTickettype() {
		return tickettype;
	}
	public void setTickettype(String tickettype) {
		this.tickettype = tickettype;
	}
	public int getNumberofTickets() {
		return NumberofTickets;
	}
	public void setNumberofTickets(int numberofTickets) {
		NumberofTickets = numberofTickets;
	}
	public int getPaymentid() {
		return paymentid;
	}
	public void setPaymentid(int paymentid) {
		this.paymentid = paymentid;
	}

	public Ticket(int ticketid, int attendeeid, int eventid, String tickettype, int numberofTickets, int paymentid) {
		super();
		this.ticketid = ticketid;
		this.attendeeid = attendeeid;
		this.eventid = eventid;
		this.tickettype = tickettype;
		this.NumberofTickets = numberofTickets;
		this.paymentid = paymentid;
	}
	public Ticket()
	{
		
	}
}
