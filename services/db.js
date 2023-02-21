const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/employee',()=>{
    console.log('mongoDB connection succesfull!!!');
})

const Employee = mongoose.model('Employee',{
 
  id: String,
  name: String,
  email: String,
  photo: String,
  mobile: Number,
  title: String,
  salary: Number,
  
}) 

module.exports = {
    
    Employee
}