import NotfoundPage from "@/app/not-found";
import { products } from "@/app/product-data"
import Image from "next/image";
//Dynamic APIs are Asynchronous
//https://nextjs.org/docs/messages/sync-dynamic-apis

export default async function ProductDetailPage({ params }: { params: { id: string } }) {

    const { id } = await params;
    const product = products.find((pd) => { return pd.id == id });

    if (!product) {
        return <NotfoundPage />
    }

    return (
        <div className="container min-h-screen flex flex-col md:flex-row">
            <div className="relative min-h-full-md w-1/2 md:w-1/2 mv-xl mx-2 ">
                <Image className="object-contain rounded-2xl " src={'/' + product!.imageUrl} alt={"product" + product!.name} fill />
            </div>
            <div className="relative w-3xs w-1/2 md:w-1/2 m-auto mx-2 ">
                <h1 className="text-4xl text-amber-600  font-bold mb-4" >{product!.name}</h1>
                <p>AED {product!.price}</p>
                <h3>{product!.description}</h3>
            </div>
        </div>
    )
}