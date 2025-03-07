const mongoose = require("mongoose");
const note = require("../models/notefiles.js");


main().then(()=>{
    console.log("successfully connected files.js");
    
}).catch(err=>{
    console.log("error in connecting files.js: "+err);
    
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/newWindowsGUI")
}

let files = [
    {
        name: "Nature's Beauty",
        msg:"The beauty of nature is truly mesmerizing. From the towering mountains that touch the sky to the vast oceans that stretch beyond the horizon, every element of nature has its own unique charm. The sound of birds chirping,",
        createdAt: new Date()
    },
    {
        name: "Power Of Dreams",
        msg:"Dreams have the power to shape our destiny. They ignite passion, fuel determination, and inspire us to push beyond our limits. Every great achievement in history started as a mere dream in someone’s mind. Whether it’s inventing something new, exploring the unknown, or making the world a better place, dreams are what drive humanity forward. The key to success lies in believing in your dreams and working tirelessly to turn them into reality.",
        createdAt: new Date()
    },
    {
        name: "Technology And The Future",
        msg:"Technology is advancing at an unprecedented pace, transforming the way we live, work, and communicate. From artificial intelligence to space exploration, innovations are shaping the future in ways we once thought impossible. The rise of automation and smart devices has made life more convenient, yet it also presents challenges such as cybersecurity risks and ethical dilemmas. As we embrace the future, it’s essential to use technology responsibly to create a better world for future generations.",
        createdAt: new Date()
    },
    {
        name: "The Importance of Kindness",
        msg:"Kindness is a simple yet powerful act that has the ability to brighten someone's day. A small gesture, like a smile or a kind word, can make a big difference in someone’s life. In a world that often feels fast-paced and stressful, being kind creates a ripple effect, inspiring others to do the same. It costs nothing but has an immeasurable impact. Practicing kindness daily can lead to a more compassionate and understanding society.",
        createdAt: new Date()
    },
    {
        name: "The Magic of Books",
        msg:"Books are a gateway to different worlds, filled with knowledge, adventure, and imagination. They allow us to travel through time, experience different cultures, and gain new perspectives. Whether it’s fiction, history, science, or philosophy, every book offers something valuable. The more we read, the more we grow. A good book not only entertains but also enlightens, making us wiser and more empathetic individuals.",
        createdAt: new Date()
    },

]
note.insertMany(files).then(res=>{
    console.log(res);
    
}).catch(err=>{
    console.log("error in files.js: ",err);
    
})