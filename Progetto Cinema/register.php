<?php
require_once 'connection.php';
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    

    $sqlCheck = "SELECT * from utenti where Email='".$email."'";
    $query = $dbh->prepare($sqlCheck);
    $query->execute();
    $results=$query->fetchAll(PDO::FETCH_OBJ);
    if(empty($results)){
        $sql = "INSERT INTO utenti (Nome,Cognome,Email,Password) VALUES(:fn,:ln,:eml,:pw)";

        $query = $dbh->prepare($sql);
    
        $query->bindParam(':fn', $name, PDO::PARAM_STR);
        $query->bindParam(':ln', $surname, PDO::PARAM_STR);
        $query->bindParam(':eml', $email, PDO::PARAM_STR);
        $query->bindParam(':pw', $password, PDO::PARAM_STR);
        
       $query->execute();  
       echo json_encode(true);
    }
    else{
        echo json_encode(false);
    }
}
?>