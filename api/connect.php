<?php

$connections = array();

function getDbConnection()
{

    // TODO : extract the credentials to a separate file that only has the credentials
    
    $servername = "stark.cse.buffalo.edu";
    $username =  "410team7_user";// fill in your team user name here
    $password = "insecure1"; // fill in your team password here
    $dbname = "cse410_team7_db"; // fill in the team schema name here
    global $connections;

    error_log("Connecting to  ".$dbname." as user ".$username, 0);

    $conn = null;

    // Create connection
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        array_push($connections, $conn);
        return $conn;
    } catch (Exception $e) {
        echo "connection error ".$servername." ".$e;
        error_log("Error Connecting to  ".$dbname." as user ".$username." ".$e, 0);
    }
}

function closeConnections()
{
    global $connections;
    foreach ($connections as $conn) {
        $conn = null;
    }
    $connections = array();
    //error_log("connections closed!");
}
