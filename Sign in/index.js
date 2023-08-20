let x = [
    {
        id: 1,
        name: "John",
        surname: "Smith",
        tel: +7456789234,
        info: "Lives in America ",
        avatar: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"

    }

]
let x2 = [
  {
      id: 2,  
      name: "Mark",
      surname: "Murphy",
      tel: +7456789234,
      info: "Lives in America ",
      avatar: "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"

  }

]


function signIn(){
  if(log.value===x[0].name||pass.value===x2[0].name){
    document.querySelector("body").innerHTML=`
    <div class="hi">
    <p>${x[0].name} </p>
    <p>${x[0].surname}</p>
    <p>${x[0].tel}</p>
    <p>${x[0].info}</p>
    <img src="${x[0].avatar}" alt="error"/>
    
    </div>
    `
    
  } else{
    document.querySelector("body").innerHTML=`
    <div class="hi">
    <p>${x2[0].name} </p>
    <p>${x2[0].surname}</p>
    <p>${x2[0].tel}</p>
    <p>${x2[0].info}</p>
    <img src="${x2[0].avatar}" alt="error"/>
    
    </div>
    `

  }
}