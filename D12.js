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
            throw new Error(`${b} is 0 so it cant devide`)
        }
        console.log(b, 'is zero')
    } catch (error) {
        console.log("Trying to divide by zero")
    }
    finally{
        console.log("please remember that");
    }
}
divider(5,0)

//Using fetch api and handeling it 

