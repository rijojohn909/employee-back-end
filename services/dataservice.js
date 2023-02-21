const db = require('./db')

//all-employee
const allEmployee = ()=>{
return db.Employee.find().then(
    (result)=>{
        if(result){
            return{
                statusCode:200,
                employees:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"No data is present"
            }
        }
    }
)
}

// view-employee
const viewemployee = (id)=>{
    return db.Employee.findOne({
         id
     }).then((result)=>{
         if(result){
             return{
                 statusCode:200,
                 employee:result
             }
         }
         else{
             return{
                 statusCode:404,
                 message:"Employee is unavailable"
             }
         }
     })
 }
 
// delete employee api
const deleteemployee= (id)=>{
    return db.Employee.deleteOne({id})
    .then((result)=>{
        if(result){
            // if deletion is successful then get the updated list
            return db.Employee.find().then(
                (result)=>{
            if(result){
            return{
                statusCode:200,
                employeelist:result
            }
            }
                else{
                    return{
                        statusCode:404,
                        message:"employee List is Empty!"
                    }
                }
            })
        }
        else{
            return{
                statusCode:404,
                message:"dish not Found"
            }
        }
    })
}
// saveemployee
const saveemployee = (id,ename, email, photo,mobile,title,salary) => {
    // check id is in mongodb - db.users.findOne()
    return db.Employee.findOne({
        id
    }).then((result) => {
        console.log(result);
        if (result) {
            // if id exists
            return {
                statusCode: 401,
                message: 'Account already exist'
            }
        }
        else {
            // to add new employee
            const newEmployee = new db.Employee({
                id: id,
                name: ename,
                email: email,
                photo: photo,
                mobile: mobile,
                title: title,
                salary: salary
            })
            newEmployee.save()
            return {
                statusCode: 200,
                message: 'NewEmployee Added successful'
            }
        }
    })
}

module.exports = {
    allEmployee,
    viewemployee,
    deleteemployee,
    saveemployee
}