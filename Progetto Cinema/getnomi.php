<?php
require_once "connection.php";
header('Content-Type: application/json; charset=utf-8');
session_start();
$sql = "SELECT * from utenti ";
            $utente=$_SESSION['user'];    

            echo json_encode($utente);  
    
    ?>