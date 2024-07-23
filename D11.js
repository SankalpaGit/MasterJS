//Promises in the javascript

//Activity 1: Understanding the promise

const see= new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('activity 1: promise is successfully fulfilled') //for resolve and reject use the necessary
        reject('promise is rejected')
    },1000)
});

see.then((messege) =>{
    console.log(messege)
})
.catch((err) =>{
    console.log(err)
});

//Activity 2: chaining promises

const fetchData= (data,time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`find ${data}`);
            resolve(data);
        },time)
    })
};
//chain the promise 
fetchData('username: adam',1000)
    .then(()=>fetchData('username: harry', 1000))
    .then(()=>fetchData('username: sankalpa', 1000))
    .then(()=>{
        console.log('user fetching successfully completed..');
    })
    .catch((err) =>{
        console.log(err);
    });

//Activity 3: async function in promise

async function handleReolve(promise){
    console.log('resolve message:', await promise)
}
handleReolve(
    new Promise((resolve) =>{
        resolve('the promis is resolve for handling ')
    }
))

async function handleRejection(promise){
    try {
        console.log('reject message:', await promise)
    } catch (error) {
        console.error('reject message', error)
    }
}

handleRejection(
    new Promise((resolve, reject) =>{
        reject('the promise is rejected')
    }
));


function fetchWithPromise(url){
    fetch(url)
        .then((response) =>response.json())
        .then((data) => console.log(data))
}
fetchWithPromise('https://jsonplaceholder.typicode.com/users')


async function fetchWithAsync(url){
    try {
        const response = await fetch(url)
        if (!response.ok){
            throw new Error('error while fetching')
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

fetchWithAsync('https://jsonplaceholder.typicode.com/users')