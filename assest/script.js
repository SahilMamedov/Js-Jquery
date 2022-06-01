let form=document.getElementById("form");
let username=document.getElementById("username");
let password=document.getElementById("password");
let login=document.getElementById("login");
let page=document.getElementById("page");
let logout=document.getElementById("logout");
let check=document.getElementById("checked")




const user={
    username:"sahil",
    password:"parol",
    isLogin:false,
    
}

if(localStorage.getItem("Dbuser")==null){
    localStorage.setItem("Dbuser",JSON.stringify(user))
}


function Ischeked(){
    let user=JSON.parse(localStorage.getItem("Dbuser"))
    if(user.isLogin==false){
        form.style.display="block";
        page.style.display="none";
    }
    else if(user.isLogin==true){
        page.style.display="block";
        form.style.display="none";
    }
   
}
Ischeked()






login.addEventListener("click",function(ev){
    ev.preventDefault()

    

    let user=JSON.parse(localStorage.getItem("Dbuser"))
    
    if(check.checked===true){
        user.Ischeked=true;
       
    }
    
    
    
    if(user.username===username.value&&user.password===password.value){
       user.isLogin = true;
       localStorage.setItem("Dbuser",JSON.stringify(user));

    }
    else{
        alert("Error.!!")
        username.value="";
        password.value="";
    }
    Ischeked()
})

logout.addEventListener("click",function(ev){
    ev.preventDefault()



    
    


    let user=JSON.parse(localStorage.getItem("Dbuser"))
    if(user.Ischeked==true){
        username.value=user.username
        password.value=user.password
    }
    user.isLogin = false
    user.Ischeked=false
    localStorage.setItem("Dbuser",JSON.stringify(user))
    // username.value="";
    // password.value="";
    
    Ischeked()
})






