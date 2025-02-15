<?php
header('Content-Type: text/html; charset=utf-8');
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../vendor/autoload.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$name = isset($_POST['f-name']) ? trim($_POST['f-name']) : '';
$sname = isset($_POST['sname']) ? trim($_POST['sname']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$comments = isset($_POST['message']) ? trim($_POST['message']) : '';

if (empty($name) || empty($email)) {
    echo "Fields are required.";
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email format.";
    exit;
}

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; 
    $mail->SMTPAuth = true;
    $mail->Username = 'appfindee.com@gmail.com';   
    $mail->Password = 'zwls scji bsrp srnx';  
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('appfindee.com@gmail.com', 'Contacts');
    $mail->addAddress('ekmorozova19@yandex.ru', 'Recipient Name'); 
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body    = "
        <h3>Contact Details:</h3>
        <p><strong>Name:</strong> " . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . "</p>
        <p><strong>Second Name:</strong> " . htmlspecialchars($sname, ENT_QUOTES, 'UTF-8') . "</p>
        <p><strong>Email:</strong> " . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . "</p>
        <p><strong>Phone:</strong> " . htmlspecialchars($phone, ENT_QUOTES, 'UTF-8') . "</p>
        <p><strong>Message:</strong> " . nl2br(htmlspecialchars($comments, ENT_QUOTES, 'UTF-8')) . "</p>
    ";

    $mail->send();
    echo 'Message has been sent successfully';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
