package com.iamneo.security.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Entity
@Transactional
@Table(name="eventstatus")
public class Event_Status 
{
	@Id
	private int eventid;
	private int eventattendence;
	private int rateofsuccess;
	private int totalnumber;
	public int getEventid() {
		return eventid;
	}
	public void setEventid(int eventid) {
		this.eventid = eventid;
	}
	public int getEventattendence() {
		return eventattendence;
	}
	public void setEventattendence(int eventattendence) {
		this.eventattendence = eventattendence;
	}
	public int getRateofsuccess() {
		return rateofsuccess;
	}
	public void setRateofsuccess(int rateofsuccess) {
		this.rateofsuccess = rateofsuccess;
	}
	public int getTotalnumber() {
		return totalnumber;
	}
	public void setTotalnumber(int totalnumber) {
		this.totalnumber = totalnumber;
	}
	public Event_Status(int eventid, int eventattendence, int rateofsuccess, int totalnumber) {
		super();
		this.eventid = eventid;
		this.eventattendence = eventattendence;
		this.rateofsuccess = rateofsuccess;
		this.totalnumber = totalnumber;
	}
	public Event_Status() {
		
	}
	//Bidirectional
	//@OneToOne(mappedBy="add")
	//private employee e;
	
	
}

