using Microsoft.AspNetCore.Mvc;

namespace Project.WebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            // Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Date = "123",
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }

    [HttpPost]
    public void Post(WeatherForecast w)
    {
        StreamWriter sw = new StreamWriter("./Test.txt");
        //Write a line of text
        sw.WriteLine("Hello World!!");
        //Write a second line of text
        sw.WriteLine(w.Date);
        //Close the file
        sw.Close();
    }
}
