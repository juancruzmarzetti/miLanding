import products from "./products";

const customFetch = (time, task, categoryId) => {
    return new Promise((resolve, reject) => {
        const filtrarProductos = task.filter(p => p.category === categoryId);
        setTimeout(() => {
            if(categoryId){resolve(filtrarProductos)}
            else{resolve(products)}
        }, time)
    })
}


export default customFetch;