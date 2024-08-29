import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function UpdateProduct() {
    let [id, setId] = useState("");
    let [title,setTitle] = useState("");
    let [price,setPrice] = useState("");
    let [description,setDescription] = useState("");
    const params = useParams();
    const idUpdate = params.id;

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
    useEffect(() => {
        axios.get("http://localhost:3000/products"+ idUpdate).then ((res)=>{
            let data = res.data
            setId(data.id)
            setTitle(data.title)
            setPrice(data.price)
            setDescription(data.description)
        })
    }, []);
    const submit = () => {
        let product = {
            id: id,
            title: title,
            price: price,
            description: description,

        }
        console.log(product);
        axios.put(`http://localhost:3000/products/${idUpdate}`,product).then(() => {
            alert("Update Success");
            navigate("/home");
        })
    }
    return (
        <>
            <h2>Sửa sản phẩm</h2>
            <input type="text" placeholder={'Id'} value={id} onChange={(event) => {
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

export default UpdateProduct;