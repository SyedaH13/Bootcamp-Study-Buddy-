using System;
using System.Collections.Generic;

namespace Bootcamp_Study_Buddy_API.Entities;

public partial class Favorite
{
    public int Id { get; set; }

    public int? FavoriteId { get; set; }

    public virtual Question? FavoriteNavigation { get; set; }
}
