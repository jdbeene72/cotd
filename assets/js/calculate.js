/*$('.form-group').on('input','.prc',function(){
  var totalSum = 0;
  $('.form-group .prc').each(function) {
    var inputVal = $(this).val();
    if($.isNumeric(inputVal)) {
      totalSum += parseFloat(inputVal);
    }
  });
  $('#result').val(totalSum);
}); */


function Calculate() {
  var people = document.getElementById("numPeople").value;
  var crawfish = 3;
  var potato = 1;
  var corn = 1.5;
  var mushroom = 2;
  var resultCraw = parseInt(people) * parseInt(crawfish);
  var resultPotw = parseInt(people) * parseInt(potato);
  var resultCorn = parseInt(people) * parseInt(corn);
  var resultMush = parseInt(people) * parseInt(mushroom); 
}