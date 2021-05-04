<?php
function sendNotification(){
    $url ="https://fcm.googleapis.com/fcm/send";

    $fields=array(
        "to"=>'fQZQiiX05NXNfoh9AcXMwL:APA91bGkofsV-NonBRBau-Ay4u9LKhREACXq9W2fcbNhmVt9EGkc6XO8meoCdS_ydNsA-aB0M4stuQgOuqMwgSWOiPTsdhRSFD3g0uMkUW-x23JbZQ6FI22PZ7HFi0FGZrIA-zsyTPgE',
        "notification"=>array(
            "body"=>"Testing Notification",
            "title"=>"Testing",
            "icon"=>"",
            "click_action"=>"https://google.com"
        )
    );

    $headers=array(
        'Authorization: key=AAAAUlXlkeM:APA91bFn--ylgRxseTFfwhCwi00F7i_n2UWaidbQNfZNfDd4ERvpiHq8zNikaL-csIkqd-4OqAIWFCvgNWZWGV_htCLw_aoeBg-gfQswQIDBOIPGz3K29uRORxq3GmAPFMq00vg8FTLC',
        'Content-Type:application/json'
    );

    $ch=curl_init();
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_POST,true);
    curl_setopt($ch,CURLOPT_HTTPHEADER,$headers);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch,CURLOPT_POSTFIELDS,json_encode($fields));
    $result=curl_exec($ch);
    print_r($result);
    curl_close($ch);
}
sendNotification();