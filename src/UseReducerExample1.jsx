import React, {useReducer} from 'react'

const UseReducerExample1 = () => {
    const initialCartState = {count : 0}

    const reducerCart = (state, action) => {
        switch(action.type){
            case 'addcart' :
                return {count:state.count+1};
            case 'removecart':
                return {count:state.count<=0?0:state.count-1};
            case 'resetcart':
                return initialCartState;
            default:
                return state;
        }
    }

    const [cartSate, dispatchCart] = useReducer(reducerCart, initialCartState);
    return (
        <div>
            <h2>Cart : {cartState.count}</h2>
            <button onClick={() => dispatchCart({type:'addcart'})}>Add to Cart</button>
            <button onClick={() => dispatchCart({type:'removecart'})}>Remove from Cart</button>
            <button onClick={() => dispatchCart({type:'resetcart'})}>Reset Cart</button>
        </div>
    )
}

export default UseReducerExample1
