import { useLoaderData } from "react-router-dom";
import SigleCard from "./SigleCard";

const Cards = () => {
    const data = useLoaderData();
    return (
        <>
        <div className="w-[85%] mx-auto mb-14">
            <h2 className="text-center">Books Store</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    data.map((card,idx) => <SigleCard Card={card} key={idx}></SigleCard>)
                }
            </div>
        </div>
        </>
    );
};

export default Cards;