<?php
require __DIR__.'/../assets/vendor/PHPMailer/src/PHPMailer.php';
require __DIR__.'/../assets/vendor/PHPMailer/src/SMTP.php';
require __DIR__.'/../assets/vendor/PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


$errors = [];
$errorMessage = '';

function debug_to_console($data) {
    $output = $data;
    if (is_array($output))
        $output = implode(',', $output);

    <script>
        console.log('Debug Objects: " . $output . "' );
    </script>;
}

debug_to_console("PHP");

if (isset($_POST['name'])) {
   $name = $_POST['name'];
   $email = $_POST['email'];
   $subject = $_POST['subject'];
   $message = $_POST['Message'];
   debug_to_console($name);
   debug_to_console($email);
   debug_to_console($subject);
   debug_to_console($message);

   if (empty($name)) {
       $errors[] = 'Name is empty';
   }

   if (empty($email)) {
       $errors[] = 'Email is empty';
   } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       $errors[] = 'Email is invalid';

   }


   if (empty($message)) {
       $errors[] = 'Message is empty';
   }

   if (!empty($errors)) {
       $allErrors = join('<br/>', $errors);
       $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
   } else {
       $mail = new PHPMailer();


       // specify SMTP credentials


       $mail->isSMTP();
       $mail->Host = 'smtp.gmail.com';
       $mail->SMTPAuth = true;
       $mail->SMTPDebug = 1;
       $mail->Username = 'williamdb19@gmail.com';
       $mail->Password = '';
       $mail->SMTPSecure = 'tls';
       $mail->Port = 587;
       $mail->setFrom('williamdb19@gmail.com');
       $mail->addAddress('williamdb19@gmail.com');
       $mail->Subject = 'New message from your website';

       // Enable HTML if needed
       $mail->isHTML(true);
       $bodyParagraphs = ["Name: {$name}", "Email: {$email}", "Message:", nl2br($message)];
       $body = join('<br />', $bodyParagraphs);
       $mail->Body = $body;
       echo $body;

       if($mail->send()){

           header('Location: ../HTML/index.html'); // Redirect to 'thank you' page. Make sure you have it
       } else {

           $errorMessage = 'Oops, something went wrong. Mailer Error: ' . $mail->ErrorInfo;
       }

   }

}
//        $name = 'Will';
//        $email = 'testemail@gmail.com';
//        $subject = 'Test Subject';
//        $message = 'Test Message';
//        $mail = new PHPMailer();
//        $mail->isSMTP();
//        $mail->Host = 'smtp.gmail.com';
//        $mail->SMTPAuth = true;
//        $mail->SMTPDebug = 1;
//        $mail->Username = 'williamdb19@gmail.com';
//        $mail->Password = '';
//        $mail->SMTPSecure = 'tls';
//        $mail->Port = 587;
//        $mail->setFrom('williamdb19@gmail.com');
//        $mail->addAddress('williamdb19@gmail.com');
//        $mail->Subject = 'New message from your website';
//
//        // Enable HTML if needed
//        $mail->isHTML(true);
//        $bodyParagraphs = ["Name: {$name}", "Email: {$email}", "Subject: {$subject}","Message:", nl2br($message)];
//        $body = join('<br />', $bodyParagraphs);
//        $mail->Body = $body;
//        echo $body;
//
//        if($mail->send()){
//
//            header('Location: thank-you.html'); // Redirect to 'thank you' page. Make sure you have it
//        } else {
//
//            $errorMessage = 'Oops, something went wrong. Mailer Error: ' . $mail->ErrorInfo;
//        }
?>