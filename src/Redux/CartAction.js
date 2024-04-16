const AddToCart = () => {
    return {
        type:'ADD_TO_CART'
    };
}
const RemoveToCart=()=>{
    return{
        type:'REMOVE_FROM_CART'
    }
}
 
export default AddToCart ;
export {RemoveToCart};