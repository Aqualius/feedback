using Microsoft.Data.SqlClient;
using System;
//using MySql.Data.MySqlClient;
namespace Project.WebApi;
class DBConnect
{
    private static SqlConnection? connection;
    private string server;
    private string database;
    //private string uid;
    //private string password;

    //Constructor
    public DBConnect()
    {
        Initialize();
        OpenConnection();
    }

    //Desstructor
    ~DBConnect()
    {
        CloseConnection();
    }
    //Initialize values
    private void Initialize()
    {
        server = System.Configuration.ConfigurationManager.AppSettings["server_name"];
        database = System.Configuration.ConfigurationManager.AppSettings["database_name"];
        //var MyIni = new IniFile("settings.ini");
        //server = MyIni.Read("server_name");
        //database = MyIni.Read("database_name");
        string connectionString;
        connectionString = "Data Source=" + server + ";" + "Initial Catalog=" + database + ";Integrated Security=True;TrustServerCertificate=True"; 

        connection = new SqlConnection(connectionString);
    }

    public static SqlConnection? getConn()
    {
        return connection;
    }

    //open connection to database
    private bool OpenConnection()
    {
        try
        {
            if (connection.State == System.Data.ConnectionState.Closed)
            {
                connection.Open();
            }
            return true;
        }
        catch (SqlException ex)
        {
            //When handling errors, you can your application's response based on the error number.
            //The two most common error numbers when connecting are as follows:
            //0: Cannot connect to server.
            //1045: Invalid user name and/or password.
            switch (ex.Number)
            {
                case 0:
                    //MessageBox.Show("Cannot connect to server.  Contact administrator");
                    break;

                case 1045:
                    //MessageBox.Show("Invalid username/password, please try again");
                    break;
            }
            return false;
        }
    }

    //Close connection
    private bool CloseConnection()
    {
        try
        {
            connection.Close();
            return true;
        }
        catch (SqlException ex)
        {
            //MessageBox.Show(ex.Message);
            return false;
        }
    }

}
