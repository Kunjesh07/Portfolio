$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stat Kunjesh.Patel<br/>" + 
      "><span class='caret'>$</span> skills: Python, hardware-software interaction, Java, C/C++, Java, Django, Flask,HTML,CSS<br/> ^100" +
      "><span class='caret'>$</span> hobbies: Coding, travel,Watching Sci-fi movies <br/> ^200" +
      "><span class='caret'>$</span> Email: Kunjesh137@gmail.com <br/> ^300" +
      "><span class='caret'>$</span> Services: Hands on Project maker, Freelancer, Consultant<br/> ^400"+
      "><span class='caret'>$</span> <a href='/timeline'>timeline</a> <a href='/projects'>Projects</a> <a href='https://github.com/Kunjesh07'>github</a> <a href='https://www.linkedin.com/in/kunjesh-patel-2ab275164/'>linkedin</a><br/>"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
