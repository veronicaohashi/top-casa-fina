$('#navbar-collapse').on('show.bs.collapse', function(){
  $('.topcasafina-banner').css('transform', 'translate(-50%, 10%)');
});
$('#navbar-collapse').on('hide.bs.collapse', function(){
  $('.topcasafina-banner').css('transform', 'translate(-50%, -50%)');
});