using Microsoft.AspNetCore.Mvc;

namespace Project.WebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class ThemesController : ControllerBase
{
    private Themes? themes = new Themes();

    private readonly ILogger<ThemesController> _logger;

    public ThemesController(ILogger<ThemesController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetThemes")]
    public string[]? Get()
    {
        if (themes == null)
        {
            return null;
        }
        return themes.Names;
    }

    [HttpPost]
    public void Post(Themes data)
    {
        StreamWriter sw = new StreamWriter("./Test.txt");
        //Write a line of text
        sw.WriteLine("Hello World!!");
        //Write a second line of text
        sw.WriteLine(data.Names);
        //Close the file
        sw.Close();
    }
}
