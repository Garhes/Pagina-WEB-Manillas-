<?php
  include("conexion.php");
  $id = $_GET['id'];
  $conex=Conectarse();
  $cons="delete from usuarios where CodUsuario=".$id.";";
  $result=$conex->query($cons);
  if ($result){
    echo "Registro eliminado de la base de datos";
  }
?>


