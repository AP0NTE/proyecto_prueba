using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EJ1.Models;
namespace NuevoProyecto.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyDBController:ControllerBase
    {
        private readonly MyDBContext _context;
    public MyDBController(MyDBContext context)
    {
    _context = context;
    if (_context.MyDBItems.Count() == 0)
    {
        // Crea un nuevo item si la coleccion esta vacia,
        // lo que significa que no puedes borrar todos los Items.
        _context.MyDBItems.Add(new MyDBItem {  Name ="sebastian@gmail.com", Text = "Aponte",});
        _context.SaveChanges();
    }
    }

    // GET: api/MyDB
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MyDBItem>>> GetMyDBItems()
        {
            return await _context.MyDBItems.ToListAsync();
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<MyDBItem>> PostMyDBItem(MyDBItem item)
        {
                _context.MyDBItems.Add(item);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetMyDBItems), new { id = item.Id }, item);
                        }
        }
        
}