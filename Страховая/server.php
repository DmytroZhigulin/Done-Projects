<?php
    $_POST = json_decode(file_get_contents("php://input"), true); //нужно при работе с JSON => получение данных в JSON
    echo var_dump($_POST);
?>    
