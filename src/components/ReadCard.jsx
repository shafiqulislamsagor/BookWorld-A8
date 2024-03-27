/* eslint-disable no-unused-vars */
import { IoPersonOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import SigleTag from './SigleTag';
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ReadCard = ({ card }) => {
    const { author, image, bookName,bookId, publisher, rating, review, tags, totalPages, yearOfPublishing, category } = card;
    return (
        <div className='flex gap-4 p-5 border mt-3 rounded-lg'>
            <div className='w-56 flex items-center bg-[#F3F3F3] rounded-lg'><img className='h-44 mx-auto' src={image} alt="" /></div>
            <div className='flex-1'>
                <h2 className='displayed text-2xl font-bold blacked'>{bookName}</h2>
                <h2 className='work text-base font-medium blacked mt-4 mb-6'>By: {author}</h2>
                <div className='flex gap-9 items-center mb-5'>
                    <h2 className='flex items-center gap-3'><span className='work font-bold'>Tags:</span> <div className="flex gap-4 items-center">
                        {
                            tags.map((tag, idx) => <SigleTag tag={tag} key={idx} />)
                        }
                    </div></h2>
                    <div className='flex gap-3 items-center'>
                        <IoLocationSharp />
                        <h2>Year of Publishing: {yearOfPublishing}</h2>
                    </div>
                </div>
                <div className='flex gap-8 text-[#13131399] work'>
                    <div className="flex items-center gap-2">
                        <IoPersonOutline/>
                        <h2>Publisher: {publisher}</h2>
                    </div>
                    <div className="flex items-center gap-2">
                    <RiPagesLine />
                    <h2>Page: {totalPages}</h2>
                    </div>
                </div>
                <div className='border border-dashed my-4'></div>
                <div className='flex gap-10'>
                    <h2 className='border py-1 px-2 rounded-2xl text-[#328EFF] bg-[#328EFF26]'>Category: {category}</h2>
                    <h2 className='border py-1 px-2 rounded-2xl text-[#FFAC33] bg-[#FFAC3326]'>Rating: {rating}</h2>
                    <Link className='border py-1 px-2 bg-[#23BE0A] text-white rounded-2xl' to={`/card/${bookId}`}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

ReadCard.propTypes = {
    card:PropTypes.object.isRequired,
};

export default ReadCard;