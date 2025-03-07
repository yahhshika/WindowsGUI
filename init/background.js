const mongoose = require("mongoose");
const bg = require("../models/bg");



main().then(()=>{
    console.log("successfully connected files.js");
    
}).catch(err=>{
    console.log("error in connecting files.js: "+err);
    
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/newWindowsGUI")
}




let bgs = [
    {
      url: 'https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      index: 1,
      __v: 0
    },
    {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      index: 2,
      __v: 0
    },
    {
      url: 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      index: 3,
      __v: 0
    },
    {
      url: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      index: 4,
      __v: 0
    },
    {
      url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      index: 5,
      __v: 0
    },
    {
      url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      index: 6,
      __v: 0
    },
    {
      url: 'https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      index: 7,
      __v: 0
    },
    {
      url: 'https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      index: 8,
      __v: 0
    },
    {
      url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2113&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      index: 9,
      __v: 0
    },
    {
      url: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      index: 10,
      __v: 0
    },
    {
      url: 'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      index: 11,
      __v: 0
    },
    {
      
      url: 'https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      index: 12,
      __v: 0
    },
    {
    
      url: 'https://images.unsplash.com/photo-1433477155337-9aea4e790195?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      index: 13,
      __v: 0
    },
    {
     
      url: 'https://images.unsplash.com/photo-1502786129293-79981df4e689?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      index: 14,
      __v: 0
    }
]

bg.insertMany(bgs).then(res=>{
    console.log(res);
    
}).catch(err=>{
    console.log("error in inserting background.js: ",err);
    
})