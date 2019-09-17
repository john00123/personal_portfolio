// $(document).ready(function() {
//
//   $('footer a, .tile a').on('click', function(event){
//     event.preventDefault()
//     const href = $(this).attr('href')
//     window.history.pushState({url: href}, null, href)
//
//
//     $('body').fadeOut(250, function(){
//       $('body').load(href).scrollTop(0).fadeIn(250)
//     })
//   })
// });
//
// $(window).on('popstate', function (e) {
//     var state = e.originalEvent.state;
//     if (state !== null) {
//       $('body').load(state.url)
//     }
//     if(state === null){
//       $('body').load('index.html')
//     }
// });
