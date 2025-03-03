<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <script type="text/javascript">
        function confirmar(){
            return confirm('¿Esta seguro?, se eliminarán los datos');
        }
    </script>
</head>
<body>
    <center>
        <?php
            include("conexion.php");
            $conex=conectarse();
            $result=$conex->query("Select * from usuarios;");
        ?>
    <h1> LISTADO DE CLIENTES </h1>
    <hr>
    <h2>Numero de clientes;</h2>
        <?php
            $num=$result->num_rows;
            echo $num;
        ?>
    <table border="1">
        <tr>
            <td>Usuario</td>
            <td>Correo Electronico</td>
            <td>Password</td> 
            
        </tr>
        <?php
            while($fila=$result->fetch_row()){
                echo"<tr>";
                echo "<td>".$fila[0]."</td>";
                echo "<td>".$fila[1]."</td>";
                echo "<td>".$fila[2]."</td>";
               

            }
            mysqli_close($conex);
        ?>
    </table>
    <a href="insertar.html">Insertar Datos</a>
    <br>
   
    </center>    
</body>
</html>__