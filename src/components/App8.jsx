import "./App8.css";
import { useState } from "react";
export default function App7() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const handleSubmit = () => {
    setProducts([...products, product]);
  };
  return (
    <div className="App-Row">
      <div>
        <h3>Registartion Form</h3>
        <p>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) =>
              setProduct({ ...product, quantity: e.target.value })
            }
          ></input>
        </p>
        <p style={{ textAlign: "center" }}>
          <button onClick={handleSubmit}>Submit</button>
        </p>
      </div>
      <div>
        <h4>Items</h4>
        <table border="1">
          {products &&
            products.map((value, index) => (
              <tr>
                <td>{value.name}</td>
                <td>{value.price}</td>
                <td>{value.quantity}</td>
                {/* <td>{value.price*value.quantity}</td> */}
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}