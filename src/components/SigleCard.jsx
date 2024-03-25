/* eslint-disable no-unused-vars */
import { IoMdStarOutline } from "react-icons/io";
import SigleTag from "./SigleTag";
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';

const SigleCard = ({Card}) => {
    // console.log(Card);
    const {author,image,bookId,bookName,publisher,rating,review,tags,totalPages,yearOfPublishing,category} = Card;
    const tagsAll = tags;
    return (
        <Link  to={`/card/${bookId}`}>
        <div className="border rounded-2xl p-6">
            <div className="h-56 py-8 w-full"><img className="h-full mx-auto" src={image} alt="" /></div>
            <div className="flex gap-4">
                {
                    tagsAll.map((tag,idx) => <SigleTag tag={tag} key={idx}/>)
                }
            </div>
            <h2>{bookName}</h2>
            <p>By: {author}</p>
            <div className="border border-dashed"></div>
            <div className="flex justify-between">
                <h2>{category}</h2>
                <div className="flex gap-2 items-center">
                    <h2>{rating}</h2>
                    <IoMdStarOutline />
                </div>
            </div>
        </div>
        </Link>
    );
};

SigleCard.propTypes = {
    Card:PropTypes.object.isRequired,
};

export default SigleCard;