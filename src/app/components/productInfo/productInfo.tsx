'use client';

import { Product } from "@/app/interfaces/product.interface";
import RatingComponent from "../rating/rating";
import useFetch from "@/app/hooks/useFetch";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function ProductInfo() {
    const productId = usePathname().split('/').at(-1);

    const { data, loading, error } = useFetch(`https://fakestoreapi.com/products/${productId}`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const product: Product = data as any;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    const { title, description, price, rating, image } = product;
    return (
        <>
            <div style={{ width: '350px', height: '500px' }}>
                <Image src={image} width={450} height={500} alt={title} style={{ objectFit: 'fill', width: '100%', height: '100%' }} />
            </div>
            <div>
                <RatingComponent rating={rating} />
                <h2>{title}</h2>
                <h3>{description}</h3>
                <h3>{price}$</h3>
            </div>
        </>
    )
}