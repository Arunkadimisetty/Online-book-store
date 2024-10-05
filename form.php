<?php
$username=$_POST['username'];
$password=$_POST['password'];
$servername="localhost";
$user="root";
$pwd="";
$dbname="plotplaza";
$conn=new mysqli($servername,$user,$pwd,$dbname);
if($conn->connect_error)
{
    die("connection failed ".$conn->connect_error);
}

$sql="create table user(username varchar(20),password varchar(20))";
$res=$conn->query($sql);
$sql1="insert into user values('$username','$password')";
$res1=$conn->query($sql1);
$conn->close();
include "arun.html";
?>
