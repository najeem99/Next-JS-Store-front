'use client';

import { useState } from "react"
import { products } from "../product-data"
import Image from "next/image";
import Link from "next/link";
export default function CartPage() {

    const [cartItems] = useState(['123', '234'])
    const cartProducts = cartItems.map(id => {return products.find(p => p.id == id)!});

    return (
        <>
            <h1>Shopping Cart</h1>
            {cartProducts && cartProducts.map(item => (
                <Link key={item.id} href={`/products/${item.id}`} >
                    <Image src={'/' + item.imageUrl} alt={"product" + item.name}
                        width={100}
                        height={100}
                    />
                    <h2>{item.name}</h2>
                    <h3>AED {item.price}</h3>
                </Link>
            ))}
        </>
    )
}