import React, { useState } from "react";

const MenuItem = ({ item, handleItemSelect }) => {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount((prevCount) => prevCount + 1);
        handleItemSelect(item);
    };

    return (
        <div className="menu-item" style={styles.itemContainer}>
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={handleClick} style={styles.button}>
                Select Item
            </button>
            {clickCount > 0 && (
                <p style={styles.message}>
                    Item Selected (x{clickCount})
                </p>
            )}
        </div>
    );
};

const styles = {
    itemContainer: {
        border: "1px solid #011839",
        padding: "20px",
        margin: "10px",
        textAlign: "center",
    },
    button: {
        padding: "5px 10px",
        backgroundColor:"#e1892a",
        color: "white",
        borderRadius: "5px",
        cursor: "pointer",
    },
    message: {
        marginTop: "10px",
        color: "#011839",
        fontSize: "1rem",
        fontWeight: "bold",
    },
};

export default MenuItem;
