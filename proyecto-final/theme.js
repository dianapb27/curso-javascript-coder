function darkMode() {
  $("#theme-btn").fadeOut(200, function() {
    $("#theme-btn").fadeIn(200);
  })
                 .delay(200)
                 .css("color", "white")
                 .empty()
                 .append('<i class="fas fa-sun"></i>');
  $("body").css("background-color", "black");
  // $("h1").css("color", "aquamarine");
  $("h4").addClass("text-white");
  $("p").css("color", "white");
  $(".card").addClass("bg-dark");
  $(".card-text").addClass("text-light");
  $("input").addClass("bg-dark text-light");
  $("select").addClass("bg-dark text-light");
  localStorage.setItem("theme", "dark");
}

function lightMode() {
  $("#theme-btn").fadeOut(200, function() {
    $("#theme-btn").fadeIn(200);
  })
                 .delay(200)
                 .css("color", "black")
                 .empty()
                 .append('<i class="fas fa-moon"></i>');
  $("body").css("background-color", "white");
  // $("h1").css("color", "teal");
  $("h4").removeClass("text-white");
  $("p").css("color", "black");
  $("#slogan").css("color", "white");
  $(".card").removeClass("bg-dark");
  $(".card-text").removeClass("text-light");
  $("input").removeClass("bg-dark text-light");
  $("select").removeClass("bg-dark text-light");
  localStorage.setItem("theme", "light");
}

function changeTheme() {
  if (localStorage.getItem("theme") == "light") {
    darkMode();
  } else {
    lightMode();
  }
}

$("#theme-btn").click(changeTheme);

if (localStorage.getItem("theme") == "dark") {
  darkMode();
} else {
  lightMode();
}
