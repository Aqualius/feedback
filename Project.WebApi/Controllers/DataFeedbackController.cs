using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Collections.Generic;

namespace Project.WebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class DataFeedbackController : ControllerBase
{
    private readonly ILogger<DataFeedbackController> _logger;

    public DataFeedbackController(ILogger<DataFeedbackController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetDataFeedback")]
    public string Get()
    {
        return "OK";
    }

    [HttpPost]
    public string? Post(DataFeedback data)
    {
        MySqlConnection? conn = DBConnect.getConn();

        int id_contact = 0;
        int id_theme = 0;
        
        // check contact
        string sql = "SELECT id FROM contacts WHERE email = @email AND telephone = @telephone";
        MySqlCommand command = new MySqlCommand(sql, conn);
        command.Parameters.AddWithValue("@email", data.Email);
        command.Parameters.AddWithValue("@telephone", data.Telephone);

        MySqlDataReader reader = command.ExecuteReader();
        if (reader.Read())
        {
            id_contact = reader.GetInt32(0);
        }
        reader.Close();

        if (id_contact == 0)
        {
            command.CommandText = "INSERT contacts (name, email, telephone) VALUES (@name, @email, @telephone)";
            command.Parameters.AddWithValue("@name", data.Name);
            command.ExecuteNonQuery();
            command.CommandText = "SELECT @@IDENTITY";
            id_contact = Convert.ToInt32(command.ExecuteScalar());
            Console.WriteLine(id_contact);
        }

        // check theme
        command.CommandText = "SELECT id FROM themes WHERE name = @theme";
        command.Parameters.AddWithValue("@theme", data.Theme);

        reader = command.ExecuteReader();
        if (reader.Read())
        {
            id_theme = reader.GetInt32(0);
        }
        reader.Close();
        
        if (id_theme == 0)
        {
            command.CommandText = "INSERT themes (name) VALUES (@theme)";
            command.ExecuteNonQuery();
            command.CommandText = "SELECT @@IDENTITY";
            id_theme = Convert.ToInt32(command.ExecuteScalar());
            Console.WriteLine(id_theme);
        }

        // add message
        command.CommandText = "INSERT messages (id_contact, id_theme, message) VALUES (@id_contact, @id_theme, @message)";
        command.Parameters.AddWithValue("@id_contact", id_contact);
        command.Parameters.AddWithValue("@id_theme", id_theme);
        command.Parameters.AddWithValue("@message", data.Message);
        command.ExecuteNonQuery();

        return data.Email;
        //StreamWriter sw = new StreamWriter("./Test.txt");
        //sw.WriteLine(id_contacts);
        ////Close the file
        //sw.Close();
    }
}
