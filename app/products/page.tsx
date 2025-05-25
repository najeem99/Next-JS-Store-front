import ProductList from "../ProductsList";
import { products } from "../product-data";
export default function ProductsPage() {
    return <div>
        <h1>Products</h1>
        <ProductList products={products}></ProductList>
    </div>
}