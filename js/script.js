async function darkMode(){
  const bodyNav = $('body, nav');
  const text = $('*');
  text .toggleClass('dark-text');
  $('.progress').toggleClass('dark-progress');
  bodyNav.toggleClass('dark-body');
}

let height = window.innerHeight;



window.onscroll = function() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    let height = 400;
    let position = window.scrollY - 15;
    let percentage = Math.round(position/height*100)
    $('.progress').css('width',`${percentage}%`)
  }
}

$('.more').click(function(){
  $(this).toggleClass('more-expanded');
  $('.border').toggleClass('border-expanded');
})
