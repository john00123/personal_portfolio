$(document).ready(function() {
   $('#character-size').on('change',function(){
     let size = $(this).val();
     $('.character-display').css("font-size",`${size}pt`);
   })


});
