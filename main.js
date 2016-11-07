console.log('linked!');

$(document).ready(function() {

  $(document).keydown(function (e) {
          var keyCode = e.keyCode || e.which,
          keys = {a: 65, w: 87};

          switch (keyCode) {

              case keys.a:
                  $('#car1').animate({"right": "-=5px"}, "fast");
              break;

              case keys.w:
                  $('#car2').animate({"left": "+=5px"}, "fast");
              break;
          }
      });
  });


function checkWinner(){
    if ($('#car1').css('margin-left')==='1400px') {
      $('.container-fluid').append('<img  src="http://www.dailyhaha.com/_pics/super_ugly_monkey.jpg" />');
        alert('Apple wins!');
        $('body').css('background-color', '#5122EA');

    } else if ($('#car2').css('margin-left')==='400px')
    alert('Windows wins!');

}

$('button').click(function() {
    location.reload();
});
