<?php
require_once "connection.php";
header('Content-Type: application/json; charset=utf-8');

$sql = "SELECT * from film ";
            $query = $dbh->prepare($sql);
            $query->execute();
            $results=$query->fetchAll(PDO::FETCH_OBJ);      

    if(!empty($results)) {
        echo json_encode($results);
    }
    else {
        echo json_encode(false);                
    }    
    
    ?>