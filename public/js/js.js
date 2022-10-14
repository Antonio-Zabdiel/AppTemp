function convert()
{
  var tempIn=getRadioInicial();//unidad inicial
  var tempFi=getRadioFinal();//unidad a convertir
  var temper=parseFloat(document.getElementById("tempInic").value);

  if(tempIn == tempFi)
  {
    var reques=(temper + " " + tempFi + "°");
    document.getElementById("respuesta").innerHTML = reques;
    alert(reques);
  }
  else if(tempIn == "K" && tempFi == "C")
  {
    var ktoc=(temper-273.15);
    var reques=(ktoc +" C°");
    document.getElementById("respuesta").innerHTML = reques;
    alert(reques);
  }
  else if(tempIn == "K" && tempFi == "F")
  {
    var ktof=(1.8*(temper-273.15))+32;
    var reques=(ktof +" F°");
    document.getElementById("respuesta").innerHTML = reques;
    alert(reques);
  }
  else if(tempIn == "F" && tempFi == "K")
  {
    var ftok=((temper-32)/1.8)+273.15;
    var reques=(ftok +" K°");
    document.getElementById("respuesta").innerHTML = reques;
    alert(reques);
  }
  else if(tempIn == "F" && tempFi == "C")
  {
    var ftoc=(temper-32)/1.8;
    var reques=(ftoc +" C°");
    document.getElementById("respuesta").innerHTML = reques;
    alert(reques);
  }
  else if(tempIn == "C" && tempFi == "K")
  {
    var ctok=(temper+273.15);
    var reques=(ctok +" K°");
    document.getElementById("respuesta").innerHTML = reques;
    alert(reques);
  }
  else if(tempIn == "C" && tempFi == "F")
  {
    var ctof=(temper*1.8)+32;
    var reques=(ctof +" F°");
    document.getElementById("respuesta").innerHTML = reques;
    alert(reques);
  }
  else
  {
    reques="Error";
    document.getElementById("respuesta").innerHTML = reques;
    alert(reques);
  } 
}

function getRadioInicial(){
    var select="error";
    var getSelectedValue = document.querySelector( 'input[name="temi"]:checked');   
    if(getSelectedValue != null) {   
        select=getSelectedValue.value;
        //console.log(getSelectedValue);
    }
    //console.log(select);
    return select
}

function getRadioFinal()
{
    var select=256;
    var getSelectedValue = document.querySelector( 'input[name="temf"]:checked');   
    if(getSelectedValue != null) 
    {   
        select=getSelectedValue.value;
        //console.log(getSelectedValue);
    }
    //console.log(select);
    return select
}