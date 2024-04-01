package com.iamneo.security.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Entity
@Transactional
@Table(name="attendee")
public class Attendee 
{
	@Id
	@GeneratedValue
	private int attendeeid;
	private String name;
	private String email;
	private String password;
	private long contact;
	
//	Bidirectional
//	@OneToMany(cascade = CascadeType.ALL)
//	@JoinColumn(name="fk_add_id")
//	private List<Ticket> t;
	
	public int getAttendeeid() {
		return attendeeid;
	}
	public void setAttendeeid(int attendeeid) {
		this.attendeeid = attendeeid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public long getContact() {
		return contact;
	}
	public void setContact(long contact) {
		this.contact = contact;
	}
	public Attendee(int attendeeid, String name, String email, String password, long contact) {
		super();
		this.attendeeid = attendeeid;
		this.name = name;
		this.email = email;
		this.contact = contact;
	}
	public Attendee() {
		
	}
}
