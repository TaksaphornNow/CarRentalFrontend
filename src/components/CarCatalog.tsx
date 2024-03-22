import ProductCard from "./ProductCard";
import Link from "next/link";
import { CarItem, CarJson } from "interface";

export default async function CarCatalog({carJson}:{carJson:CarJson}) {
    const carJsonReady = await carJson
    return (
        <>
        Explore {carJsonReady.count} models in our catalog
        <div style={{margin:"20px", display:"flex", flexDirection:"row",
            alignContent:"space-around", justifyContent:"space-around",flexWrap:"wrap"}}>
                {
                    carJsonReady.data.map((carItem:CarItem)=>(
                        <Link href={`/car/${carItem.id}`} 
                        className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 lg:p-8">
                        <ProductCard carName={carItem.model} imgSrc={carItem.picture}/>
                        </Link>
                        )
                    )
                }
            </div>
        </>
    )
}