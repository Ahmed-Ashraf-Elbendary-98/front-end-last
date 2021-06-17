// window.onload = function () {
//   var myVar;
//   function myFunction() {
//     myVar = setTimeout(stop, 3000);
//   }
//   myFunction();

//   function stop() {
//     $("#loader").fadeOut("slow");
//     $(".scaleable-div").css("display", "block");
//   }
// };

$(document).ready(function () {
  var $el = $("#collector");
  var elHeight = $el.outerHeight();
  var elWidth = $el.outerWidth();

  var $wrapper = $("#scaleable-div");
  $wrapper.css({
    width: $(window).width(),
    height: $(window).height(),
  });

  $(window).on("resize", function () {
    $wrapper.css({
      width: $(window).width(),
      height: $(window).height(),
    });

    starterData = {
      size: {
        width: $wrapper.width(),
        height: $wrapper.height(),
      },
    };
    $wrapper.resizable({ resize: doResize });
    //
    doResize(null, starterData);
  });

  function doResize(event, ui) {
    console.log("---" + ui.size.width);
    var scale, origin;
    console.log("lllllllllllllllllllllll");
    elHeight = $el.innerHeight(); //$el.outerHeight();
    elWidth = $el.innerWidth(); //$el.outerWidth();
    scale = Math.min(ui.size.width / elWidth, ui.size.height / elHeight);
    $el.css({
      transform: "translate(-50%, -50%) " + "scale(" + scale + ")",
    });
  }

  var starterData = {
    size: {
      width: $wrapper.width(),
      height: $wrapper.height(),
    },
  };
  doResize(null, starterData);

  //?-------------------------- Click Events ------------------

  $("#repeat-btn").click(function () {
    var myEle = $(".container-div");
    myEle.css("opacity", "1");
    $("#animal-1").prop("disabled", false);
    $("#animal-2").prop("disabled", false);

    $("#animal-1").css("color", "black");
    $("#animal-2").css("color", "black");
  });

  $("#see-btn").click(function () {
    var myEle = $(".container-div");
    myEle.css("opacity", "0.5");

    //Todo: show the answers with green color
    $("#animal-1 option:eq(1)").prop("selected", true);
    $("#animal-2 option:eq(2)").prop("selected", true);

    $("#animal-1").css("color", "green");
    $("#animal-2").css("color", "green");

    //Todo: disable the entering the answers
    $("#animal-1").prop("disabled", true);
    $("#animal-2").prop("disabled", true);
  });

  //!---- End of document.ready() -------
});

//? ----------------------play audio --------------------------

function play() {
  var audio = new Audio(
    "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav"
  );
  audio.play();
}

function playCat() {
  var audio = new Audio(
    "https://audio-previews.elements.envatousercontent.com/files/271994176/preview.mp3"
  );
  audio.play();
}

function playLion() {
  var audio = new Audio(
    "https://audio-previews.elements.envatousercontent.com/files/277793913/preview.mp3"
  );
  audio.play();
}

//? ------------------- the Loading Effect Action Here --------------
var myVar;
function myFunction() {
  myVar = setTimeout(stop, 3000);
}
myFunction();

function stop() {
  $("#loader").fadeOut("slow");
  $(".scaleable-div").css("display", "block");
}
