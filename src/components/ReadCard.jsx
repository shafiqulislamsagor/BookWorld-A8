/* eslint-disable no-unused-vars */
import SigleTag from './SigleTag';
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ReadCard = ({ card }) => {
    const { author, image, bookName,bookId, publisher, rating, review, tags, totalPages, yearOfPublishing, category } = card;
    return (
        <div className='flex gap-4 p-5 border mt-3 rounded-lg'>
            <div><img className='h-44' src={image} alt="" /></div>
            <div>
                <h2>{bookName}</h2>
                <h2>By: {author}</h2>
                <div className='flex gap-9 items-center'>
                    <h2 className='flex gap-3'>Tags: <div className="flex gap-4 items-center">
                        {
                            tags.map((tag, idx) => <SigleTag tag={tag} key={idx} />)
                        }
                    </div></h2>
                    <div className='flex gap-3 items-center'>
                        <IoLocationSharp />
                        <h2>Year of Publishing: {yearOfPublishing}</h2>
                    </div>
                </div>
                <div className='border border-dashed'></div>
                <div className='flex gap-10'>
                    <h2>Category: {category}</h2>
                    <h2>Rating: {rating}</h2>
                    <Link to={`/card/${bookId}`}>Details</Link>
                </div>
            </div>
        </div>
    );
};

ReadCard.propTypes = {
    card:PropTypes.object.isRequired,
};

export default ReadCard;