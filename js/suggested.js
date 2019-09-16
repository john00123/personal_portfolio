$(document).ready(function() {

  $('footer a').on('click', function(event){
    event.preventDefault()
    const href = $(this).attr('href')
    window.history.pushState(null, null, href)


    $('body').fadeOut(250, function(){
      $('body').load(href).scrollTop(0).fadeIn(250)
    })


  })
});
