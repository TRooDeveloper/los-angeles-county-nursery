window.addEventListener('load', function() {
//   $('#calculate').on('click', function(e) {
    
//     e.preventDefault();
    
//     var store_zip = $('body').attr("data-store-zip");
//     var customer_zip = $('#customer_zip').val();

//     var apiKey = ' AIzaSyCuxIHwRURiz6tcxTlJeR5DshsxyRI0Y6U';

//     var url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=${store_zip}&destinations=${customer_zip}&key=${apiKey}`;

//     $.ajax({
//       url: url,
//       type: 'GET',
      
//       cors: true ,
//       contentType:'application/json',
//       secure: true,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//       },
//       success: function(data) {
//         console.log(data);
//         if (data.rows.length > 0 && data.rows[0].elements.length > 0) {
//           var distance = data.rows[0].elements[0].distance.text;
//           // $('#result').text('Distance: ' + distance);
//           console.log('Distance: ' + distance);
//         } else {
//           console.log('Distance not found');
//         }
//       },
//       error: function() {
//         $('#result').text('Error fetching distance');
//       }
//     });
//   });


   setTimeout(function () {
     // if($("body").hasClass("template--product")){
     //        // custom_plant_type==Evergreen
          
     //      // Condition 1
     //        if($("input.custom_plant_type").length > 0){
     //            if($("input.custom_plant_type").val() == "Evergreen" && $("body").attr("usertype") == "Non-Local"){
     //              console.log("disable buttons");
     //            }
     //        }
          
     //      // // Condition 2
     //        if($("input.custom_plant_type").length > 0){
     //            if($("input.custom_plant_type").val() == "Deciduous" && $("body").attr("usertype") == "Non-Local" && $(".variant_dropshipping.selected").val() == "false"){
     //              console.log("disable button");
     //            }
     //        }
              
            
     //      }
   }, 800);


  




  
});



