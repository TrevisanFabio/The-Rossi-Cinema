<?php
require_once "connection.php";
header('Content-Type: application/json; charset=utf-8');
session_start();

if(session_status() == PHP_SESSION_ACTIVE){
    @$user = $_SESSION['user'];
    if(@$_SESSION['logged'] == NULL){
        echo json_encode(false); 
    }
    else{
        echo json_encode($user);
    }
}
?>