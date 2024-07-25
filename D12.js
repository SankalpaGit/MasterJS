//Erro Handeling in javascript

//Handeling using try catch in javascript

function errorChecker(){
    try {
        throw new Error
    } catch (error) {
        console.log("this is the error that is created intentioanlly")
    }
}
errorChecker()

//using try catch and finally to handle

function divider(a,b) {
    try {
        if (b==0) {
            throw new Error(`${b} cantbe used as denominator`)
        }
        console.log(b, 'is zero')
    } catch (error) {
        console.log("You are trying to divide by zero")
    }
    finally{
        console.log("Attempting to divide by zero");
    }
}
divider(5,0)

class customError extends Error{
    constructor(message, code){
        super(message)
        this.name= this.constructor.name;
        this.code= code;
    }
}
function throwInstance(){
    let success = false;
    if (!success){
        throw new customError("Instance error: " )
    }
}

try {
    console.log(throwInstance());
} catch (error) {
    if (error instanceof CustomError) {
        console.log(error.message)
    }
    else{
        console.error("Unexpected error: " + error)
    }
}