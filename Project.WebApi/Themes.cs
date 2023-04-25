using Microsoft.Data.SqlClient;
//using MySql.Data.MySqlClient;

namespace Project.WebApi;

public class Themes
{
    //private string[] N = new[] { };

    public string[]? Names { get; set; }

    public Themes()
    {
        List<string> list = new List<string>();
        SqlConnection? conn = DBConnect.getConn();

        string sql = "SELECT DISTINCT name FROM themes ORDER BY name";
        SqlCommand command = new SqlCommand(sql, conn);

        SqlDataReader reader = command.ExecuteReader();
        while (reader.Read())
        {
            list.Add(reader[0].ToString());
        }
        reader.Close(); // закрываем reader

        Names = list.ToArray();
    }
}