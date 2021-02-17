import React ,{useEffect, useState} from 'react'
import axios from 'axios';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import {Row, Col} from 'antd';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../_actions/user_actions';
function DetailProductPage(props) {
    
    const productId = props.match.params.productId
    const dispatch = useDispatch
    const [Product, setProduct] = useState({})
    useEffect(() => {
        
        axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response =>{
                if(response.data.success){
                    setProduct(response.data.product[0])
                }else {
                    alert('상세 정보 가져오기를 실패했습니다.')
                }
            })
        
    },[] )
    const addToCartHandler = (productId) => {
        dispatch(addToCart(productId))
    }
    return (
        <div style={{widht: '100%', padding : '3rem 4rem'}}>
            <div style = {{display : 'flex', justifyContent:'center'}}>
                <h1>{Product.title}</h1>
            </div>
            <br />
            <Row gutter={[16,16]}>
                <Col lg={12} sm= {24}>
                    {/* Product image */}
                    <ProductImage 
                     addToCart={addToCartHandler}
                    detail={Product} />
                </Col>

                <Col lg={12} sm= {24}>
                    {/* Product Info */}
                    <ProductInfo  detail={Product} />

                </Col>
            </Row>
            
            
        </div>
    )
}

export default DetailProductPage
