import ReadCard from "../components/ReadCard";
import { getStore } from "../components/store";
import { ActionClick } from './Sort';

const Read = () => {
    let readCard = ActionClick() || getStore()
    // console.log(readCard);
    return (
        <div className="mb-7 mt-3">
            {
                readCard.map(array=> <ReadCard key={array.bookId} card={array}/>)
            }
        </div>
    );
};

export default Read;