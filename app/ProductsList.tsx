import Image from "next/image";
import { Product } from "./product-data";
import Link from "next/link";

export default function ProductList({ products }: { products: Product[] }) {

    return (
        <div className="container flex flex-row">
            {products.map((product) => {
                return (
                    <div className="border-1 border-gray-300 shadow-2xl m-2 rounded-2xl p-3 w-fit h-full">
                        <Link className="h-full" key={product.id} href={`/products/${product.id}`} >
                            <div className="relative min-h-[100px] w-[100px]"  >
                            <Image className="object-cover rounded-2xl" src={'/' + product.imageUrl} alt={"product" + product.name} fill />
                            </div>
                            <h2>{product.name}</h2>
                            <h3>AED {product.price}</h3>
                        </Link>
                    </div>

                )
            })
            }
        </div>)
}