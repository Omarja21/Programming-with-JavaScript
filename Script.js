AskForRate();


function AskForRate() {
    var Auditions=prompt("rate my performance from 1 to 10");
    ShowAlert(Auditions);
  }


  function ShowAlert(Auditions){
    if (Auditions < 5){
        alert('Bad boy go and rate me higher');
    }
    else if (Auditions >= 5 && Auditions < 8){
        alert("not bad boy");
    }
    else if(Auditions >= 8 && Auditions <=10){
        alert("Good booooy here is a cookie for U");
    }else {alert("InValid Value");
    }
    
    confirm("Press Ok to pay respect");
    
  }