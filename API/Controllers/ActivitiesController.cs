using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;


namespace API.Controllers;

public class ActivitiesController(AppDbContext context): BaseApiController
{
   // private readonly AppDbContext context; //through methods inside this class, refers to data, files, or memory that can be accessed and read but not modified, edited, or deleted.
    
   // public ActivitiesController(AppDbContext context)
   // {
    //    this.context = context;
    //}

    [HttpGet]
    
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        return await context.Activities.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivityDetail(string id)
    {
        var activity = await context.Activities.FindAsync(id);
        
        if(activity == null) return NotFound(); 
        return activity;
    }
}