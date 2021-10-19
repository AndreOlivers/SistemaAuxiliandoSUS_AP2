using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaAuxiliandoSUS_AP2.Models
{
    public class Sintoma
    {
        [Key]
        public long Id { get; set; }
        [Required]
        [DisplayName("Descreva os Sintomas")]
        public string Descrição { get; set; }
    }
}
