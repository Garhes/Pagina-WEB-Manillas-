<?php
function Conectarse(){
//    $servidor = "127.0.0.1";
    $servidor = "localhost";

    $usuario = "root";
    $pass = "";
    $database = "login";
    // Creo la variable de conexion
    $conexion=new mysqli($servidor,$usuario,$pass,$database);
    if($conexion->connect_errno){
        echo "Fallo en conexion: (".$conexion->connect_errno.")".$$conexion->connect_error;
    }
  //  echo("Conexion exitosa");

    return $conexion;
}
?>