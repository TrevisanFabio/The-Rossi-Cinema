<?php
header('Content-Type: application/json; charset=utf-8');
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
   session_start();

   session_unset();
   session_destroy();

   ini_set('session.gc_max_lifetime', 0);
   ini_set('session.gc_probability', 1);
   ini_set('session.gc_divisor', 1);

   if(session_status() == PHP_SESSION_ACTIVE) echo json_encode(false);
   else echo json_encode(true);
 }
?>