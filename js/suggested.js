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



const date1 = new Date('2/15/2013');
const date2 = new Date();
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


$('.inject').text(''+ diffDays + ' days' + '');
$('body').on('touchstart', function() {});
