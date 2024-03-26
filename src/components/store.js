export const getStore = () =>{
    let readCard = [];
    const localStore = localStorage.getItem('readCard')
    if(localStore){
        readCard = JSON.parse(localStore)
    }
    return readCard;
}

