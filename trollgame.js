$(document).ready(function(){

function toggle_troll(){
  var randomNum = Math.floor(Math.random() * 16);
    var actualNum = randomNum + 1;
    var randomtd = $('#board td').eq(randomNum);
    var whichRow = Math.ceil(actualNum / 4);
    var whichColumn = (actualNum % 4) == 0 ? 4 : (actualNum % 4);
   randomtd.html("<i class='fa fa-meh-o'></i>").toggleClass("troll");
};

  $("table").on("click", "td", function() {
    if ($(this).hasClass("troll")){
    $(this).toggleClass("troll");
    toggle_troll();
    }
  });
});