<?php
include("conexion.php");
$conex=conectarse();
$Usuario=$_POST['R_Usuario'];
$Password=$_POST['R_Password'];
$CorreoElectronico=$_POST['R_CorreoElectronico'];
$Query = "";

// Preguntar si hay campos vacios
if(empty($_POST['Submit'] )){

    //echo "Insert into modelo values('{$usuario}','{$contraseña}');");
    //echo "Insert into modelo (usuario, contraseña) values ('{$usuario}','{$contraseña}');");
    //INSERT INTO `usuarios`(`Usuario`, `Contraseña`) VALUES ('[value-2]','[value-3]')
    $Query = "Insert into usuarios (Usuario, CorreoElectronico, Password ) values ('{$Usuario}','{$CorreoElectronico}','{$Password}');";
    $result = $conex->query($Query);
    header("Location: index.html");
    exit; 
    echo "<br>Datos guardados en la base";
} else{
    echo "<br> Grabacion de datos FALLO";
}
// Cierro conexion 
mysqli_close($conex);
?>

<a href="index.php">ir al inicio</a>