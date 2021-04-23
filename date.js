var countDownDate = new Date("Apr 26, 2021 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // function getDaysEnding(digit)
  // {
  //     var lastFigure = parseInt(digit.toString().substr(digit.toString().length - 1, 1));
  //     if (digit > 11 && digit < 15)
  //     {
  //       return 'Дней';
  //     }
  //     else
  //     {
  //       if (lastFigure == 1) return 'День';
  //       if (lastFigure > 1 && lastFigure < 5) return 'Дня';
  //       if (lastFigure == 0 || lastFigure >= 5) return 'Дней';
  //    }
  // }

  // function getHoursEnding(digit)
  // {
  //     var lastFigure = parseInt(digit.toString().substr(digit.toString().length - 1, 1));
  //     if (digit > 4 && digit < 21) return 'Часов';
  //     if (lastFigure == 1) return 'Час';
  //     if (lastFigure > 1 && lastFigure < 5) return 'Часа';
  //     if (lastFigure == 0 || lastFigure >= 5) return 'Часов';
  // }

  // function getMinutesEnding(digit)
  // {
  //     var lastFigure = parseInt(digit.toString().substr(digit.toString().length - 1, 1));
  //     if (digit > 4 && digit < 21) return 'Минут';
  //     if (lastFigure == 1) return 'Минута';
  //     if (lastFigure > 1 && lastFigure < 5) return 'Минуты';
  //     if (lastFigure == 0 || lastFigure >= 5) return 'Минут';
  // }

  // function getSecondsEnding(digit)
  // {
  //     var lastFigure = parseInt(digit.toString().substr(digit.toString().length - 1, 1));
  //     if (digit > 4 && digit < 21) return 'Секунд';
  //     if (lastFigure == 1) return 'Секунда';
  //     if (lastFigure > 1 && lastFigure < 5) return 'Секунды';
  //     if (lastFigure == 0 || lastFigure >= 5) return 'Секунд';
  // }

  // document.getElementById("date").innerHTML = "Осталось " + days + " " + getDaysEnding(days) + " " + hours + " " +
  // getHoursEnding(hours) + " " + minutes + " " + getMinutesEnding(minutes) + seconds +  " " + getSecondsEnding(digit);

  document.getElementById("date").innerHTML = days + " days "+ hours + "  hours " + minutes + " minutes "+ seconds + " seconds left";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("date").innerHTML = "Дождалось. С днем рождения!";
  }
}, 1000);
