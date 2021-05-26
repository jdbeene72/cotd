$(function(){
      $(document).ready(function() {
          $("#myModal #numguest").keyup(function(){
              totalCraw = $("#myModal #numguest").val()* $("#myModal #crawqty").val();
              $("#myModal #totalCraw").val(totalCraw);
          });
          
          $("#myModal #numguest").keyup(function(){
              totalSausage = $("#myModal #numguest").val()* .25;
              $("#myModal #totalSausage").val(totalSausage);
          });
          
          $("#myModal #numguest").keyup(function(){
              totalPot = $("#myModal #numguest").val()* 1;
              $("#myModal #totalPot").val(totalPot);
          });
          
          $("#myModal #numguest").keyup(function(){
              totalCorn = $("#myModal #numguest").val()* 1;
              $("#myModal #totalCorn").val(totalCorn);
          });
          
          $("#myModal #numguest").keyup(function(){
              totalMush = $("#myModal #numguest").val()* 2;
              $("#myModal #totalMush").val(totalMush);
          });
      });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}