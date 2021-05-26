function validfullname()
{
	var name=document.getElementById("fname").value;
	var rel=/^[a-zA-Z \s\'\-]{2,20}$/;
	if(rel.test(name))
	{
		document.getElementById("namepromt").style.color="darkgreen"
	

		document.getElementById("namepromt").innerHTML="<b>VALID</b>"
		return true;
	}
	else
	{
		document.getElementById("namepromt").style.color="red"
	

		document.getElementById("namepromt").innerHTML="<b>Enter 2-20 letter long</b>"
		return false;
	}
}
function validphoneno()
{
	var phone=document.getElementById("phoneno").value;
	var reg=/^\d{3}-\d{3}-\d{4}$/;
	if(reg.test(phone))
	{
		document.getElementById("phonepromt").style.color="darkgreen"
	

		document.getElementById("phonepromt").innerHTML="<b>VALID</b>"
		return true;
	}
	else
	{
		document.getElementById("phonepromt").style.color="red"
	

		document.getElementById("phonepromt").innerHTML="<b>INVALID</b>"
		return false;
	}

}
function validage(){
	var vage=document.getElementById("age").value;
	if(vage>10&&vage<75)
	{
		document.getElementById("ageprompt").style.color="darkgreen"
		document.getElementById("ageprompt").innerHTML="<b>VALID</b>"
		return true;
	}
	else
	{
		document.getElementById("ageprompt").style.color="red"
		document.getElementById("ageprompt").innerHTML="<b>INVALID</b>"
		return true;
	}


}
function personalize()
{
	var fn=document.getElementById("fname").value;
	var ph=document.getElementById("phoneno").value;
	var ag=document.getElementById("age").value;
	var em=document.getElementById("email").value;

	var add=document.getElementById("address").value;
	var t=document.getElementById("time").value;
	document.getElementById("per").innerHTML="<h3>'Personalized Immunity Booster Kit Details'</h3>";
	document.getElementById("per").innerHTML+="<p>Name: "+fn+"<br>Mobile Number: "+ph+"<br>Age: "+ag+"<br>Email ID: "+em+"<br>Address: "+add+"<br>Booster Kit for how many months: "+t+"</p>";
	document.getElementById("per").innerHTML+="<p> Total Cost of Booster Kit: INR "+1500*t+"</p>"

}

function getData()
{
    //gettting the values
    var name = document.getElementById("fname").value;
    var emaill= document.getElementById("email").value; 
    var add= document.getElementById("adr").value; 
    var pin= document.getElementById("city").value; 
    //saving the values in local storage
    localStorage.setItem("txtValue", fname);
    localStorage.setItem("txtValue1", email);
    localStorage.setItem("txtValue2", adr);
    localStorage.setItem("txtValue3", city);   
}
