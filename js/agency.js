// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // Bootstrap Crousel
    $('.carousel').carousel({
        // interval: 7000
        interval: false
    }); 

    // ajax for php mailer --------------------   
    $("#contactForm").submit(function() { //устанавливаем событие отправки для формы
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "mail/contact_me.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Ваше сообщение успешно отправлено!</strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            error: function() {
                // Fail message
                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>")
                    .append("</button>");
                $('#success > .alert-danger').append("<strong>Извините, почтовый сервер не отвечает. Попробуйте повторить попытку позже или свяжитесь с нами по номеру указаному в контактах!");
                $('#success > .alert-danger').append('</div>');
                //clear all fields
                $('#contactForm').trigger("reset");
            },
        });
        return false;
    });  


    // Bootstrap Crousel add swipe for mobile devices
    // $("#myCarousel").swiperight(function() {
    //     $(this).carousel('prev');
    // });
    // $("#myCarousel").swipeleft(function() {
    //     $(this).carousel('next');
    // });


    // change logo in colapsed navmenu
    // if ($("#mainNav").hasClass("affix")){
    //         $("#mainNav .navbar-brand img").attr("src", "img/logo-inverse.png");
    // }

    $(window).scroll(function(){
       var height = $(this).scrollTop();
       if (height > 80){
         $("#mainNav .navbar-brand img").attr("src", "img/logo-inverse.png");  
       }
       else{
          $("#mainNav .navbar-brand img").attr("src", "img/logo.png");
       }
    });  


})(jQuery); // End of use strict
