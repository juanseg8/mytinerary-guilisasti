
const verifyDataClient = ( req, res, next) => {
    
let {name, lastName, age} = req.body

// if(!name|| !lastName || age){
//     return res.status(400).json({
//         message: "Invalid data"
//     })
// }

if(name == ""){
    return res.status(400).json({
        message: "Invalid name"
    })
}

if(lastName == ""){
    return res.status(400).json({
        message: "Invalid lastname"
    })
}

if(age == 0){
    return res.status(400).json({
        message: "Invalid age"
    })
}

next()

}

module.exports = {
    verifyDataClient
}