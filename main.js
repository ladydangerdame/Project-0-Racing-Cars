console.log('linked!');

$(document).ready(function() {




  $(document).keydown(function (e) {
          var keyCode = e.keyCode
          keys = {a: 65, w: 87};

          switch (keyCode) {

              case keys.a:
                  $('#car1').css({"margin-left": "+=30px"}, "fast");
              checkWinner1();
              checkWinner2();
              break;


              case keys.w:
                  $('#car2').css({"margin-left": "+=30px"}, "fast");

              checkWinner1();
              checkWinner2();

              function checkWinner1(){
                  if ($('.player1').css('margin-left')==='970px') {
                    alert('Player1 wins!');
                  }
              }
              function checkWinner2(){
                  if ($('.player2').css('margin-left')==='970px') {
                    alert('Player2 wins!');
                  }
              }
          }
      });
  });




$('button').click(function() {
    location.reload();
});
