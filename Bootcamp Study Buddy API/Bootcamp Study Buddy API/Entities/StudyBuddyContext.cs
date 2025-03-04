using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Bootcamp_Study_Buddy_API.Entities;

public partial class StudyBuddyContext : DbContext
{
    public StudyBuddyContext(DbContextOptions<StudyBuddyContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
