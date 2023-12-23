import { useMemo } from "react";
import { useSelector } from "react-redux";
const VisaCard = () => {
    const CartProducts = useSelector(state => state.CartProducts)
    const totalPrice = useMemo(() => {
        let i = 0
        CartProducts.map(e => i += e.count * (e.discount ? e.discount : e.price))
        return i
    }, [CartProducts]);
    const choose = (e) => {
        document.querySelectorAll(".buyingCard").forEach(e => e.style.boxShadow = "0px 0px 0px 1px rgba(0, 0, 0, 0.2)")
        e.currentTarget.style.boxShadow = "0px 0px 0px 1px #6064b6"
    }
    return (
        <div className="VisaCard">
            <h4 style={{ color: "red", textAlign: "center" }}>Fields are inactive</h4>
            <div className="buying-Cards">
                <div className="buyingCard" onClick={choose}>
                    <img src="https://i.ibb.co/vjQCN4y/Visa-Card.png" alt="" />
                    <p>VISA</p>
                </div>
                <div className="buyingCard" onClick={choose}>
                    <img src="https://i.ibb.co/vdbBkgT/mastercard.jpg" alt="" />
                    <p>Mastercard</p>
                </div>
                <div className="buyingCard" onClick={choose}>
                    <img src="https://i.ibb.co/KVF3mr1/paypal.png" alt="" />
                    <p>Paypal</p>
                </div>
                <div className="buyingCard" onClick={choose}>
                    <img src="https://i.ibb.co/wQnrX86/American-Express.jpg" alt="" />
                    <p>AMEX</p>
                </div>
            </div>
            <div className="inputs">
                <label htmlFor="Number">Credit Card Number</label>
                <input type="text" placeholder="enter Card Number" id="Number" />
                <span>
                    <label htmlFor="Month">Ex Month</label>
                    <label htmlFor="year">ex year</label>
                    <label htmlFor="cvv">CVV</label>
                </span>
                <span>
                    <input type="text" placeholder="enter Month" id="Month" />
                    <input type="text" placeholder="enter year" id="year" />
                    <input type="text" placeholder="cvv" id="cvv" />
                </span>
                <label htmlFor="name">name on card</label>
                <input type="text" placeholder="your name" id="name" />
                <input type="button" value={`pay ${totalPrice}$`} />
            </div>
        </div>
    )
}
export default VisaCard
