import { useEffect, useState } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import SigleTag from '../components/SigleTag';
import Loaders from '../components/Loaders';
import { getStore } from '../components/store';
import { toast } from 'react-hot-toast';

const CardPage = () => {
    const { id } = useParams();
    // console.log(id);

    const ready = (cardpage) =>{
        let stored = getStore()
        const findCard = stored.find(card => card.bookId === cardpage.bookId)
        if(findCard){
            return toast.error('existed!! Already Read')
        }
        stored = [...stored,cardpage];
        localStorage.setItem('readCard',JSON.stringify(stored))
        toast.success('Successfully!! Read added')

    }

    const cardData = useLoaderData();
    
    // console.log(cardData);
    const [currentData, setCurrentData] = useState({})
    useEffect(() => {
        const current = cardData.find(data => data.bookId == id);
        setCurrentData(current)
    }, [cardData, id])
    const { author, image, bookName, publisher, rating, review, tags, totalPages, yearOfPublishing, category } = currentData;
    // console.log(tags);
    const loaderPoint = useNavigation();
    if(loaderPoint.state==="loading") return <Loaders/>
    return (
        <div className='flex gap-11 mt-14 w-[82%] mx-auto'>
            <div className='w-[45%] px-20 py-16 bg-base-200 rounded-3xl'><img className='w-full' src={image} alt="" /></div>
            <div className='flex-1'>
                <h1>{bookName}</h1>
                <h2>By: {author}</h2>
                <div className='border border-dashed'></div>
                <h4>{category}</h4>
                <div className='border border-dashed'></div>
                <p><span className="font-bold">Review:</span> {review}</p>
                <h6 className='flex gap-4'>Tag: <div className='flex gap-4'>
                    {tags?.map((tag, idx) => <SigleTag tag={tag} key={idx}></SigleTag>)}
                </div></h6>
                <div className='border border-dashed'></div>
                <div className='flex gap-5 items-center'>
                    <div>
                        <h1>Number of Pages:</h1>
                        <h1>Publisher:</h1>
                        <h1>Year of Publishing:</h1>
                        <h1>Rating:</h1>
                    </div>
                    <div className='text-left'>
                        <h1>{totalPages}</h1>
                        <h1>{publisher}</h1>
                        <h1>{yearOfPublishing}</h1>
                        <h1>{rating}</h1>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <button onClick={()=>ready(currentData)} className='btn btn-outline'>Read</button>
                    <button className='btn btn-info'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default CardPage;