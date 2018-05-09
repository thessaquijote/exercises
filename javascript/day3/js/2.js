$(document).ready(function() {
  $('#greet').on('click', function() {
    var name = $('#name').val();
    console.log(name);
    say("Hi, "+name+"!");
  });

  function say(text) {
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  }
});
