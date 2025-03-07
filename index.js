const express = require("express");
const app = express();
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path")

const bg = require("./models/bg");
const note = require("./models/notefiles");


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,"/public")));

app.set('view engine','ejs');
app.set("views",path.join(__dirname,"/views"));


main().then(res=>{
    console.log("success");
    
}).catch(err=>{
    console.log("error:"+err);
    
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/newWindowsGUI');
}

const port = 8080;

// test server
app.listen(port,()=>{
    console.log("listening");
    
})
app.get("/",async(req,res)=>{
    let images = await bg.find().sort({index:1});
    let notes = await note.find().sort({createdAt:-1});

    // console.log(images);
    
    res.render("home.ejs",{images, notes});
})
app.post("/new/file",async(req,res)=>{
    let {name, msg} = req.body;
    let exists = await note.exists({name:`${name}`});
    try{

        if(exists){
            await note.findOneAndUpdate({name: `${name}`},{msg:`${msg}`, createdAt: new Date()})
        }
        else{
            let notenew = new note({
                name: `${name}`,
                msg:`${msg}`,
                createdAt: new Date()
            })
            await notenew.save().then(res=>{
                console.log(res);
                
            }).catch(err=>{
                console.log("error in inserting a nre note: ",err);
                
            })
    
        }
    }
    catch (error) {
        console.log("error: ",error);
        
        
    }
    res.redirect("/");
    

})
app.delete("/delete/:id",async(req,res)=>{
    let {id} = req.params;
    await note.deleteOne({_id:`${id}`}).then(()=>{
        console.log("successfully deleted");
        
    }).catch(err=>{
        console.log("error in deletion: "+err);
        
    })
    res.redirect("/")
})