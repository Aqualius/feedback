using System;
using MySql.Data.MySqlClient;
namespace Project.WebApi;
class DBConnect
{
    private static MySqlConnection? connection;
    private string server;
    private string database;
    private string uid;
    private string password;

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
        server = "localhost";
        database = "data_feedback";
        uid = "root";
        password = "l@DnQWFDs42@";
        string connectionString;
        connectionString = "SERVER=" + server + ";" + "DATABASE=" + database + ";" + "UID=" + uid + ";" + "PASSWORD=" + password + ";";

        connection = new MySqlConnection(connectionString);
    }

    public static MySqlConnection? getConn()
    {
        return connection;
    }

    //open connection to database
    private bool OpenConnection()
    {
        try
        {
            connection.Open();
            return true;
        }
        catch (MySqlException ex)
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
        catch (MySqlException ex)
        {
            //MessageBox.Show(ex.Message);
            return false;
        }
    }

}
