import React ,{useState}from 'react'
import {Typography, Button, Form , Input} from 'antd';


const {TextArea} = Input
function UploadProductPage() {

    const [Title, setTilte] = useState("")
    const [Description ,setDescription] = useState("")
    const [Price , setPrice] = useState(0)
    const [Continent , setContinet] = useState(1)
    const [Images , setImages] = useState([])
    const titleChageHandler = (event) =>{
        setTilte(event.currentTarget.value)
    }
    const descriptionChangeHandler =(event) =>{
        setDescription(event.currentTarget.value)
    }
    const priceChageHandler = (event)=>{
        setPrice(event.currentTarget.value)
    }
    return (
        <div style={{maxWidth:'700px', margin:"2rem auto"}}>
            <div style= {{textAlign: 'center', marginBottom:'2rem'}}>
                <Typography level={2}>여행 상품 업로드</Typography>
            </div>
            <Form>
                {/*  dropzone*/ }
            <br/>
            <br/>
            <label>이름</label>
            <Input onChange ={titleChageHandler} value= {Title} />
            <br/>
            <br/>
            <label>설명</label>
            <TextArea  onChange ={descriptionChangeHandler} value ={Description} />
            <br/>
            <br/>
            <label>가격($)</label>
            <Input type="number" onChange = {priceChageHandler} value = {Price} />
            <br/>
            <br/>
            <select>
                <option></option>
            </select>
            <br/>
            <br/>
            <Button>
                확인
            </Button>
            </Form>
        </div>
    )
}

export default UploadProductPage
