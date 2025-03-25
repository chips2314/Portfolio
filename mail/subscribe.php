<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../vendor/autoload.php';  

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Извлечение email из POST-запроса
    $email = isset($_POST['subscribe-email']) ? $_POST['subscribe-email'] : '';

    if (!empty($email)) {
        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'ben4wysong321@gmail.com';
            $mail->Password = 'nazinvailydzxmou';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            $mail->setFrom('ben4wysong321@gmail.com', 'Mailer');
            $mail->addAddress('appfindee.com@gmail.com', 'Recipient Name');

            $mail->isHTML(true);
            $mail->Subject = 'New Subscription';
            $mail->Body    = "You have a new subscriber: $email";

            $mail->send();
            echo "Thank you for subscribing!";
        } catch (Exception $e) {
            echo "Sorry, there was an error sending your subscription. Mailer Error: {$mail->ErrorInfo}";
        }
    } else {
        echo "Email is empty!";
    }
} else {
    echo "Invalid request method.";
}


