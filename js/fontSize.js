$(document).ready(function() {
   $('#font-sizing').on('input',function(){
     let size = $(this).val();
     $('.sizing').css("font-size",`${size}pt`);
   })
});
