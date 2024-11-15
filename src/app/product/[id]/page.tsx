'use client';

import ProductInfo from "@/app/components/productInfo/productInfo";
import RelatedProductList from "@/app/components/relatedProductList/relatedProductList";
import useFetch from "@/app/hooks/useFetch";
import { Product } from "@/app/interfaces/product.interface";
import { usePathname } from "next/navigation";

export default function Home() {
    const productId = usePathname().split('/').at(-1);
    const { data, loading, error } = useFetch(`https://fakestoreapi.com/products/${productId}`);
    const product: Product = data as any;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <ProductInfo 
                image={product.image} 
                title={product.title} 
                description={product.description} 
                price={product.price} 
                rating={product.rating} />
            <RelatedProductList category={product.category} />
        </>
    )
}