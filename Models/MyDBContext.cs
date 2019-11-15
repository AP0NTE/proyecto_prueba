using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
namespace EJ1.Models
{
    public class MyDBContext:DbContext
    {
        public MyDBContext(DbContextOptions<MyDBContext> options):base(options){

        }
        public DbSet<MyDBItem> MyDBItems {get;set;}
        
    }
}