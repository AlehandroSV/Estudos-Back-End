using ApiCatalago.Context;
using ApiCatalago.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiCatalago.Controllers {

    [Route("[controller]")]
    [ApiController]
    public class CategoriasController : ControllerBase {
        private readonly AppDbContext _context;

        public CategoriasController(AppDbContext context) {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Categoria>> Get() {
            try {
                return _context.Categorias.AsNoTracking().ToList();
            } catch (Exception) {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um problema ao tratar a sua solicitação!");
            }
        }

        [HttpGet("produto")]
        public ActionResult<IEnumerable<Categoria>> GetCatergoriasProdutos() {
            //return _context.Categorias.Include(p => p.Produtos).AsNoTracking().ToList();
            //return _context.Categorias.Include(p => p.Produtos).AsNoTracking().Where(c => c.CategoriaId <= 5).ToList();
            return _context.Categorias.Include(p => p.Produtos).AsNoTracking().Take(10).ToList();
        }

        [HttpGet("id:int", Name = "ObterCategoria")]
        public ActionResult<Categoria> Get(int id) {
            try {
                var categoria = _context.Categorias.AsNoTracking().FirstOrDefault(p => p.CategoriaId == id);

                if (categoria == null) {
                    return NotFound($"Categoria com id={id} não encontrada...");
                }

                return categoria;
            } catch (Exception) {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um problema ao tratar a sua solicitação!");
            }
        }

        [HttpPost]
        public ActionResult Post(Categoria categoria) {
            if (categoria is null) {
                return BadRequest();
            }

            _context.Categorias.Add(categoria);
            _context.SaveChanges();

            return new CreatedAtRouteResult("ObterCategoria", new { id = categoria.CategoriaId }, categoria);
        }

        [HttpPut("id:int")]
        public ActionResult Put(int id, Categoria categoria) {
            if (id != categoria.CategoriaId) {
                return BadRequest("Dados inválidos");
            }

            _context.Entry(categoria).State = EntityState.Modified;
            _context.SaveChanges();

            return Ok(categoria);
        }

        [HttpDelete("id:int")]
        public ActionResult<Categoria> Delete(int id) {
            var categoria = _context.Categorias.FirstOrDefault(p => p.CategoriaId == id);

            if (categoria == null) {
                return NotFound($"Categoria com id={id} não encontrada...");
            }

            _context.Categorias.Remove(categoria);
            _context.SaveChanges();

            return Ok(categoria);
        }
    }
}
