$(document).ready(function () {

    //подключает функцию обратного вызова ко всем элементам 
    //набора jQuery
    $(document).ajaxStart(function () {
        $(".log").append("<p>Работа началась</p>");
    });

    //позволяет задать обработчик события, которая будет 
    //выполняться перед тем как AJAX запрос будет выполнен
    $(document).ajaxSend(function () {
        $(".log").append("<p>Отправлен запрос</p>");
    });

    //определяет функцию, код которой будет выполнен если 
    //AJAX запрос будет совершен успешно
    $(document).ajaxSuccess(function () {
        $(".log").append("<p>Отправленный запрос исполнен</p>");
    });

    //Определяет функцию, код которой будет выполнен когда 
    //AJAX запрос будет совершен
    $(document).ajaxComplete(function (evt, req, set) {
        $(".log").append("<p>Запрос завершён</p>");
    });

    //Определяет функцию, код которой будет выполнен, 
    //когда последний AJAX запрос из группы запросов будет совершен
    $(document).ajaxStop(function (evt, req, set) {
        $(".log").append("<p>Нет активных запросов</p>");
    });

    //определяет функцию, если произойдет ошбика
    $(document).ajaxError(function (evt, req, set) {
        $(".log").append("<p>Произошла ошибка</p>");
    });

    //Прикрепляет обработчик к событию
    $(document).bind('ajaxError', function() {
        $(".log").append('<div class="error">Ошибка!</div>')
    });





    //было
    //load - Загружает данные с сервера (html) и вставляет в указанный элемент
        // $("#BelButton").click(()=> {
        // $("#bel").load('../HTML/Pages/Belarus.html');
        // });

       // jQuery.get( url [, data ] [, success ] [, dataType ] )
       //Данный код делает запрос к HTML файлу и выводит его содержимое
    $("#BelButton").click(()=> {
            $.get("../HTML/Pages/Belarus.html", function(data) {
                console.log("Данные загружены");
                $("#bel").html(data);
              });
    });


    $("#BelButtonInfo").click(()=> {
        $.getJSON('../js/JSON/Belarus.json', function (data) {
            var items = [];
            $.each(data, function (key, value) {
                items.push(value);
            });
            $("#BelData").append('</br>');
            $("#BelData").text("Сводка");
            $("#BelData").append('<p>Название: ' + items[0] + '</p>');
            $("#BelData").append('<p>Провозглашена: ' + items[1] + '</p>');
            $("#BelData").append('<ul title="Страны-соседки: "> Страны-соседки:');
            items[2].forEach((item, i, arr) =>
            {
                $("#BelData").append('<li>' + item + '</li>');
            });
            $("#BelData").append('</ul>');
            $("#BelRequisits").text($("#BelRequisits").text() + "Жыве Беларусь!");
        });
    });





    $("#UKRButton").click(()=> {
        $.get("../HTML/Pages/Ukraina.html", function(data) {
            $("#ukr").html(data);
          });
    });

    $("#UKRButtonInfo").click(()=> {
        $.getJSON('../js/JSON/Ukraina.json', function (data) {
            var items = [];
            $.each(data, function (key, value) {
                items.push(value);
            });
            $("#UkrData").append('</br>');
            $("#UkrData").text("Сводка");
            $("#UkrData").append('<p>Название: ' + items[0] + '</p>');
            $("#UkrData").append('<p>Провозглашена: ' + items[1] + '</p>');
            $("#UkrData").append('<ul title="Страны-соседки: "> Страны-соседки:');
            items[2].forEach((item, i, arr) =>
            {
                $("#UkrData").append('<li>' + item + '</li>');
            });
            $("#UkrData").append('</ul>');
            $("#UkrRequisits").text($("#UkrRequisits").text() + "Слава Украине!");
        });
    });





    $("#USAButton").click(()=> {
        $("#usa").load('../HTML/Pages/USA.html');
    });

    $("#USAButtonInfo").click(()=> {
        $.getJSON('../js/JSON/USA.json', function (data) {
            var items = [];
            $.each(data, function (key, value) {
                items.push(value);
            });
            $("#UsaData").append('</br>');
            $("#UsaData").text("Сводка");
            $("#UsaData").append('<p>Название: ' + items[0] + '</p>');
            $("#UsaData").append('<p>Провозглашена: ' + items[1] + '</p>');
            $("#UsaData").append('<ul title="Страны-соседки: "> Страны-соседки:');
            items[2].forEach((item, i, arr) =>
            {
                $("#UsaData").append('<li>' + item + '</li>');
            });
            $("#UsaData").append('</ul>');
            $("#UsaRequisits").text($("#UsaRequisits").text() + "Боже, храни Америку!");
        });
    });






        $("#RusButton").click(()=> {
            $("#rus").load('../HTML/Pages/Rus.html');
        });

        $("#RusButtonInfo").click(()=> {
            $.getJSON('../js/JSON/rus.json', function (data) {
                var items = [];
                $.each(data, function (key, value) {
                    items.push(value);
                });
                $("#rusData").append('</br>');
                $("#rusData").text("Сводка");
                $("#rusData").append('<p>Название: ' + items[0] + '</p>');
                $("#rusData").append('<p>Провозглашена: ' + items[1] + '</p>');
                $("#rusData").append('<ul title="Страны-соседки: "> Страны-соседки:');
                items[2].forEach((item, i, arr) =>
                {
                    $("#rusData").append('<li>' + item + '</li>');
                });
                $("#rusData").append('</ul>');
                $("#rusRequisits").text($("#rusRequisits").text() + "Мы русские, с нами Бог!");
            });
        });

        $('#resetButton').click(function () {
            window.location.reload();
        });
    });