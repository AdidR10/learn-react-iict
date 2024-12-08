import React from 'react';

function ShoppingComponent(props) {
    const [item, setItem] = React.useState("");
    const Show = (itemm) => {
        // console.log(itemm);  
        setItem(itemm);
    };
    const lame = () => {
        Show("bag");
    }
    // const bagShow = () => {
    //     setItem("bag");
    // };
    // const shirtShow = () => {
    //     setItem("shirt");
    // };
    // const ThreepieceShow = () => {
    //     setItem("threepiece");
    // };

    const products = props.arrProd;
    const [totalBill, setTotalBill] = React.useState(0);
    const [discount, setDiscount] = React.useState(0);
    const addToCart = (product) => {
        setTotalBill(prevTotalBill => prevTotalBill + product.price);
        setDiscount(product.discount);
    }
    return (
        <div>
            <button onClick={lame}>bag</button>
            <button onClick={() => Show("shirt")}>shirt</button>
            <button onClick={() => Show("three piece")}>three piece</button>
            <div>
                {products.filter(product => product.product_tag === item).map(filteredProduct => (
                    <div key={filteredProduct.product_id}>
                        <p>{filteredProduct.product_name}</p>
                        <button onClick={() => addToCart(filteredProduct)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <h1>Total Bill: {totalBill.toFixed(2)}</h1>
            <h1>Payable Bill: {(totalBill * (1.0 - (discount / 100.0))).toFixed(2)}</h1>
        </div>
    )
}

export default ShoppingComponent