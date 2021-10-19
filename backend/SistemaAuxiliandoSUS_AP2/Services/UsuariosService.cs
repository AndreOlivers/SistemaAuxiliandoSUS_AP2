using Microsoft.EntityFrameworkCore;
using SistemaAuxiliandoSUS_AP2.Context;
using SistemaAuxiliandoSUS_AP2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaAuxiliandoSUS_AP2.Services
{
    public class UsuariosService : IUsuarioService
    {
        private readonly AppDbContext _context;
        public UsuariosService(AppDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Usuario>> GetUsuarios()
        {
            try
            {
                return await _context.Usuarios.ToListAsync();
            }
            catch
            {
                throw;
            }
           
        }
        public async Task<Usuario> GetUsuario(long id)
        {
            var usuario = await _context.Usuarios.FindAsync(id);
            return usuario;
        }
        public async Task<IEnumerable<Usuario>> GetUsuarioByName(string nome)
        {
            IEnumerable<Usuario> usuarios;
            if (!string.IsNullOrWhiteSpace(nome))
            {
                usuarios = await _context.Usuarios
                    .Where(u => u.Nome.Contains(nome))
                    .ToListAsync();
            }
            else
            {
                usuarios = await GetUsuarios();
            }
            return usuarios;
        }
        public async Task CreateUsuario(Usuario usuario)
        {
            _context.Usuarios.Add(usuario);
            await _context.SaveChangesAsync();

        }
        public async Task UpdateUsuario(Usuario usuario)
        {
            _context.Entry(usuario).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
        public async Task DeleteUsuario(Usuario usuario)
        {
            _context.Usuarios.Remove(usuario);
            await _context.SaveChangesAsync();
        }
    }
}
