export interface Product {
    id: number
    name: string
    price: number
    stock: number
}

const Products: Product[] = [
    {
        id: 1,
        name: 'Cookie',
        price: 1.25,
        stock: 20
    },
    {
        id: 2,
        name: 'Milk 1l',
        price: 0.99,
        stock: 10
    },
    {
        id: 3,
        name: 'Water 1l',
        price: 0.30,
        stock: 140
    },
    {
        id: 4,
        name: 'Oil 1l',
        price: 0.45,
        stock: 75
    }
]

export default Products