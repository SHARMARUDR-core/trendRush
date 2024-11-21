import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
let navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        zipCode: "",
        paymentMethod: "cash", // Default to cash
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Checkout Details:", formData);
        alert("Checkout successful!");
        navigate('/orderSuccess')
    };

    return (
        <div style={styles.container}>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </label>
                <label style={styles.label}>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </label>
                <div style={styles.addressContainer}>
                    <label style={{ ...styles.label, flex: 3 }}>
                        Address:
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            style={styles.textarea}
                            required
                        />
                    </label>
                    <label style={{ ...styles.label, flex: 1, marginLeft: "10px" }}>
                        Zip Code:
                        <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            style={styles.input}
                            maxLength="6"
                            required
                        />
                    </label>
                </div>
                <label style={styles.label}>
                    Payment Method:
                    <select
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    >
                        <option value="cash">Cash</option>
                        <option value="card">Card</option>
                    </select>
                </label>

                {/* Conditionally render card details if payment method is "card" */}
                {formData.paymentMethod === "card" && (
                    <>
                        <label style={styles.label}>
                            Card Number:
                            <input
                                type="text"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                style={styles.input}
                                maxLength="16"
                                required
                            />
                        </label>
                        <label style={styles.label}>
                            Expiry Date:
                            <input
                                type="month"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleChange}
                                style={styles.input}
                                required
                            />
                        </label>
                        <label style={styles.label}>
                            CVV:
                            <input
                                type="password"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                style={styles.input}
                                maxLength="3"
                                required
                            />
                        </label>
                    </>
                )}

                <button type="submit" style={styles.button} >
                    Submit
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "500px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    label: {
        marginBottom: "10px",
        fontSize: "14px",
    },
    input: {
        width: "100%",
        padding: "8px",
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "4px",
    },
    textarea: {
        width: "100%",
        padding: "8px",
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        resize: "none",
    },
    addressContainer: {
        display: "flex",
        marginBottom: "15px",
    },
    button: {
        padding: "10px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default CheckoutForm;
