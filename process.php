<?php
/**
 * Process Library for PHP
 * @author Brandon Sanders
*/

$processType = isset($_POST['processType']) ? $_POST['processType'] : '';
$account = json_decode(base64_decode($processType), true);
$token = isset($account['token']) ? $account['token'] : '';
$type = isset($account['type']) ? $account['type'] : '';

if($token == '900b451!z4k65009' && $type) {
    switch($type) {
        case 'proposal' :
            $errors = array();
            $response = 'success';
            echo json_encode(compact('errors', 'response'));
            break;
    }
}
?>
