import React from 'react';

 function MiniCartShop(){
    const[username, setUsername] = React.useState("");
    const[password, setPassword] = React.useState("");
    const[cartItems, setCartItems] = React.useState([]);
    const[totalPrice, setTotalPrice] = React.useState(0);
    const[loggedIn, setLoggedIn] = React.useState(false);

    const users=["hazel principe", "Kol", "Tay", "Pu"];
    const passwords = ["uglyduck","chicken","fiesta","scissor"];

    const items = [ 
        {name: "Nike Shoes", price: 300},
        {name: "Nike Shirt", price:150},
        {name: "Red USB", price:20},
    ];

    function handelogin(e){
        e.preventDefault();
      const userIndex = users.indexOf(username);
if (userIndex !== -1 && passwords[userIndex] === password) {
    console.log(`Logged in with username: ${username}`);
    setLoggedIn(true);

        } else {
            alert("Opps! You are not a member of this cartshop");
        }
    }
    function addToCart(item){
        setCartItems((prevCartItems)=>[...prevCartItems, item]);
        setTotalPrice((prevTotalPrice)=> prevTotalPrice+ item.price);

    }
    return (
        <div>
        {loggedIn ? (
            <div>
                <h1>Welcome,{username}!</h1>
                <h2>Item for Sale</h2>
                <ul>
                    {items.map((item,index) =>(
                        <li key={index}>
                            {item.name} -${item.price}
                            <button onClick={() => addToCart(item)}>Add to Cart</button>
                        </li>

                    ))}

                </ul>

                <h2>Cart</h2>
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>{item.name}-${item.price}</li>
                    )
                    )}
                </ul>

                <h2>Total: ${totalPrice}</h2>
                </div>
  ):(
    <form onSubmit={handelogin}>
        <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>

        </label>
        <br/>
        <label>
            Password:
            <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>

        </label>
        <br/>
        <button type="submit">Login</button>
    </form>

        )}
    </div>
    );
}


export default MiniCartShop;