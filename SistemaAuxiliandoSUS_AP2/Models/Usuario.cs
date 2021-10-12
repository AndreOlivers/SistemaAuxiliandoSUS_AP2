using SistemaAuxiliandoSUS_AP2.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaAuxiliandoSUS_AP2.Models
{
    [Table("Usuarios")]
    public class Usuario
    {
        [Key]
        public long Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Nome { get; set; }
        [Required]
        [StringLength(80)]
        public string Sobrenome { get; set; }
        [Required]
        public int Idade { get; set; }
        [Required]
        [EmailAddress]
        [StringLength(100)]
        public string Email { get; set; }
        [Required(ErrorMessage = "Obrigatório CPF")]
        public string CPF { get; set; }
        [Required]
        [DataType(DataType.Password)]
        [StringLength(10, MinimumLength = 4, ErrorMessage = "A senha deve ter entre 4 e 10 caracteres")]
        public string Senha { get; set; }
        [Required]
        [DisplayName("Confirmar a Senha")]
        [DataType(DataType.Password)]
        [StringLength(10, MinimumLength = 4, ErrorMessage = "A senha deve ter entre 4 e 10 caracteres")]
        public string ConfimarSenha { get; set; }
        [Required]
        public string Cidade { get; set; }
        [Required]
        [DisplayName("Estado")]
        public Estados Estado { get; set; }
        [Required]
        [DisplayName("Estado")]
        public Genero Generos { get; set; }

    }
}
