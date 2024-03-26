import ReadCard from "../components/ReadCard";
import { getStore } from "../components/store";

const Read = () => {
    let readCard = getStore()
    // console.log(readCard);
    return (
        <div>
            {
                readCard.map(array=> <ReadCard key={array.bookId} card={array}/>)
            }
        </div>
    );
};

export default Read;