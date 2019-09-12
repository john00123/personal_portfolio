$(document).ready(function() {
   $('#font-sizing').on('change',function(){
     let size = $(this).val();
     $('.sizing').css("font-size",`${size}pt`);
   })


});
