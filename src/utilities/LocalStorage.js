const addTodb=(id,quentity)=>{
    const exists=localStorage.getItem('shopping_cart');
    let shopping_cart={}
   
    if(!exists){
        shopping_cart[id]= parseInt(quentity);

    }else{

        shopping_cart=JSON.parse(exists);

        if(shopping_cart[id]){
            const newCount=shopping_cart[id]+parseInt(quentity);
            shopping_cart[id]=newCount;
        }else{
            shopping_cart[id]=parseInt(quentity);
        }

    }

    localStorage.setItem('shopping_cart',JSON.stringify(shopping_cart));


}

const removeFromDb=(id)=>{
    const exists=localStorage.getItem('shopping_cart');
    if(!exists){

    }else{
        const shopping_cart=JSON.parse(exists);
        delete shopping_cart[id];

        localStorage.setItem('shopping_cart',JSON.stringify(shopping_cart));

    }

}

const getStoredDb=()=>{
    const exists=localStorage.getItem('shopping_cart');
    return exists? JSON.parse(exists):{};

}

const clearDb=()=>{
    const exists=localStorage.getItem('shopping_cart');
    return exists?localStorage.removeItem(exists):{};
}

export {addTodb,removeFromDb,getStoredDb,clearDb};