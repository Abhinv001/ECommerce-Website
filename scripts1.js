const container=docuument.querySelector(".container"),
   pwShowHide=docuument.querySelectorAll(".showHidePw"),
   pwFields=document.querySelectorAll(".password");

   pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventlistener("click",()=>{
        pwFields.forEach(pwField => {
            if(pwField.type ==="password"){
                pwField.type="text"
            }else{
                pwField.type="password";
            }
        })
    })
   })