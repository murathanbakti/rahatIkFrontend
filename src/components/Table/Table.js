import React, { useEffect, useState } from "react";
import axios from "axios";
import "./table.css";

const Table = () => {
    const [postData, setPostData] = useState([]);
    const [updateData, setUpdateData] = useState(true);
    const [selectedRows, setSelectedRows] = useState({});
    const [formData, setFormData] = useState({
        mainAcountNumber: "",
        firstChildAcountNumber: "",
        secondChildAcountNumber: "",
        debt: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://rahatikbackend.onrender.com/posts/all"
                );
                setPostData(response.data.response.scriptResult);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [updateData]);

    const toggleChild = (index) => {
        setSelectedRows((prevSelectedRows) => ({
            ...prevSelectedRows,
            [index]: !prevSelectedRows[index],
        }));
    };

    const toggleSecondChild = (parentId, secondChildIndex) => {
        setSelectedRows((prevSelectedRows) => {
            const key = `${parentId}_${secondChildIndex}`;
            return {
                ...prevSelectedRows,
                [key]: !prevSelectedRows[key],
            };
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const isValidInput = (value, minLength, maxLength) => {
        const numericValue = parseInt(value, 10);

        if (isNaN(numericValue)) {
            return false;
        }

        if (value.length < minLength || value.length > maxLength) {
            return false;
        }

        if (
            numericValue < Math.pow(10, minLength - 1) ||
            numericValue >= Math.pow(10, maxLength)
        ) {
            return false;
        }

        return true;
    };

    const handleSendClick = async () => {
        const isMainAcountValid = isValidInput(formData.mainAcountNumber, 3, 3);
        const isFirstAcountValid = isValidInput(
            formData.firstChildAcountNumber,
            2,
            2
        );
        const isSecondAcountValid = isValidInput(
            formData.secondChildAcountNumber,
            4,
            4
        );

        if (!isMainAcountValid || !isFirstAcountValid || !isSecondAcountValid) {
            alert(
                "Geçersiz giriş! Lütfen belirtilen aralıklarda değerler girin."
            );
            return;
        }

        try {
            await axios.post("https://rahatikbackend.onrender.com/posts", {
                mainAcountNumber: formData.mainAcountNumber,
                firstChildAcountNumber: formData.firstChildAcountNumber,
                secondChildAcountNumber: formData.secondChildAcountNumber,
                debt: formData.debt,
            });

            setUpdateData(!updateData);
            // Formu sıfırlayabilirsiniz.
            setFormData({
                mainAcountNumber: "",
                firstChildAcountNumber: "",
                secondChildAcountNumber: "",
                debt: 0,
            });
        } catch (error) {
            console.error("İstek gönderilirken hata oluştu:", error);
        }
    };
    return (
        <div>
            <h2>Post Table</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Account Number</th>
                        <th>Debt</th>
                    </tr>
                </thead>
                <tbody>
                    {postData.map((post, index) => (
                        <React.Fragment key={post._id}>
                            <tr>
                                <td className="first-column">
                                    <button
                                        onClick={() => {
                                            toggleChild(index);
                                        }}
                                        className="see-child"
                                    >
                                        {selectedRows[index] ? "-" : "+"}
                                    </button>
                                </td>
                                <td>{post.acountNumber}</td>
                                <td>{post.debt}</td>
                            </tr>
                            {selectedRows[index] &&
                                post.childAcount.map((child, childIndex) => (
                                    <React.Fragment key={child._id}>
                                        <tr>
                                            <td className="first-column">
                                                <button
                                                    onClick={() => {
                                                        toggleSecondChild(
                                                            child._id,
                                                            childIndex
                                                        );
                                                    }}
                                                    className="see-child"
                                                >
                                                    {selectedRows[
                                                        `${child._id}_${childIndex}`
                                                    ]
                                                        ? "-"
                                                        : "+"}
                                                </button>
                                            </td>
                                            <td>
                                                {child.firstChildAcountNumber}
                                            </td>
                                            <td>{child.firstChildDebpt}</td>
                                        </tr>
                                        {selectedRows[
                                            `${child._id}_${childIndex}`
                                        ] &&
                                            child.secondChild.map(
                                                (
                                                    secondChild,
                                                    secondChildIndex
                                                ) => (
                                                    <tr key={secondChild._id}>
                                                        <td className="first-column"></td>
                                                        <td>
                                                            {
                                                                secondChild.secondChildAcountNumber
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                secondChild.secondChildDebpt
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                    </React.Fragment>
                                ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
            <div className="form-container">
                <h2>Add New Post</h2>
                <div className="form-group">
                    <label>Account First Number:</label>
                    <input
                        type="text"
                        placeholder="000"
                        name="mainAcountNumber"
                        value={formData.mainAcountNumber}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Account Second Number:</label>
                    <input
                        type="text"
                        placeholder="00"
                        name="firstChildAcountNumber"
                        value={formData.firstChildAcountNumber}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Account Third Number:</label>
                    <input
                        type="text"
                        placeholder="0000"
                        name="secondChildAcountNumber"
                        value={formData.secondChildAcountNumber}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Debt:</label>
                    <input
                        type="number"
                        name="debt"
                        value={formData.debt}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <button onClick={handleSendClick}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Table;
