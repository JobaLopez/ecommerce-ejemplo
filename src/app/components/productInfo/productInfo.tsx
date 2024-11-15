import { Rating } from "@/app/interfaces/product.interface";
import RatingComponent from "../rating/rating";

export default function ProductInfo({ image, title, description, price, rating }: { image: string, title: string, description: string, price: number, rating: Rating }) {
    return (
        <>
            <div style={{width: '350px', height: '500px'}}>
                <img src={image} alt={title} style={{objectFit: 'fill', width: '100%', height: '100%'}} />
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