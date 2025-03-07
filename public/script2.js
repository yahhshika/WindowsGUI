// let indiImgs = document.querySelectorAll(".indiImg");
// let indiArr = Array.from(indiImgs)
// indiArr.forEach(img=>{

//     img.addEventListener("click",()=>{
//         console.log("clicked");
//         try{
          
            

//             document.getElementsByTagName("body")[0].style.background = ` #dfebdf url("${img.src}") center/cover no-repeat fixed; !important`
//         }catch{
//             err=>{
//                 console.log("error: "+err);
                
//             }
//         }
        
//     })
// })


// logic for img generation


document.addEventListener("DOMContentLoaded", function () {
    let indiImgs = document.querySelectorAll(".indiImg");
    let indiArr = Array.from(indiImgs);

    // console.log("All Images Found:", indiArr); 

    indiArr.forEach(img => {
        // console.log("Image Found:", img.src); 

        img.addEventListener("click", () => {
            // console.log("Clicked Image URL:", img.src); 

            // Change background dynamically
            document.body.style.backgroundColor = "#dfebdf"; // Set background color separately
            document.body.style.backgroundImage = `url("${img.src}")`; // Set image separately
            document.body.style.backgroundSize = "cover"; // Ensure it covers the entire screen
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundAttachment = "fixed"; // Keep it fixed
            
            // console.log("Background changed!"); 
            // setTimeout(() => {
                //     console.log("Computed background:", window.getComputedStyle(document.body).backgroundImage);
                // }, 500);
        });
    });
});
    
    
    // 
    // console.log(c);
let randomImgCollection = document.querySelectorAll(".indiImg");
document.querySelector(".set").addEventListener("click",()=>{
    
    // let randomImg = Array.from(randomImgCollection)[c]
    let c = Math.random().toFixed(1)*10
    let randomImg = Array.from(randomImgCollection)[c]
    document.body.style.backgroundColor = "#dfebdf"; // Set background color separately
    document.body.style.backgroundImage = `url("${randomImg.src}")`; // Set image separately
    document.body.style.backgroundSize = "cover"; // Ensure it covers the entire screen
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed"; // Keep it fixed
})
