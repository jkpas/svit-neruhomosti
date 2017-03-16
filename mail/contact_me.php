<?php

if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'anworldestate@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $email_subject = 'Обратный звонок'; //Заголовок сообщения
        $email_body = '
                <html>
                    <head>
                        <title>'.$email_subject.'</title>
                    </head>
                    <body>
                        <p style="font-size: 16px; color: #000;">Имя: '.$_POST['name'].'</p>
                        <p style="font-size: 16px; color: #000;">Телефон: '.$_POST['phone'].'</p>
                        <p style="font-size: 16px; color: #000;">email: '.$_POST['email'].'</p>  
                        <p style="font-size: 16px; color: #000;">Сообщение: '.$_POST['message'].'</p>                 
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <admin>\r\n"; //Наименование и почта отправителя
        mail($to, $email_subject, $email_body, $headers); //Отправка письма с помощью функции mail
        echo 'Спасибо! Ваше письмо отправлено.'; 
}
        
?>


