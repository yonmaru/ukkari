// JavaScript Document

//画像切り替えここから
$(function() {
  var $elem = $('#wrapper img');
  var sp = '_sp.';
  var pc = '_pc.';
  var replaceWidth = 641;

  function imageSwitch() {
    var windowWidth = parseInt($(window).width());
    $elem.each(function() {
      var $this = $(this);
      if(windowWidth >= replaceWidth) {
        $this.attr('src', $this.attr('src').replace(sp, pc));
      } else {
        $this.attr('src', $this.attr('src').replace(pc, sp));
      }
    });
  }
  imageSwitch();

  var resizeTimer;
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      imageSwitch();
    }, 100);
  });
    
});
//画像切り替えここまで