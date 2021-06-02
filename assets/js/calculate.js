jQuery('.numbersOnly').keyup(function () { 
    this.value = this.value.replace(/[^0-9\.]/g,''); //valideates number in field, null if false
 
    var men = (parseInt(document.getElementById("nummen").value, 10) || 0);
    var other = (parseInt(document.getElementById("numother").value, 10) || 0);
    
    totalPeople = Number(men) + Number(other);
    menCraw = Number(men) * 4;
    otherCraw = Number(other) * 2;
    totalCraw = Number(menCraw) + Number(otherCraw);
    totalCraw = menCraw + otherCraw;
    totalSausage = totalPeople * .33;
    if (Math.round(totalSausage) < 1){totalSausage = 1;}
    totalPot = Number(totalPeople) * 1;
    totalCorn = Number(totalPeople) * 1;
    totalMush = Number(totalPeople) * 2;        
    
    document.getElementById("totalPeople").value=totalPeople;
    document.getElementById("totalCraw").value=totalCraw;
    document.getElementById("totalSausage").value=Math.round(totalSausage);
    document.getElementById("totalPot").value=totalPot;
    document.getElementById("totalCorn").value=totalCorn;
    document.getElementById("totalMush").value=totalMush;
});

function clearcalc() {
    document.getElementById("nummen").value="";
    document.getElementById("numother").value="";
    document.getElementById("totalPeople").value="";
    document.getElementById("totalCraw").value="";
    document.getElementById("totalSausage").value="";
    document.getElementById("totalPot").value="";
    document.getElementById("totalCorn").value="";
    document.getElementById("totalMush").value="";
}
