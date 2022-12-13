<?php
require_once 'connection.php';
header('Content-Type: application/json; charset=utf-8');
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $email = $_SESSION['user'];
    $nomefilm = $_POST['Nome'];
    $orario = $_POST['Orario'];
    $posti = $_POST['Posti'];
    
 $sql = "INSERT INTO prenotazioni (Email,Nomefilm,Orario,Posti) VALUES(:eml,:nf,:ora,:pos)";

        $query = $dbh->prepare($sql);
       
        $query->bindParam(':eml', $email->Email, PDO::PARAM_STR);
        $query->bindParam(':nf', $nomefilm, PDO::PARAM_STR);
        $query->bindParam(':ora', $orario, PDO::PARAM_STR);
        $query->bindParam(':pos', $posti, PDO::PARAM_STR);
        
       $query->execute();  
       echo json_encode(true);
    
}
?>