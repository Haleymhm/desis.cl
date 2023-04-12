<?php 
$host = 'localhost';
$dbname = 'desiscl';
$username = 'hhidalgo';
$password = 'Guza2412*';

$mysqli = new mysqli($host, $username, $password, $dbname);

// Verificar si hubo algún error al conectarse
if ($mysqli->connect_errno) {
    echo "Error al conectarse a la base de datos: " . $mysqli->connect_error;
    exit();
}

?>