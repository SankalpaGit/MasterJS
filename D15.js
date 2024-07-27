// cLOUSER IN JAVASCRIPT

function outer(){ //accessing the outer function variables from inner functions
    const name= 'Sankalpa'

    return function inner(){
        console.log(name)   // this is the variable of the outer function
    }
}

const inner= outer()
inner()

//=====================================================================

function counter() {
    let counter = 0;
    return {
        increment() {
            counter += 1;
        },
        getCounter() {
            return counter;
        }
    };
}

const myCounter = counter(); 
myCounter.increment();
console.log(myCounter.getCounter());

//=====================================================================

function createIDGenerator() {
    let lastID = 0;
    return function() {
      lastID++;
      return lastID;
    };
  }
  
  const generateID = createIDGenerator();
  console.log(generateID()); 

//============================================================================

//Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

function createFunctionArray(){
    const functions = [];
    for (let i = 0; i < 5; i++) {
        functions.push(
            (function(index){
                return function(){
                    console.log('checked');
                    console.log(index);
                }
            })(i) // Immediately invoke with the current value of i
        );
    }
    return functions;
}

const funcs = createFunctionArray();
funcs[0](); // This will correctly print 'checked' and 0
