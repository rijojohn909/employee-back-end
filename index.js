
const express = require('express')
const cors = require('cors')
const dataService = require('./services/dataservice')

const server = express()
server.use(cors({
    origin:'http://localhost:4200'
}))
server.use(express.json())

server.listen(3000,()=>{
    console.log('cart server is listening at port number 3000');
})

//all employee api
server.get('/all-employees',(req,res)=>{
    
dataService.allEmployee().then((result)=>{
    res.status(result.statusCode).json(result)
    
})
})
  // view-employee api 
  server.get('/view-employee/:empId',(req,res)=>{
    dataService.viewemployee(req.params.empId)
        .then((result)=>{
            res.status(result.statusCode).json(result)
        })
    })
    // remove-employee- api
server.delete('/removeemployee/:employeeId',(req,res)=>{
    dataService.deleteemployee(req.params.employeeId)
        .then((result)=>{
            res.status(result.statusCode).json(result)
        })
    })
    // saveemployee api call
server.post('/saveemployee', (req, res) => {
    console.log('Inside register function');
    console.log(req.body);
    // asynchronous
    dataService.saveemployee(req.body.id, req.body.ename, req.body.email, req.body.photo, req.body.mobile, req.body.title, req.body.salary )
        .then((result) => {
            res.status(result.statusCode).json(result)
        })
})
    