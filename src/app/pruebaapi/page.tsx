import { Metadata, ResolvingMetadata } from "next";
import ComponentePrueba from "../components/prueba/componenteprueba";

type Props = {
    params: Promise<{ id: string }>
}


export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    // read route params
    const id = (await params).id
    console.log('id', id);
    // fetch data
    // const product = await fetch(`https://.../${id}`).then((res) => res.json())

    // // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []

    return {
        title: 'product.title',
    }
}

export default function Page({ params }: Props) {
    generateMetadata({params});

    return (
        <ComponentePrueba />
    )

}