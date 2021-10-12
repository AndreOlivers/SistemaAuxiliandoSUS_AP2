using Microsoft.EntityFrameworkCore;
using SistemaAuxiliandoSUS_AP2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaAuxiliandoSUS_AP2.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Usuario> Usuarios { get; set; }

        public DbSet<Sintoma> Sintomas { get; set; }
    }
}
