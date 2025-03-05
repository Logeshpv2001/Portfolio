console.log("hi")

function newPromise(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
              res("Hi from newPromise")
        },3000)
    })
}

newPromise().then((res)=>console.log(res)).catch((err)=>console.log(err))

console.log("hey")