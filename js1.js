function validfullname()
{
	var name=document.getElementById("fullname").value;
	var rel=/^[a-zA-Z \s\'\-]{2,20}$/;
	if(rel.test(name))
	{
		document.getElementById("namepromt").style.color="darkgreen"
	

		document.getElementById("namepromt").innerHTML="VALID"
		return true;
	}
	else
	{
		document.getElementById("namepromt").style.color="red"
	

		document.getElementById("namepromt").innerHTML="Enter 2-20 letter long"
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
	

		document.getElementById("phonepromt").innerHTML="VALID"
		return true;
	}
	else
	{
		document.getElementById("phonepromt").style.color="red"
	

		document.getElementById("phonepromt").innerHTML="Use only no. in XXX-XXX-XXXX format"
		return false;
	}

}

function validpeople()
{
	var req=document.getElementById("people").value;

	if(req<0||req>20)
	{
		document.getElementById("peoplepromt").style.color="red"
	

		document.getElementById("peoplepromt").innerHTML="Only 1-20 people"
		return false;
	}
	else
	{
		document.getElementById("peoplepromt").style.color="darkgreen"
	

		document.getElementById("peoplepromt").innerHTML="VALID"
		return true;
	}

}

function customize()
{
	var fn=document.getElementById("fullname").value;
	var ph=document.getElementById("phoneno").value;
	var em=document.getElementById("email").value;
	var ne=document.getElementById("near").value;
	var d=document.getElementById("date").value;
	var pe=document.getElementById("people").value;

document.getElementById("custom").innerHTML="<h3>'Customized Trip To Maldives'</h3>";
document.getElementById("custom").innerHTML+="<p>"+fn+"<br>"+ph+"<br>"+em+"<br>"+ne+"<br>"+d+"</p>";
document.getElementById("custom").innerHTML+="<p> Total Cost: INR"+700000*pe+"</p>"

}