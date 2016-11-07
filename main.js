console.log('linked!');

$(document).ready(function() {

  $(document).keydown(function (e) {
          var keyCode = e.keyCode || e.which,
          arrow = {left: 37, up: 38, right: 39, down: 40 };

          switch (keyCode) {

              case arrow.left:
                  $('#car1').animate({"left": "-=5px"}, "fast");
              break;

              case arrow.right:
                  $('#car2').animate({"left": "+=5px"}, "fast");
              break;
          }
      });
  });


function checkWinner(){
    if ($('#car1').css('margin-left')==='400px') {
      $('.container-fluid').append('<img  src="http://www.dailyhaha.com/_pics/super_ugly_monkey.jpg" />');
        alert('Apple wins!');
        $('body').css('background-color', '#5122EA');

    } else if ($('#car2').css('margin-left')==='400px')
    alert('Windows wins!');

}

$('button').click(function() {
      location.reload();
      console.log('button clicked');
  });
