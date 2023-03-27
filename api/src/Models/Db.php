<?php



namespace App\Models;

use \PDO;

class DB
{
    private $host = 'localhost';
    private $user = 'postgres';
    private $pass = '2902';
    private $dbname = 'santeplus';

    public function connect()
    {
        $conn_str = "pgsql:host=$this->host;dbname=$this->dbname";
        $conn = new PDO($conn_str, $this->user, $this->pass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        return $conn;
    }
}
