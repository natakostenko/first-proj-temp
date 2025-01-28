import { useState } from "react";
import { useAuthContext } from "../../context/auth/useAuthContext";

const AdminBar = () => {
    const context = useAuthContext();
    const {user} = context.stateData;

    if (!user) return null;

    const [title, setTitle] = useState("");
    const [descr, setDescr] = useState("");
    const [price, setPrice] = useState("");

    const handleAddProduct = () => {
        if (!title || !price) {
            alert("Please fill out the title and price.");
            return;
        }

        const newProduct = {
            title,
            descr,
            price: parseInt(price),
        };

        fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });
    };

    return (
        <div className="admin-bar">
            <h3>Add new product</h3>
            <div className="input-prod">
                <input
                    id="title"
                    type="text"
                    className="input-title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    id="descr"
                    className="input-descr"
                    placeholder="Description"
                    value={descr}
                    onChange={(e) => setDescr(e.target.value)}
                />
                <input
                    id="price"
                    type="number"
                    className="input-price"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <button
                className="add-prod"
                onClick={handleAddProduct}
            >
                ADD
            </button>
        </div>
    )
}

export default AdminBar;