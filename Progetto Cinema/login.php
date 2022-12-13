<?php
require_once "connection.php";
header('Content-Type: application/json; charset=utf-8');
session_start();
if(session_status() == PHP_SESSION_ACTIVE){
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST['email'];
        $password = $_POST['password'];
        

        if (empty($email) || empty($password)) http_response_code(400);
        else {

            $sql = "SELECT * from utenti where Email='".$email."' and Password='".$password."'";
            $query = $dbh->prepare($sql);
            $query->execute();
            $results=$query->fetchAll(PDO::FETCH_OBJ);         

            if(!empty($results)) {
                $user = $results[0]; 
                $_SESSION['user'] = $user;
                $_SESSION['logged'] = TRUE;
                $array = [
                    'user' => $user, 
                    'logged' => TRUE, 
                ];
                echo json_encode($array);
            }
            else {
                echo json_encode(false);                
            }        
        }
    }
}    
?>