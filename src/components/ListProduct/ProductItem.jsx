
const ProductItem = ({product, ProductBottom}) => {
    return (
        <div className= {`relative ${ProductBottom ? '' : 'mb-[20px]'} md:mb-0 cursor-pointer hover:opacity-50 transition-all duration-150 ease-in`}>
            <h2 className='text-[18px] my-[10px] text-white font-semibold capitalize'>{product.title}</h2>
            <p 
                className='absolute left-1/2 translate-x-[-50%] top-[30%] md:top-[55%] md:translate-y-[-50%] text-[#ffffff] text-[20px] w-full text-center' 
                dangerouslySetInnerHTML={{__html: product.text_content}}
            ></p>
            <div className=''>
                <img src= {product.img} alt="imgproduct" className='rounded-[40px] w-full'/>
            </div>
        </div>
    )
}

export default ProductItem
