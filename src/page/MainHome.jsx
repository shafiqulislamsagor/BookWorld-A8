import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import Cards from '../components/Cards';

const MainHome = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner/>
            <Cards data={data}/>
        </div>
    );
};

export default MainHome;