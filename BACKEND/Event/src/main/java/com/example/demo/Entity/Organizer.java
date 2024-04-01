package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Entity
@Transactional
@Table(name="organizer")
public class Organizer 
{
	@Id
	@GeneratedValue
	private int organizerid;
	private String organizername;
	private String email;
	private String password;
	private long contact;
	public int getOrganizerid() {
		return organizerid;
	}
	public void setOrganizerid(int organizerid) {
		this.organizerid = organizerid;
	}
	public String getOrganizername() {
		return organizername;
	}
	public void setOrganizername(String organizername) {
		this.organizername = organizername;
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
	public Organizer(int organizerid, String organizername, String email, String password, long contact) {
		super();
		this.organizerid = organizerid;
		this.organizername = organizername;
		this.email = email;
		this.password = password;
		this.contact = contact;
	}
	public Organizer()
	{
		
	}
	//Bidirectional
	//@OneToOne(mappedBy="add")
	//private employee e;
	
	
}
