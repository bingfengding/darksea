<?php
//sleep(1);
   require 'config.php';
    if($_POST['user']==""){
        $user = "匿名";
    }else{
        $user = $_POST['user'];
    }
    echo $user;
    if($_POST['content']==""){
        $content ="此人不愿意留下他的足迹";
    }else{
        $content = $_POST['content'];
    }


    $query ="insert into darkseamassage (`user`,content,`date`) VALUES ('$user','$content',now())";
    mysqli_query($con,$query) or die('新增失败:'.mysqli_error($con));
    
    mysqli_close($con);