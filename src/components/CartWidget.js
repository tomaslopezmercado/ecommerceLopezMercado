import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartWidget = () => {
    const icono = <FontAwesomeIcon icon={faShoppingCart}/>

    return(
        <div>
            {icono}        
        </div>
    )
}

export default CartWidget;