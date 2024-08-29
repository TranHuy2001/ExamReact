import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import '../style/Detail.css'

function DetailProduct (){
    const [data, setData] = useState([]);
    let {x} = useParams()
    useEffect(() => {
        axios.get('http://localhost:3000/products/'+x).then(res => {
            setData(res.data)
        })
    },[])
    return (
        <>
            <div className={'detail-box'}>
                <div className={'head'}>
                    <h3>Chi tiết sản phẩm</h3>
                </div>
                <div className={'body'}>
                    <h2>Tên sản phẩm: {data.title}</h2>
                    <p>Mô tả: {data.description}</p>
                    <p>Giá: {data.price}</p>
                    <button className={'btn'}><Link className={'link-d'} to={'/home'}>Trở lại</Link></button>
                </div>

            </div>

        </>
    )
}

export default DetailProduct;