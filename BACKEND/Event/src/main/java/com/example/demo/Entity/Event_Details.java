package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Entity
@Transactional
@Table(name="eventdetails")
public class Event_Details 
{
	@Id
	@GeneratedValue
	private int eventid;
	private String eventname;
	private String venue;
	private String eventdescription;
	private String eventagenda;
	private String starttime;
	private String endtime;
	private int capacity;
	private float priceperperson;
	public int getEventid() {
		return eventid;
	}
	public void setEventid(int eventid) {
		this.eventid = eventid;
	}
	public String getEventname() {
		return eventname;
	}
	public void setEventname(String eventname) {
		this.eventname = eventname;
	}
	public String getVenue() {
		return venue;
	}
	public void setVenue(String venue) {
		this.venue = venue;
	}
	public String getEventdescription() {
		return eventdescription;
	}
	public void setEventdescription(String eventdescription) {
		this.eventdescription = eventdescription;
	}
	public String getEventagenda() {
		return eventagenda;
	}
	public void setEventagenda(String eventagenda) {
		this.eventagenda = eventagenda;
	}
	public String getStarttime() {
		return starttime;
	}
	public void setStarttime(String starttime) {
		this.starttime = starttime;
	}
	public String getEndtime() {
		return endtime;
	}
	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}
	public int getCapacity() {
		return capacity;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	public float getPriceperperson() {
		return priceperperson;
	}
	public void setPriceperperson(float priceperperson) {
		this.priceperperson = priceperperson;
	}
	public Event_Details(int eventid, String eventname, String venue, String eventdescription, String eventagenda,
			String starttime, String endtime, int capacity, float priceperperson) {
		super();
		this.eventid = eventid;
		this.eventname = eventname;
		this.venue = venue;
		this.eventdescription = eventdescription;
		this.eventagenda = eventagenda;
		this.starttime = starttime;
		this.endtime = endtime;
		this.capacity = capacity;
		this.priceperperson = priceperperson;
	}
	public Event_Details(){
		
	}
	
	//Bidirectional
	//@OneToOne(mappedBy="add")
	//private employee e;
	
	
	
}
