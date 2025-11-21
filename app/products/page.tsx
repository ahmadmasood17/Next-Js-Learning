
import Link from 'next/link'
const Products = () => {

    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 150 },
        { id: 3, name: 'Product 3', price: 200 }
    ]

    return (
        <div className='max-w-3xl mx-auto'>
            <h1 className='font-bold text-3xl my-3'>Products</h1>
            <div className='grid grid-cols-3 gap-5  ' >
                {products.map(product => (
                    <div className='border-[1px] rounded-xl p-3 flex flex-col items-center gap-2' key={product.id}>
                        <h2 className='font-medium text-2xl'>{product.name}</h2>
                        <p className='mb-2 text-amber-200'>${product.price}</p> 
                        <Link href={`products/${product.id}`} className='bg-sky-400 text-center p-2 rounded-xl '>View Product {product.id}</Link>
                    </div>
                    
                ))}
            </div>

            
        </div>
    )
}

export default Products