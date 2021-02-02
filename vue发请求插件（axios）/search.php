<?php
$username = $_POST['username'];
$password = $_POST['pwd'];
header('Content-type:text/json');
$data = array('username'=>$username,'password'=>$password);
echo json_encode($data);
?>
