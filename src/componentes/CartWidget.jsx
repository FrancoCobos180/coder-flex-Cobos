const CartWidget = () => {
    const itemCount = 3;
    return(
        <div className="cart-widget">
             
             <img src="/carrito.jpg" alt="Carrito" width="30" />
             {itemCount > 0 && (
        <span className="cart-count">{itemCount}</span>
      )}
            
        </div>

    )
}
export default CartWidget