<?php 
    define('DB_HOST','localhost:3307');
    define('DB_USER','root');
    define('DB_PASS','');
    define('DB_NAME','therossicinema');

try
{
$dbh= new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME,DB_USER,DB_PASS);
}
catch(PDOException $e){
    exit("Error: " . $e->getMessage());
}


?>