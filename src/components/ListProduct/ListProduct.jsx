import { listProduct } from "../../assets/fakedata"
import ProductItem from "./ProductItem"

const ListProduct = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[20px] px-[20px] py-[30px] bg-[#2f2f2f]">
            {
                listProduct.map((product, index) => (
                    <ProductItem product = {product} key={index} ProductBottom = {index === listProduct.length - 1} />
                ))
            }
        </div>
    )
}

export default ListProduct
