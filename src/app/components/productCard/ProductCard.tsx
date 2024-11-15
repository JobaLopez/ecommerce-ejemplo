import { Product } from "@/app/interfaces/product.interface";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
    const { image, title, description, price } = product;
    return (
        <Link href={`/product/${product.id}`} className="bg-white dark:bg-slate-900 hover:scale-110 transition-all shadow-md rounded-lg p-4">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-gray-500">{description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <p className="text-lg font-semibold">{`${price}$`}</p>
                    <button className="bg-gray-800 hover:bg-gray-700 dark:bg-gray-200 dark:text-neutral-900 dark:hover:bg-gray-400 text-white px-4 py-2 rounded-lg">
                        Add to cart
                    </button>
                </div>
            </div>
        </Link>
    );
}