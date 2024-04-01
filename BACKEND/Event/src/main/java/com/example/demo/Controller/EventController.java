package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Attendee;
import com.example.demo.Entity.Event_Details;
import com.example.demo.Entity.Event_Status;
import com.example.demo.Entity.Login;
import com.example.demo.Entity.Organizer;
import com.example.demo.Entity.Payment;
import com.example.demo.Entity.Ticket;
import com.example.demo.Repository.AttendeeRepo;
import com.example.demo.Repository.Event_DetailsRepo;
import com.example.demo.Repository.Event_StatusRepo;
import com.example.demo.Repository.LoginRepo;
import com.example.demo.Repository.OrganizerRepo;
import com.example.demo.Repository.PaymentRepo;
import com.example.demo.Repository.TicketRepo;


@CrossOrigin
@RestController
public class EventController 
{
	@Autowired
	private AttendeeRepo ar;
	@Autowired
	private Event_DetailsRepo edr;
	@Autowired
	private Event_StatusRepo esr;
	@Autowired
	private OrganizerRepo or;
	@Autowired
	private PaymentRepo pr;
	@Autowired
	private TicketRepo tr;
	@Autowired
	private LoginRepo lr;
	
	@PostMapping("/save/attendee")
	public ResponseEntity<String> savedetails(@RequestBody Attendee e)
	{
		ar.save(e);
		return ResponseEntity.ok("Data Saved");
	}
	@PostMapping("/login")
	public ResponseEntity<String> savedetailsLogin(@RequestBody Login l)
	{
		lr.save(l);
		return ResponseEntity.ok("Data Saved");
	}
	@PostMapping("/save/eventdetails")
	public ResponseEntity<String> savedetails1(@RequestBody Event_Details ed)
	{
		edr.save(ed);
		return ResponseEntity.ok("Data Saved");
	}
	@PostMapping("/save/eventstatus")
	public ResponseEntity<String> savedetails2(@RequestBody Event_Status es)
	{
		esr.save(es);
		return ResponseEntity.ok("Data Saved");
	}
	@PostMapping("/save/organizer")
	public ResponseEntity<String> savedetails3(@RequestBody Organizer o)
	{
		or.save(o);
		return ResponseEntity.ok("Data Saved");
	}
	@PostMapping("/save/payment")
	public ResponseEntity<String> savedetails4(@RequestBody Payment p)
	{
		pr.save(p);
		return ResponseEntity.ok("Data Saved");
	}
	@PostMapping("/save/ticket")
	public ResponseEntity<String> savedetails5(@RequestBody Ticket t)
	{
		tr.save(t);
		return ResponseEntity.ok("Data Saved");
	}
	
	@GetMapping("/show/attendee")
	public List<Attendee> getDetails()
	{
		return ar.findAll();
	}
	@GetMapping("/show/login")
	public List<Login> getDetailsLogin()
	{
		return lr.findAll();
	}
	@GetMapping("/show/eventdetails")
	public List<Event_Details> getDetails1()
	{
		return edr.findAll();
	}
	@GetMapping("/show/eventstatus")
	public List<Event_Status> getDetails2()
	{
		return esr.findAll();
	}
	@GetMapping("/show/organizer")
	public List<Organizer> getDetails3()
	{
		return or.findAll();
	}
	@GetMapping("/show/payment")
	public List<Payment> getDetails4()
	{
		return pr.findAll();
	}
	@GetMapping("/show/ticket")
	public List<Ticket> getDetails5()
	{
		return tr.findAll();
	}
	@PutMapping("/update/attendee")
	public Attendee update1(@RequestBody Attendee a)
	{
		return ar.saveAndFlush(a);
	}
	@PutMapping("/update/eventdetails")
	public Event_Details update2(@RequestBody Event_Details ed)
	{
		return edr.saveAndFlush(ed);
	}
	@PutMapping("/update/eventstatus")
	public Event_Status update3(@RequestBody Event_Status es)
	{
		return esr.saveAndFlush(es);
	}
	@PutMapping("/update/organizer")
	public Organizer update4(@RequestBody Organizer o)
	{
		return or.saveAndFlush(o);
	}
	@PutMapping("/update/payment")
	public Payment update5(@RequestBody Payment p)
	{
		return pr.saveAndFlush(p);
	}
	@PutMapping("/update/ticket")
	public Ticket update6(@RequestBody Ticket t)
	{
		return tr.saveAndFlush(t);
	}
	@DeleteMapping("/delete/attendee/{id}")
	public ResponseEntity<String> delete(@PathVariable int id)
	{
		ar.deleteById(id);
		return ResponseEntity.ok("Data Deleted");
	}
	@DeleteMapping("/delete/eventdetails/{id}")
	public ResponseEntity<String> delete1(@PathVariable int id)
	{
		edr.deleteById(id);
		return ResponseEntity.ok("Data Deleted");
	}
	@DeleteMapping("/delete/eventstatus/{id}")
	public ResponseEntity<String> delete2(@PathVariable int id)
	{
		esr.deleteById(id);
		return ResponseEntity.ok("Data Deleted");
	}
	@DeleteMapping("/delete/organizer/{id}")
	public ResponseEntity<String> delete3(@PathVariable int id)
	{
		or.deleteById(id);
		return ResponseEntity.ok("Data Deleted");
	}
	@DeleteMapping("/delete/payment/{id}")
	public ResponseEntity<String> delete4(@PathVariable int id)
	{
		pr.deleteById(id);
		return ResponseEntity.ok("Data Deleted");
	}
	@DeleteMapping("/delete/ticket/{id}")
	public ResponseEntity<String> delete5(@PathVariable int id)
	{
		tr.deleteById(id);
		return ResponseEntity.ok("Data Deleted");
	}
}
