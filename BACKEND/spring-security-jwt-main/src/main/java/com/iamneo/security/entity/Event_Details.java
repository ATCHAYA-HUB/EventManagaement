package com.iamneo.security.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Transactional
@Table(name="eventdetails")
public class Event_Details 
{
	@Id
	private int id;
	private String organiser;
	private String startdate;
	private String enddate;
	private String eventtype;
	private String eventname;
	private String venue;
	private String eventdescription;
	private String eventagenda;
	private String starttime;
	private String endtime;
	private float priceperperson;
}
