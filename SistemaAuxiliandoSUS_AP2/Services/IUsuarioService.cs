using SistemaAuxiliandoSUS_AP2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaAuxiliandoSUS_AP2.Services
{
    public interface IUsuarioService
    {
        Task<IEnumerable<Usuario>> GetUsuarios();
        Task<Usuario> GetUsuario(long id);

        Task<IEnumerable<Usuario>> GetUsuarioByName(string nome);

        Task CreateUsuario(Usuario usuario);

        Task UpdateUsuario(Usuario usuario);

        Task DeleteUsuario(Usuario usuario);
       
    }
}
