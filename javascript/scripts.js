function pressed()
  {
  if(document.getElementById("ostrich").checked) 
{
  alert("Try Again!");
}
else if(document.getElementById("cheetah").checked) 
{
  alert("Winner!");
}
else if(document.getElementById("greyhound").checked)
{
  alert("Try Again!");
}
  }

  function mydropbox() {
    var mylist =
    document.getElementById("myList");
    document.getElementById("favourite").value =
    mylist.options[mylist.selectedIndex].text;
    }

    function validateEmail() {
        var emailID = document.getElementById("email").value;
        atpos = emailID.indexOf("@");
        //alert(atpos)
        dotpos = emailID.lastIndexOf(".");
        if (atpos < 1 || ( dotpos - atpos < 2
       )) {
        alert("Please enter correct email ID")
        }
        else {alert("Thank you for signing up!")}
    }
