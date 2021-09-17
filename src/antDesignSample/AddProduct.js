import { Form, Input, Button } from 'antd'
import React from 'react'
import { apiUrl } from '../env/config';

function AddProduct() {

    const onFinish = (values) => {
        let requestOptions = {
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            method:'POST',
            body:JSON.stringify(values)
        };

        fetch(apiUrl + '/api/products', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                console.log('Data Eklendi', data);
                alert('Success');
            })
    }

    

    return (
        <>
            <Form
                name='Basic'
                onFinish={onFinish}
            >
                <Form.Item
                    label='Product Name'
                    name='productName'
                    rules={[
                        {
                            required:true,
                            message:'Please input your product name'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Units In Stock'
                    name='unitsInStock'
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Unit Price'
                    name='unitPrice'
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>Add</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default AddProduct
