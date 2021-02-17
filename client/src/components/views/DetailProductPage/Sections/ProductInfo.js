import React from 'react'
import { Descriptions, Badge, Button } from 'antd';
import { useDispatch} from 'react-redux';
import {addToCart} from '../../../../_actions/user_actions';

function ProductInfo(props) {
    const dispatch = useDispatch

    const clickHandler = () =>{
        //필요한 정보를 cart필드에다가 넣어준다. 상품 id , 개수, 언제 넣었는지 
        dispatch(addToCart(props.detail._id))
    }
    return (
        <div>
            <Descriptions title="Prduct Info" bordered>
                <Descriptions.Item label="Product">{props.detail.price}</Descriptions.Item>
                <Descriptions.Item label="Sold">{props.detail.sold}</Descriptions.Item>
                <Descriptions.Item label="View">{props.detail.view}</Descriptions.Item>
                <Descriptions.Item label="Description">{props.detail.description}</Descriptions.Item>
            </Descriptions>


            <br />
            <br />
            <br />

            <div style={{display : 'flex', justifyContent: 'center'}}>
                <Button size ="large" shape="round" type="danger" onClick= {clickHandler} >
                    Add to cart
                </Button>

            </div>
        </div>
    )
}

export default ProductInfo
