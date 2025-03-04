using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Bootcamp_Study_Buddy_API.Entities;

public partial class StudyBuddyContext : DbContext
{
    public StudyBuddyContext()
    {
    }

    public StudyBuddyContext(DbContextOptions<StudyBuddyContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Favorite> Favorites { get; set; }

    public virtual DbSet<Question> Questions { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Name=DefaultConnection");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Favorite>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Favorite__3214EC0788181FBF");

            entity.HasOne(d => d.FavoriteNavigation).WithMany(p => p.Favorites)
                .HasForeignKey(d => d.FavoriteId)
                .HasConstraintName("FK__Favorites__Favor__398D8EEE");
        });

        modelBuilder.Entity<Question>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Question__3214EC27A8204FBC");

            entity.ToTable("Question");

            entity.Property(e => e.Id).HasColumnName("ID");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
