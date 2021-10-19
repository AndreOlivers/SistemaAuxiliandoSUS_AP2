using Microsoft.AspNetCore.Authorization;
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
    public class LoginsController : ControllerBase
    {
        private ILoginService _loginService;

        public LoginsController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> AutenticaUsuario([FromBody]LoginVM login)
        {
            if (string.IsNullOrEmpty(login.Login) || string.IsNullOrEmpty(login.Senha))
                return BadRequest("Login ou senha não pode ser vázio");

            var usuario = await _loginService.AutenticaUsuario(login.Login, login.Senha);
            if (usuario == null)
                return Unauthorized();

            return Ok(usuario);
        }
    }
}
