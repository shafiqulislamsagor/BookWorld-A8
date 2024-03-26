import { useNavigation } from "react-router-dom";
import Loaders from "../components/Loaders";

const Wish = () => {
    const navigation = useNavigation();
    if(navigation.state==='loading') return <Loaders/>
    return (
        <div>
            
        </div>
    );
};

export default Wish;