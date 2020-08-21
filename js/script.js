
//slider using jquery.


// strt -> Color Filter Script

    a=new Array();
    a[0]="gray";
    a[1]="green";
    a[2]="blue";
    a[3]="yellow";
    a[4]="pink";
    i=0;
	
    function change()
    {
        document.getElementById("heading").style.color=a[i];
        if(i>4)
        {
            i=0;
        }
        else
        {
            i=i+1;
        }
    }
    setInterval("change()",300);
	
	//end Color Filter Script
//registration form validation. Strt-->

function empty()
{
		//when user click on reset button this function will clear all the field exist in form .
	document.forms['register_form']['Fname'].value="";
	document.forms['register_form']['Lname'].value="";
	document.forms['register_form']['Email'].value="";
	document.forms['register_form']['Contact'].value="";
	document.forms['register_form']['Address'].value="";
	document.forms['register_form']['City'].value="";
	document.forms['register_form']['Pincode'].value="";
	
}
// login validateion


//delete login details
	function clear()
{
		//when user click on reset button this function will clear all the field exist in form .
	document.forms['login_form']['Username'].value="";
	document.forms['login_form']['Password'].value="";	
}
//end

function login_validate()
{
	
	// username validation
	var username=document.forms['login_form']['Username'];
	
	username.addEventListener("blur",username_error,true);
		function username_error()
		{	
		
			if(username.value!="")
			{
				document.getElementById('username').innerHTML="";
				return true;
			}
		}


	
	if(username.value=="")
	{
		document.getElementById('username').innerHTML="* please Enter Username .";
		username.focus();
		return false;
	}
	//contact through login
	/*if(contact.value<6300000000)
	{
		document.getElementById('er_contact').innerHTML="* please Enter Valid Contact.";
		contact.focus();
		return false;
	} */
	var ctnt=/^[0-9]+$/;
	var correct=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	
	if((username.value.match(correct))||((username.value.match(ctnt) && username.value.length==10 && username.value>6300000000)))
		true;
	else
	{
		document.getElementById('username').innerHTML="* Invalid Username";
		username.focus();
		return false;
	}
	//end
	
	// password validation
	var password=document.forms['login_form']['Password'];
	
	password.addEventListener("blur",password_error,true);
		function password_error()
		{	
		
			if(password.value!="")
			{
				document.getElementById('password').innerHTML="";
				return true;
			}
		}
	
	
	if(password.value=="")
	{
		document.getElementById('password').innerHTML="* please Enter Password.";
		password.focus();
		return false;
	}
	var correct=/^[0-9A-Za-z]+$/;
	if(password.value.match(correct) && password.value.length==8)
		true;
	else
	{
		document.getElementById('password').innerHTML=" Invalid Password. ->length Must Be 8 Char.! ";
		password.focus();
		return false;
	}
	
	
	
	//end
	
}


//login validation end

//form controls validation

function register_validate()
{
	// first name validation		
	var fname=document.forms['register_form']['Fname'];
		fname.addEventListener("blur",fname_err,true);
		
	if(fname.value=="")
	{
		document.getElementById('er_fname').innerHTML="* please Enter First Name .";
		fname.focus();
		return false;
	}
	function fname_err()
	{
		
		if(fname.value!="")
		{
			document.getElementById('er_fname').innerHTML="";
			return true;
		}
	}
	
	
	var correct=/^[a-zA-Z]+$/;
	
	if(fname.value.match(correct))
		true;
	else
	{
		document.getElementById('er_fname').innerHTML="* please Enter Only Characters .";
		fname.focus();
		return false;
	}
	// end 
	
	// last name validation
	var lname=document.forms['register_form']['Lname'];
		lname.addEventListener("blur",lname_err,true);
		function lname_err()
		{	
		
			if(lname.value!="")
			{
				document.getElementById('er_lname').innerHTML="";
				return true;
			}
		}
		
		
	if(lname.value=="")
	{
		document.getElementById('er_lname').innerHTML="* please Enter last Name .";
		lname.focus();
		return false;
	}

	var correct=/^[a-zA-Z]+$/;
	
	if(lname.value.match(correct))
		true;
	else
	{
		document.getElementById('er_lname').innerHTML="* please Enter Only Characters .";
		lname.focus();
		return false;
	}
	//end
	// email validation
	var email=document.forms['register_form']['Email'];
	email.addEventListener("blur",email_err,true);
		function email_err()
		{	
			if(email.value!="")
			{
				document.getElementById('er_email').innerHTML="";
				return true;
			}
		}
	if(email.value=="")
	{
		document.getElementById('er_email').innerHTML="* please Enter Email Address .";
		email.focus();
		return false;
	}
	
	var correct=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	
	if(email.value.match(correct))
		true;
	else
	{
		document.getElementById('er_email').innerHTML="* please Enter Valid Email ID .";
		email.focus();
		return false;
	}
	//end
	
	
	
	// contact validation
	var contact=document.forms['register_form']['contact'];
	
	contact.addEventListener("blur",contact_err,true);
		function contact_err()
		{	
		
			if(contact.value!="")
			{
				document.getElementById('er_contact').innerHTML="";
				return true;
			}
		}
	
	
	if(contact.value=="")
	{
		document.getElementById('er_contact').innerHTML="* please Enter Contact.";
		contact.focus();
		return false;
	}
	if(contact.value<6300000000)
	{
		document.getElementById('er_contact').innerHTML="* please Enter Valid Contact.";
		contact.focus();
		return false;
	}
	var correct=/^[0-9]+$/;
	
	if(contact.value.match(correct) && contact.value.length==10)
		true;
	else
	{
		document.getElementById('er_contact').innerHTML="* please Enter Valid Contact .";
		contact.focus();
		return false;
	}
	//end
	
	
		// first name validation		
	var address=document.forms['register_form']['Address'];
		address.addEventListener("blur",address_err,true);
		
	if(address.value=="")
	{
		document.getElementById('er_address').innerHTML="* please Enter address .";
		address.focus();
		return false;
	}
	function address_err()
	{
		
		if(address.value!="")
		{
			document.getElementById('er_address').innerHTML="";
			return true;
		}
	}
	
	// end 
	
	
	// first name validation		
	var city=document.forms['register_form']['City'];
		city.addEventListener("blur",city_err,true);
		
	if(city.value=="")
	{
		document.getElementById('er_city').innerHTML="* please Enter City Name .";
		city.focus();
		return false;
	}
	function city_err()
	{
		
		if(city.value!="")
		{
			document.getElementById('er_city').innerHTML="";
			return true;
		}
	}
	var correct=/^[a-zA-Z]+$/;
	
	if(city.value.match(correct))
		true;
	else
	{
		document.getElementById('er_city').innerHTML="* please Enter Only Characters .";
		city.focus();
		return false;
	}
	// end 
	
	
	var pincode=document.forms['register_form']['Pincode'];
	
	pincode.addEventListener("blur",pincode_err,true);
		function pincode_err()
		{	
		
			if(pincode.value!="")
			{
				document.getElementById('er_pincode').innerHTML="";
				return true;
			}
		}
	
	
	if(pincode.value=="")
	{
		document.getElementById('er_pincode').innerHTML="* please Enter Pincode.";
		pincode.focus();
		return false;
	}
	
	var correct=/^[0-9]+$/;
	
	if(pincode.value.match(correct) && pincode.value.length==6)
		true;
	else
	{
		document.getElementById('er_pincode').innerHTML="* please Enter Valid Pincode .";
		pincode.focus();
		return false;
	}
	//end
	

	
	
}




