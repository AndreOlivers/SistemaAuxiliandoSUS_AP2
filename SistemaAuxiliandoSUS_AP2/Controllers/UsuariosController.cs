using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SistemaAuxiliandoSUS_AP2.Models;
using SistemaAuxiliandoSUS_AP2.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaAuxiliandoSUS_AP2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private IUsuarioService _usuarioService;

        public UsuariosController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }
        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Usuario>>> GetUsuarios()
        {
            try
            {
                var usuarios = await _usuarioService.GetUsuarios();
                return Ok(usuarios);

            }
            catch
            {
                //RETURN BADREQUEST("REQUEST INVÁLIDO")
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao obter Usuario");
            }

        }
        [HttpGet("UsuarioPorNome")]
        public async Task<ActionResult<IAsyncEnumerable<Usuario>>> GetUsuarioByName([FromQuery] string nome)
        {
            try
            {
                var usuarios = await _usuarioService.GetUsuarioByName(nome);
                if (usuarios == null)
                    return NotFound($"Não existem usuarios com o este {nome}");
                return Ok(usuarios);

            }
            catch
            {

                return BadRequest("Usuario não encontrado");
            }
        }
        [HttpGet("{id:int}", Name = "GetUsuario")]
        public async Task<ActionResult<IAsyncEnumerable<Usuario>>> GetUsuario(int id)
        {
            try
            {
                var usuarios = await _usuarioService.GetUsuario(id);
                if (usuarios == null)
                    return NotFound($"Não existem usuarios com o este id = {id}");

                return Ok(usuarios);
            }
            catch
            {

                return BadRequest("Usuario não encontrado");
            }

        }
        [HttpPost]
        public async Task<ActionResult> Create(Usuario usuario)
        {
            try
            {
                await _usuarioService.CreateUsuario(usuario);
                return CreatedAtRoute(nameof(GetUsuario), new { id = usuario.Id }, usuario);
            }

            catch
            {
                return BadRequest("Erro ao Cadastrar um usuário");
            }
        }
        [HttpPut("{id:int}")]
        public async Task<ActionResult> Edit(int id, [FromBody] Usuario usuario)
        {
            try
            {
                if(usuario.Id == id)
                {
                    await _usuarioService.UpdateUsuario(usuario);
                    return Ok ($"Aluno com id={id} foi atualizado com sucesso");
                }
                else
                {
                    return BadRequest("Dados não atualizados");
                }
            }

            catch
            {
                return BadRequest("Usuario não encontrado");
            }
        }
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                var usuario = await _usuarioService.GetUsuario(id);
                if(usuario != null)
                {
                    await _usuarioService.DeleteUsuario(usuario);
                    return Ok($"Usuario de id={id} foi excluido com sucesso");
                }
                else
                {
                    return NotFound($"Usuario com id={id} não encontrado");
                }
            }

            catch
            {
                return BadRequest("Usuario não encontrado");
            }
        }
    }
}
