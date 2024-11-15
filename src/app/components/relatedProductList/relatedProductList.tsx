'use client';

import useFetch from "@/app/hooks/useFetch";
import ProductCard from "../productCard/ProductCard";
import { Product } from "@/app/interfaces/product.interface";

export default function RelatedProductList({ category }: { category: string }) {
    const { data, loading, error } = useFetch(`https://fakestoreapi.com/products/category/${category}?limit=3`);
    const products: Product[] = data as any;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <h2>Related Products</h2>
            <div className="p-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products?.map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </>
    )
}