import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function AddProduct() {
    let [id, setId] = useState("");
    let [title,setTitle] = useState("");
    let [price,setPrice] = useState("");
    let [description,setDescription] = useState("");
    const navigate = useNavigate();
    const changeId = (event) => {
        let dataInput = event.target.value;
        setId(dataInput);
    }
    const changeTitle = (event) => {
        let dataInput = event.target.value;
        setTitle(dataInput);
    }
    const changePrice = (event) => {
        let dataInput = event.target.value;
        setPrice(dataInput);
    }
    const changeDescription = (event) => {
        let dataInput = event.target.value;
        setDescription(dataInput);
    }

    const submit= () => {
        let product = {
            id: id,
            title: title,
            price: price,
            description: description,

        }
        console.log(product);
        axios.post("http://localhost:3000/products", product).then(() => {
            alert("Thêm thành công");
            navigate("/home");
        })
    }
    return (
        <>
            <h1>Thêm mới</h1>
            <input type="number" placeholder={'Id'} value={id} onChange={(event) => {
                changeId(event)
            }}/>
            <input type="text" placeholder={'Title'} value={title} onChange={(event) => {
                changeTitle(event)
            }}/>
            <input type="text" placeholder={'price'} value={price} onChange={(event) => {
                changePrice(event)
            }}/>
            <input type="text" placeholder={'Description'} value={description} onChange={(event) => {
                changeDescription(event)
            }}/>

            <button onClick={() => {
                submit()
            }}>Submit
            </button>
        </>
    );
}

export default AddProduct;