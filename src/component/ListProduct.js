import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import '../style/ListProduct.css';

function ListProduct() {

    let [product, setProduct] = useState([]);
    const getList = () => {
        axios.get("http://localhost:3000/products").then((res) => {
            let data = res.data;
            setProduct(data);
        })
    }
    useEffect(() => {
        getList()
    }, []);
    const remove = (id) => {
        let isConfirm = window.confirm("Are you sure?");
        if (isConfirm) {
            axios.delete(`http://localhost:3000/products/${id}`).then((res)=>{
                alert("Deleted");
                getList()
            })
        }
    }
    return(
        <>
            <h1>Danh sách sản phẩm</h1>
            <button className={'in-nav'}><Link to={'/create'} className={'link'}>Thêm mới</Link></button>
            <table>
                <tr>
                    <th>STT</th>
                    <th>#</th>
                    <th>Tên sản phẩm</th>
                    <th>Mô tả</th>
                    <th>Giá</th>
                    <th colSpan={2}>ACTION</th>
                </tr>
                {
                    product.map((item, index) => (
                        <>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.id}</td>
                                <td><Link to={'/detail/' + item.id}>{item.title}</Link></td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={() => {
                                        remove(item.id)
                                    }} className={'in-table'}>Xóa
                                    </button>
                                </td>
                                <td>
                                    <button className={'in-table'}><Link className={'in-table'}
                                                                         to={`/update/${item.id}`}>Sửa</Link>
                                    </button>
                                </td>
                            </tr>
                        </>
                    ))
                }
            </table>
        </>
    )
}

export default ListProduct;