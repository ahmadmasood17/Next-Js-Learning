
import Link from 'next/link'


const Products = () => {

    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 150 },
        { id: 3, name: 'Product 3', price: 200 }
    ]


    return (
        <div className='max-w-xl mx-auto'>
            <h1 className='font-bold text-3xl mb-3'>Products</h1>
            <div className='grid grid-cols-3 gap-5  ' >
                {products.map(product => (
                    <div className='border-2 rounded-2xl p-3' key={product.id}>
                        {product.name}
                        <p className='mb-2'>${product.price}</p> 
                        <Link href={`products/${product.id}`} className='bg-sky-400 p-2 rounded-2xl '>View Product</Link>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default Products