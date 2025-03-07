let msg = document.querySelectorAll(".refnote")
let msgArr = Array.from(msg)[0];
console.log(msgArr.dataset.msg);



let notecross = document.querySelector(".endshowFiles");
notecross.addEventListener("click",()=>{
    document.querySelector(".showfiles").classList.add("opacity0");
    // document.querySelector(".showfiles").classList.remove("opacity1");
    
})
let notepad = document.querySelectorAll(".allfiles")
let noteArray = Array.from(notepad);
noteArray.forEach(e=>{
    e.addEventListener("click",()=>{
        // document.querySelector(".showfiles").classList.add("opacity1");
        document.querySelector(".showfiles").classList.remove("opacity0");

    })
})
let counter = false; 
let mode = document.querySelector(".modes");
mode.addEventListener("click",()=>{
    if(!counter){
        console.log(counter);
        
        document.querySelector(".texteditor").style.background = " #1e1e1e";
        document.querySelector(".texteditor").style.color = "white";
        document.querySelector(".ip").style.background= "white";
        document.querySelector(".textip").style.background= "white";
        mode.innerHTML = '<i class="fa-regular fa-sun"></i>';
        counter = true;
    }else{
        console.log(counter);
        
        // document.querySelector(".texteditor").style.background = "linear-gradient(135deg, #dfe9f3, #ffffff)";
        document.querySelector(".texteditor").style.background = "aliceblue";
        document.querySelector(".texteditor").style.color = "black";
        document.querySelector(".ip").style.background= "white";
        document.querySelector(".textip").style.background= "white";
        mode.innerHTML = '<i class="fa-solid fa-moon"></i>';
        counter = false;
    }
    
})

let endtext = document.querySelector(".endtextedit");
endtext.addEventListener("click",()=>{
    document.querySelector(".texteditor").classList.add("opacity0");
})

let textNote = document.querySelectorAll(".fa-clipboard");
Array.from(textNote).forEach(e=>{
    e.addEventListener("click",()=>{
        document.querySelector(".texteditor").classList.remove("opacity0");
    })
    
})

let row = document.querySelectorAll(".rows");
let rowArr = Array.from(row);
console.log(rowArr);

rowArr.forEach(e=>{
    console.log(e);
    
    e.addEventListener("click",()=>{
        console.log("clicked");
        
        // let text = document.querySelector(".texteditor")
        // text.classList.remove("opacity0");
        let message = e.children[0].dataset.msg;
        document.querySelector(".textip").value = message;
        document.querySelector(".input1").value = e.children[1].innerHTML;
        document.querySelector(".showfiles").classList.add("opacity0");
        document.querySelector(".savebtn").disabled = true;
        let edit = document.querySelector(".edit");
        edit.innerHTML = "Edit";
        edit.classList.remove("opacity0");

        edit.addEventListener("click",()=>{
            document.querySelector(".savebtn").disabled = false;
    
        })

    

    })
});


