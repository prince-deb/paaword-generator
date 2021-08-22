function check(){
    password1=document.getElementById('password1').value;
    password2=document.getElementById('password2').value;
    if(password1==password2)
    {
        window.location="phoneindex.html";
    }
    else{
        msg="wrong password☹,TRY AGAIN!!";
        document.getElementById("wrongpassword").innerHTML=msg;
    }
}