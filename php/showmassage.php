<?php
    require "config.php";
    $_sql = mysqli_query($con,"SELECT `user`,content,`date` FROM darkseamassage ORDER BY id DESC LIMIT 0,10") or die("SQL错误".mysqli_error($con));
    echo
$JSON='';
while(!!$row=mysqli_fetch_array($_sql,MYSQLI_ASSOC)){
    foreach($row as $key => $value){
        $row[$key]=urlencode(str_replace("\n","",$value)).'';
    }

    $JSON .= urldecode(json_encode($row)).',';
}
echo '['.substr($JSON,0,strlen($JSON)-1).']';

mysqli_close($con);