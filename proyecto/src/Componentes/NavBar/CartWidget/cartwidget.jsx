const CartWidget = ({onHandlerClick}) =>{
    return (
        <div onClick={onHandlerClick} className="carrito">
            <p className="carrito-numero">0</p><i className="fa-solid fa-bag-shopping carrito"></i>
        </div>
    )
}

export default CartWidget