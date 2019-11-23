<?php
header("content-type:application/json");
$jsondata = file_get_contents("http://127.0.0.1:8080/playstore");
echo $jsondata

?>