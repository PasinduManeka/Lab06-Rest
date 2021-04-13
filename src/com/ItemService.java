package com;

import javax.ws.rs.Consumes; 

import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import model.Item;

@Path("/Items")
public class ItemService
{
	Item itemObj = new Item();
	
	@GET
	@Path("/")
	@Produces(MediaType.TEXT_HTML)
	public String readItems()
	{
		return itemObj.readItems();
	}
	
	
	@POST
	@Path("/add")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.TEXT_PLAIN)
	public String insertItem(@FormParam("itemCode") String code,
	 @FormParam("itemName") String name,
	 @FormParam("itemPrice") String price,
	 @FormParam("itemDesc") String desc)
	{
		String output = itemObj.insertItem(code, name, price, desc);
		return output;
	}
	
	
	
	
	
	
}
