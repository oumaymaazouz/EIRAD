<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/Exception.php';
require './PHPMailer/PHPMailer.php';
require './PHPMailer/SMTP.php';

try {

    $name = $_POST['name'];
    $company = $_POST['company'];
    $phone = $_POST['phone'];
    $comments = $_POST['comments'];
    $email = $_POST['email'];


    $mail = new PHPMailer();
    $mail->Host = 'smtp.gmail.com';
    $mail->isSMTP();
    $mail->SMTPAuth   = true;
    $mail->Username   = 'eiradsmtp@gmail.com';// SMTP username
    $mail->Password   = 'eirad2021';// SMTP password
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 587;
   
    echo "Before send";
    
    //Recipient
    $mail->setFrom('eiradsmtp@gmail.com', 'contact-eirad'); // Email sent from
    $mail->addAddress('azouzoumayma11@gmail.com', 'contact-eirad');// Add a recipient
   
    // Content
    $mail->isHTML(true);// Set email format to HTML
    $mail->Subject = 'Nous Contacter - Serviced';
    $mail->Body    = '<strong>Nom: </strong>'.$name.'<br><strong>Company: </strong>'.$company.'<br><strong>Email: </strong>'.$email.'<br><strong>Comments: </strong>'.$comments.'<br>';

    echo "Message sent";
    $mail->send();
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }

?>
