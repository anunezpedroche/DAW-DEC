<?php

header('Access-Control-Allow-Origin: *');

$nombre = $_POST['nombre'];
$posicion = $_POST['posicion'];
$equipo = $_POST['equipo'];

insertarJugador($nombre, $posicion, $equipo);

function insertarJugador($nombre, $posicion, $equipo)
{
    $conn = conectar();

    $consulta = "INSERT INTO jugadores  VALUES(12,'".$posicion."','".$nombre."','". $equipo."');";
    if(mysqli_query($conn, $consulta)) {
        consultarJugador($nombre);
    }

}

function consultarJugador($Nombre)
{
    $conn = conectar();

    $consulta = "SELECT * FROM jugadores where nombre='" . $Nombre . "';";
    $sql = mysqli_query($conn, $consulta);
    $result = mysqli_fetch_all($sql);

    $json = json_encode($result);

    mysqli_close($conn);

    echo $json;
}


function conectar()
{
    $servidor = "localhost";
    $usuario = "usuario";
    $contrasenya = "password";
    $bbdd = "dragdrop";

    $conexion = mysqli_connect($servidor, $usuario, $contrasenya, $bbdd);

    if (!$conexion) {
        die("Conexion fallida" . mysqli_connect_error());
    }

    return $conexion;
}
