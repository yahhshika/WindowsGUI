
let lastSecond = new Date().getSeconds();

function checkTimeChange() {
    let now = new Date();
    let currentSecond = now.getSeconds();

    if (currentSecond !== lastSecond) {
        // console.log(`Time updated: ${now.toLocaleTimeString()}`);
        document.querySelector(".time").innerHTML = new Date().toString().split(" ")[4];
        lastSecond = currentSecond;
    }

    requestAnimationFrame(checkTimeChange);
}

checkTimeChange(); // Start the loop

let lastDate = new Date().toDateString();
document.querySelector(".date").innerHTML = new Date().toString().split(" ").slice(0,3).join("-");
function checkDateChange() {
    let currentDate = new Date().toDateString();
    
    if (currentDate !== lastDate) {
        // console.log(`Date changed! Today is now ${currentDate}`);
        document.querySelector(".date").innerHTML = new Date().toString().split(" ").slice(0,3).join("-");
        lastDate = currentDate;
    }

    requestAnimationFrame(checkDateChange); // Continuously check
}

checkDateChange();

let calcbtn = document.querySelectorAll(".calcbtn")
let string = "";
Array.from(calcbtn).forEach(e => {
    e.addEventListener("click", ()=>{
        let n = e.innerHTML;
        if(n==="="){
            try {
                
                
                let ans = eval(string);
                document.querySelector(".calcip").value = ans;
                string = ""
                
            } catch (error) {
                string = "";
                document.querySelector(".calcip").value = "";
                console.log("error: "+error);
                
            }
        }else if(n==="C"){
            string = ""
            
            document.querySelector(".calcip").value = string;
        }else{
            string = string + n;
            
            document.querySelector(".calcip").value = string;
            
        }
    })
});
document.querySelector(".calcEnd").addEventListener("click",()=>{
    document.querySelector(".calculator").classList.add("opacity0");
    // document.querySelector(".calculator").classList.remove("opacity1");

    // Array.from(calcLogo)[1].style.textDecoration = "none";
})
let calcLogo = document.querySelectorAll(".fa-calculator");
Array.from(calcLogo).forEach(e=>{
    e.addEventListener("click",()=>{
        // document.querySelector(".calculator").classList.add("opacity1");
        document.querySelector(".calculator").classList.remove("opacity0");
        // Array.from(calcLogo)[1].style.textDecoration = "overline";

    })
})

let imagesEnd = document.querySelector(".imagesEnd");
imagesEnd.addEventListener("click",()=>{
    document.querySelector(".imgOuter").classList.add("opacity0");
    // document.querySelector(".imgOuter").classList.remove("opacity1");

})
let bgIcon = document.querySelectorAll(".fa-palette");
Array.from(bgIcon).forEach(e=>{
    
    e.addEventListener("click",()=>{
        console.log('clicked');
        
        // document.querySelector(".imgOuter").classList.add("opacity1");
        document.querySelector(".imgOuter").classList.remove("opacity0");
    })
    
})



