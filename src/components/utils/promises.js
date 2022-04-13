
let itsOkay = true;

const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(itsOkay)resolve(task)
            else{reject("error")}
        }, time)
    })
}


export default customFetch;