/* Starter Code */

var maleData = [];
var femaleData = [];

function getData() {
  $.get("https://dummyjson.com/users?limit=100", function (res) {
    for (var i = 0; i < res.users.length; i++) {
      if (res.users[i].gender === "male") {
        maleData.push(res.users[i]);
      }
      if (res.users[i].gender === "female") {
        femaleData.push(res.users[i]);
      }
    }
  });
}

getData();

function swipeRight() {
  $(this).addClass("rotate-left").delay(700).fadeOut(1);

  $(this).append('<div class="status like">Like!</div>');
  if ($(this).is(":last-child")) {
    $(".cardContainer:nth-child(1)")
      .removeClass("rotate-left rotate-right")
      .fadeIn(300);
  } else {
    $(this).next().removeClass("rotate-left rotate-right").fadeIn(400);
  }
}

function swipeLeft() {
  $(this).addClass("rotate-right").delay(700).fadeOut(1);
  $(this).append('<div class="status dislike">Dislike!</div>');

  if ($(this).is(":last-child")) {
    $(".cardContainer:nth-child(1)")
      .removeClass("rotate-left rotate-right")
      .fadeIn(300);
  } else {
    $(this).next().removeClass("rotate-left rotate-right").fadeIn(400);
  }
}

/* ---------- */
