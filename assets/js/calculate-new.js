$(function(){
      $(document).ready(function() {
          $(".modal-input").keyup(function(){
              men = $("#modalPopup #nummen").val();
              menCraw = men * 4;
              other = $("#modalPopup #numother").val();
              otherCraw = other * 2;
              totalPeople = Number(men) + Number(other);
              totalCraw = Number(menCraw) + Number(otherCraw);
              totalSausage = totalPeople * .33;
              if (Math.round(totalSausage) < 1){totalSausage = 1;}
              totalPot = totalPeople * 1;
              totalCorn = totalPeople * 1;
              totalMush = totalPeople * 2;
              $("#modalPopup #totalCraw").val(totalCraw);
              $("#modalPopup #totalSausage").val(Math.round(totalSausage));
              $("#modalPopup #totalPot").val(totalPot);
              $("#modalPopup #totalCorn").val(totalCorn);
              $("#modalPopup #totalMush").val(totalMush);
          });
      });
});

// Get the modal
var modal = document.getElementById("modalPopup");

// Get the buttons/links that open the modal
var modalLink1 = document.getElementById("modalLink1");

var modalLink2 = document.getElementById("modalLink2");

var modalLink3 = document.getElementById("modalLink3");

// Get the button that closes the modal
var btnClose = document.getElementById("btnClose");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
modalLink1.onclick = function() {
  modal.style.display = "block";
};

modalLink2.onclick = function() {
  modal.style.display = "block";
};

modalLink3.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks the button, hide the modal 
btnClose.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
//  if (event.target == modal) {
//    modal.style.display = "none";
//  }
//};