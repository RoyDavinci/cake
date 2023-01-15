import React from 'react'

const Cartt = ({cartItems}) => {
  return (
    <div>
        <div>Cart Items</div>
    

    {cartItems.length === 0 && (
        <div>No items are added. </div>
    )} 

    <div>
        {cartItems.map((cake) => (
            <div key={cake.id}>
                <img src={cake.url}
                alt={cake.name}/>
            </div>
        ))}
    </div>
    </div>
  );
};

export default Cartt