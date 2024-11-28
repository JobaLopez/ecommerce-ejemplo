/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import useFetch from "@/app/hooks/useFetch";

export default function ComponentePrueba() {
    const { data, loading, error } = useFetch("https://pruebaback-qdui.onrender.com/products");

    const products = data as any;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            {

               products && products.map((product: any) => (
                    <div key={product.id}>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                ))
            }

        </>
    )

}