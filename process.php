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
            $response = '';

            $name = isset($_POST['name']) ? $_POST['name'] : '';
            $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
            $email = isset($_POST['email']) ? $_POST['email'] : '';
            $date = isset($_POST['date']) ? $_POST['date'] : '';
            $message = isset($_POST['message']) ? $_POST['message'] : '';

            $canContinue = !empty($name) && !empty($phone) && !empty($email) && !empty($date) && !empty($message);
            if(!$canContinue) {
                $errors[] = "All fields are required.";
            }
            else {
                // send message
                $response = "Message sent.";

                $body = "$name<br>";
                $body .= "$phone<br>";
                $body .= "$email<br>";
                $body .= "$date<br>";
                $body .= "$message<br>";

                require_once('phpmailer/class.phpmailer.php');
                $mail = new PHPMailer();
            	$mail->SetFrom('brandon95547@gmail.com', 'Brandon S');
                $mail->AddAddress('brandon95547@gmail.com', 'Brandon S');
                $mail->Subject = "Request for Proposal";

                //$mail->AltBody = $message;
                $mail->MsgHTML($body);

                if(!$mail->Send()) {

                }
            }

            echo json_encode(compact('errors', 'response'));
            break;
    }
}
?>
