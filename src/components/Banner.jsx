import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero mt-11 mb-24 bg-base-300 w-[85%] mx-auto rounded-3xl">
            <div className="hero-content py-16 w-[80%] mx-auto flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/6N3HT30/book9.png" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold mb-11">Books to freshen up your bookshelf</h1>
                    <Link to={'/bookList'} className="btn btn-success">View The List</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;