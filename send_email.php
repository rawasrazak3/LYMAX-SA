<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // If using Composer
// require 'vendor/PHPMailer.php'; // If using manual installation

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'jasirmohd20@gmail.com'; // Use an App Password (not your real password)
        $mail->Password = 'wtyc weca ohna jyst'; // Generate from Google Security
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 587;

        // Sender & Recipient
        $mail->setFrom("$email", "$name");
        $mail->addAddress('jasirmohd20@gmail.com'); // Change to the recipient email

        // Email Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body = "<strong>Name:</strong> $name <br> <strong>Email:</strong> $email <br> <strong>Message:</strong> $message";

        // Send Email
        $mail->send();
        echo "Message sent successfully!";
    } catch (Exception $e) {
        echo "Error: " . $mail->ErrorInfo;
    }
} else {
    echo "Invalid request.";
}
?>
