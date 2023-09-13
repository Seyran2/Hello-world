function valid() {
    document.getElementById("emailValid").innerHTML;
    if (emailValid.value !== "serojayn@gmail.com") {
        document.getElementById("validParag").innerHTML = `
        <p class="valid">Valid email required</p>
        `
    } else {
        document.querySelector("body").innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        <body>
        
            <div class="thanksfrsub" >
                    <img class="icon" src="assets/images/icon-list.svg" alt="" />
                    <h1>Thanks for subscribing!</h1>
                    <p class="thnsubp" >
                    A confirmation email has been sent to ${emailValid.value}.
                    Please open it and click the button inside to confirm your subscription. 
                    
                    </p>
                    <button onclick="rotate()" class="dismisbutt">Dismiss message</button>
            
            
            
            </div>
          
        </body>
        </html>
        
        
        
        
        `
    


    }
}
function rotate(){
    document.querySelector(".icon").style.transform="rotate(290deg)";
}