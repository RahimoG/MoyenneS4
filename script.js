var numberFrom = new RegExp("[0-9]")
var res = numberFrom.test("ra")


var btn = document.getElementById("calcul");
var res = document.getElementById("moy");

var BDDTDt = document.getElementById("BDDTD");
BDDTDt.value = localStorage.BDDTD;
var BDDTPt = document.getElementById("BDDTP");
BDDTPt.value = localStorage.BDDTP;
var BDDEXAMt = document.getElementById("BDDEXAM");
BDDEXAMt.value = localStorage.BDDEXAM;

var RETDt = document.getElementById("RETD");
RETDt.value = localStorage.RETD;
var RETPt = document.getElementById("RETP");
RETPt.value = localStorage.RETP;
var REEXAMt = document.getElementById("REEXAM");
REEXAMt.value = localStorage.REEXAM;

var SETDt = document.getElementById("SETD");
SETDt.value = localStorage.SETD;
var SETPt = document.getElementById("SETP");
SETPt.value = localStorage.SETP;
var SEEXAMt = document.getElementById("SEEXAM");
SEEXAMt.value = localStorage.SEEXAM;

var TLTDt = document.getElementById("TLTD");
TLTDt.value = localStorage.TLTD;
var TLEXAMt = document.getElementById("TLEXAM");
TLEXAMt.value = localStorage.TLEXAM;

var POOTPt = document.getElementById("POOTP");
POOTPt.value = localStorage.POOTP;
var POOEXAMt = document.getElementById("POOEXAM");
POOEXAMt.value = localStorage.POOEXAM;

var DWTPt = document.getElementById("DWTP");
DWTPt.value = localStorage.DWTP;
var DWEXAMt = document.getElementById("DWEXAM");
DWEXAMt.value = localStorage.DWEXAM;

var ANGEXAMt = document.getElementById("ANGEXAM");
ANGEXAMt.value = localStorage.ANGEXAM;





btn.onclick = function(){
    var BDDTD = parseFloat(document.getElementById("BDDTD").value);
    window.localStorage.BDDTD = BDDTD;
    var BDDTP = parseFloat(document.getElementById("BDDTP").value);
    window.localStorage.BDDTP = BDDTP;
    var BDDEXAM = parseFloat(document.getElementById("BDDEXAM").value);
    window.localStorage.BDDEXAM = BDDEXAM;

    var RETD = parseFloat(document.getElementById("RETD").value);
    window.localStorage.RETD = RETD;
    var RETP = parseFloat(document.getElementById("RETP").value);
    window.localStorage.RETP = RETP;
    var REEXAM = parseFloat(document.getElementById("REEXAM").value);
    window.localStorage.REEXAM = REEXAM;

    var SETD = parseFloat(document.getElementById("SETD").value);
    window.localStorage.SETD = SETD;
    var SETP = parseFloat(document.getElementById("SETP").value);
    window.localStorage.SETP = SETP;
    var SEEXAM = parseFloat(document.getElementById("SEEXAM").value);
    window.localStorage.SEEXAM = SEEXAM;

    var TLTD = parseFloat(document.getElementById("TLTD").value);
    window.localStorage.TLTD = TLTD;
    var TLEXAM = parseFloat(document.getElementById("TLEXAM").value);
    window.localStorage.TLEXAM = TLEXAM;

    var POOTP = parseFloat(document.getElementById("POOTP").value);
    window.localStorage.POOTP = POOTP;
    var POOEXAM = parseFloat(document.getElementById("POOEXAM").value);
    window.localStorage.POOEXAM = POOEXAM;

    var DWTP = parseFloat(document.getElementById("DWTP").value);
    window.localStorage.DWTP = DWTP;
    var DWEXAM = parseFloat(document.getElementById("DWEXAM").value);
    window.localStorage.DWEXAM = DWEXAM;

    var ANGEXAM = parseFloat(document.getElementById("ANGEXAM").value);
    window.localStorage.ANGEXAM = ANGEXAM;

    if(BDDTD <= 20 && BDDTD >= 0 && BDDTP <= 20 && BDDTP >= 0 && BDDEXAM <= 20 && BDDEXAM >= 0 
    && RETD <= 20 && RETD >= 0 && RETP <= 20 && RETP >= 0 && REEXAM <= 20 && REEXAM >= 0 
    && SETD <= 20 && SETD >= 0 && SETP <= 20 && SETP >= 0 && SEEXAM <= 20 && SEEXAM >= 0 
    && TLTD <= 20 && TLTD >= 0 && TLEXAM <= 20 && TLEXAM >= 0 
    && POOTP <= 20 && POOTP >= 0 && POOEXAM <= 20 && POOEXAM >= 0 
    && DWTP <= 20 && DWTP >= 0 && DWEXAM <= 20 && DWEXAM >= 0 
    && ANGEXAM <= 20 && ANGEXAM >= 0)
    {
        BDDmoy = (BDDTD + BDDTP)*0.2 + (BDDEXAM*0.6);
        REmoy = (RETD + RETP)*0.2 + REEXAM*0.6;
        SEmoy = (SETD + SETP)*0.2 + SEEXAM*0.6;
        TLmoy = TLTD*0.4 + TLEXAM*0.6;
        POOmoy = POOTP*0.4 + POOEXAM*0.6;
        DWmoy = DWTP*0.4 + DWEXAM*0.6;
        ANGmoy = ANGEXAM;
    
        moy = (BDDmoy*3 + REmoy*3 + SEmoy*3 + TLmoy*2 + POOmoy*2 + DWmoy*2 + ANGmoy)/16;
        res.innerHTML = moy;
        console.log("Moyen General", moy);
        console.log("Moyen BDD", BDDmoy);
        console.log("Moyen RES", REmoy);
        console.log("Moyen SE", SEmoy);
        console.log("Moyen TL", TLmoy);
        console.log("Moyen POO", POOmoy);
        console.log("Moyen DW", DWmoy);
        console.log("Moyen ANG", ANGmoy);
    }
    
    
}


