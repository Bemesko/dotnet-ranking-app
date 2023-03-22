using Microsoft.AspNetCore.Mvc;
using RankingApp.Models;

namespace RankingApp.Controllers;

// Because of the Route annotation, all routes will start with /item/
[ApiController]
[Route("[controller]")]
public class ItemController : ControllerBase
{
    private static readonly IEnumerable<ItemModel> Items = new[]{
        new ItemModel{Id = 1, Title = "A Clockwork Orange", ImageId = 1, Ranking = 0, ItemType = 1},
        new ItemModel{Id = 2, Title = "500 Days of Summer", ImageId = 2, Ranking = 0, ItemType = 1},
        new ItemModel{Id = 3, Title = "Silver Linings Playbook", ImageId = 3, Ranking = 0, ItemType = 1},
        new ItemModel{Id = 4, Title = "The Shawshank Redemption", ImageId = 4, Ranking = 0, ItemType = 1},
        new ItemModel{Id = 5, Title = "Whiplash", ImageId = 5, Ranking = 0, ItemType = 1},
        new ItemModel{Id = 6, Title = "Soul", ImageId = 6, Ranking = 0, ItemType = 1},
        new ItemModel{Id = 7, Title = "Amélie", ImageId = 7, Ranking = 0, ItemType = 1},
        new ItemModel{Id = 8, Title = "Lightyear", ImageId = 8, Ranking = 0, ItemType = 1},
        new ItemModel{Id = 9, Title = "Midsommar", ImageId = 9, Ranking = 0, ItemType = 1},
    };

    [HttpGet("{itemType:int}")]
    public ItemModel[] Get(int itemType)
    {
        ItemModel[] items = Items.Where(i => i.ItemType == itemType).ToArray();
        System.Threading.Thread.Sleep(2000);
        return items;
    }
}