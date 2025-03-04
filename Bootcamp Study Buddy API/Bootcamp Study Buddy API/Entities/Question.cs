using System;
using System.Collections.Generic;

namespace Bootcamp_Study_Buddy_API.Entities;

public partial class Question
{
    public int Id { get; set; }

    public string? QuestionText { get; set; }

    public string? AnswerText { get; set; }

    public virtual ICollection<Favorite> Favorites { get; set; } = new List<Favorite>();
}
