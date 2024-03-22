import Image from "next/image"
import getCar from "@/libs/getCar"
import Link from "next/link"

export default async function CarDetailPage({params}:{params: {cid:string}}) {
    const CarDetail = await getCar(params.cid)
    /**
     * Mock Data for Demonstration Only
     */
    /*const mockCarRepo = new Map()
    mockCarRepo.set("001",{name:"Honda Civic", image:"/img/civic.jpg"})
    mockCarRepo.set("002",{name:"Honda Accord", image:"/img/accord.jpg"})
    mockCarRepo.set("003",{name:"Toyota Fortuner", image:"/img/fortuner.jpg"})
    mockCarRepo.set("004",{name:"Tesla Model 3", image:"/img/tesla.jpg"})
    */
    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">{CarDetail.data.model}</h1>
            <div className="flex flex-row my-5">
                <Image src={CarDetail.data.picture}
                alt='Product Picture'
                width={0} height={0} sizes="100vm"
                className="rounded-lg w-[30%] bg-black"/>
                <div className="text-md mx-5 text-left">{CarDetail.data.description}
                <div>Doors: {CarDetail.data.doors}</div>
                <div>Seats: {CarDetail.data.seats}</div>
                <div>Large Bags: {CarDetail.data.largebags}</div>
                <div>Small Bags: {CarDetail.data.smallbags}</div>                
                <div>Daily Rental Rate: {CarDetail.data.dayRate} (insurance included)</div>
                
                <Link href={`/reservations?id=${params.cid}&model=${CarDetail.data.model}`}>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white">
                Make Reservation</button>
                </Link>
                </div>

            </div>
        </main>
    )
}
export async function generateStaticParams() {
    return [{cid:'001'},{cid:'002'},{cid:'003'},{cid:'004'}]
}
