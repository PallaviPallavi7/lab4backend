const mongoose=require('mongoose');


  mongoose.connect("mongodb+srv://jaskirat:w05mVuBy0sk4vYNw@liowolf.radtq.mongodb.net/lab3?retryWrites=true&w=majority")
  .then(()=>{console.log('connect')})
  .catch((err)=>{
      console.log(err);
  })

  mongoose.set('debug', true)

  module.exports=mongoose;