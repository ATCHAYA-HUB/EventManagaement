package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Entity
@Transactional
@Table(name="payment")
public class Payment 
{
	@Id
	@GeneratedValue
	private int paymentid;
	private int organizerid;
	private int attendeeid;
	private String paymenttype;
	private String paymentstatus;
	public int getPaymentid() {
		return paymentid;
	}
	public void setPaymentid(int paymentid) {
		this.paymentid = paymentid;
	}
	public int getOrganizerid() {
		return organizerid;
	}
	public void setOrganizerid(int organizerid) {
		this.organizerid = organizerid;
	}
	public int getAttendeeid() {
		return attendeeid;
	}
	public void setAttendeeid(int attendeeid) {
		this.attendeeid = attendeeid;
	}
	public String getPaymenttype() {
		return paymenttype;
	}
	public void setPaymenttype(String paymenttype) {
		this.paymenttype = paymenttype;
	}
	public String getPaymentstatus() {
		return paymentstatus;
	}
	public void setPaymentstatus(String paymentstatus) {
		this.paymentstatus = paymentstatus;
	}
	public Payment(int paymentid, int organizerid, int attendeeid, String paymenttype, String paymentstatus) {
		super();
		this.paymentid = paymentid;
		this.organizerid = organizerid;
		this.attendeeid = attendeeid;
		this.paymenttype = paymenttype;
		this.paymentstatus = paymentstatus;
	}
	public Payment()
	{
		
	}
	//Bidirectional
	//@OneToOne(mappedBy="add")
	//private employee e;
	
	
}

