$(function (){
   $("#slider").slider({
       min: 3,
       max: 30,
       slide: function(event, ui){
         $("#sizeSlider").height(ui.value);
         $("#sizeSlider").width(ui.value);
         $("#px").text(ui.value + "px");
       }
   });

});