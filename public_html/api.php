<?php

    $ch = curl_init();

    $header = [
        'x-api-key:eab1e16f06bd626c9fb73b66949bd21c',
        'Content-Type:application/json'
    ];

    curl_setopt_array($ch,[
        CURLOPT_HEADER => false,
        CURLOPT_HTTPHEADER => $header,
        CURLOPT_URL => 'https://api.pokerbyte.com.br/club/account',
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POSTFIELDS => json_encode($_POST)

    ]);

    echo curl_exec($ch);
    curl_close($ch);

?>