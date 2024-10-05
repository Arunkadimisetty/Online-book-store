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
$sql="select * from user where username='$username' and password='$password'";
$res=$conn->query($sql);
if($res->num_rows>0)
{
    include "arun.html";
    echo "<script>
    alert('Welcome " . addslashes($username) . "');
    </script>";
}
else
{  
include "signin.html";
   echo "<script>
    alert('You have entered wrong Password');
    </script>";
}
$conn->close();
?>
