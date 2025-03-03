<?php
include("conexion.php");
$conex=conectarse();
$Password=$_POST['L_Password'];
$CorreoElectronico=$_POST['L_CorreoElectronico'];
$Query = "";

// Preguntar si hay campos vacios
if(empty($_POST['Submit'] )){

    //echo "Insert into modelo values('{$usuario}','{$contraseña}');");
    //echo "Insert into modelo (usuario, contraseña) values ('{$usuario}','{$contraseña}');");
    //INSERT INTO `usuarios`(`Usuario`, `Contraseña`) VALUES ('[value-2]','[value-3]')
   //Se valida correo electro y password correcta
    $Query = "select * from usuarios where correoElectronico =  '{$CorreoElectronico}' and password = '{$Password}'";
    $result = $conex->query($Query);
    
    if ($result && $result->num_rows > 0){
        header("Location: index.html");
        exit; 
    }else{
        echo "pailas";
    }
    
} else{
    echo "<br>Datos pailas";
}
// Cierro conexion 
mysqli_close($conex);
?>

