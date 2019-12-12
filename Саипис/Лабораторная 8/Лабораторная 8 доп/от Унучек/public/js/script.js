$(document).ready(function () {
    let a;
    $('#button1').click(function () {
        // $("ol#first-ol").children().first().append(a);
        $('ol#first-ol').find('li').filter(function () {
            if ($(this).text().charAt(0).toUpperCase() == 'A') {
               $(this).html('<h1>' + $(this).text() + '</h1>')
            }
            if ($(this).text().charAt(0).toUpperCase() == 'B') {
                $(this).html('<h2>' + $(this).text() + '</h2>')
            }
            if ($(this).text().charAt(0).toUpperCase() == 'C') {
               $(this).html('<h3>' + $(this).text() + '</h3>')
            }
        });
        $("ol#first-ol h1").append('<ol></ol>');
        console.log(a);
        $("ol#second-ol").find('li').filter(function () {
            if ($(this).text().charAt(0).toUpperCase() == 'A') {
                $("ol#first-ol h1 ol").append('<li>'+$(this).text()+'</li>')
                $(this).remove();
                return this;
            }
        });
    });

    $('#button2').click(function () {
        $('ol#first-ol ol').find('li:odd:contains("Good")').toggleClass('newStyle');
    });

    $('#button3').click(function () {
        window.location.reload();
    });
});