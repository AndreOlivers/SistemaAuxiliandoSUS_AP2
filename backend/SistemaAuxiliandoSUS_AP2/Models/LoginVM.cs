using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaAuxiliandoSUS_AP2.Models
{
    /// <summary>
    /// Login View Model
    /// </summary>
    public class LoginVM
    {
        public LoginVM()
        {

        }
        public LoginVM(string loginUsuario , string senhaUsuario)
        {
            Login = loginUsuario;
            Senha = senhaUsuario;
        }

        public string Login  { get; set; }
        public string Senha { get; set; }

    }
}
