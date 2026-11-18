const express=require('express');
const PORT=3000;
const app=express();
app.get('/',(req,res)=>{
res.send("PRogram -6");
});
app.listen(PORT,()=>{
console.log(`server is running at http://localhost:${PORT}`);
});
