import productos from './../data/product';

export default function getItems() {
    const products = productos;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

export function getSingleItems(idParams) {
    const products = productos;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let itemRequested = products.find(
                (item)=> item.id === Number(idParams)
            );

            if (itemRequested) {
                resolve(itemRequested)
            } else {
                reject(new Error('El item no existe'))
            }

        }, 100)
    })
}

export function getItemsByCategory(categoryId) {
    const products = productos;
    return new Promise((resolve) => {
        setTimeout(() => {
            let itemRequested = products.filter( item => item.category === categoryId)
            resolve(itemRequested)
        }, 100)
    })
}