import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProducts.css';

const AddProducts = () => {
    const { register, handleSubmit, reset} = useForm();
    // const { user } = useAuth();
    const onSubmit = data => {
        fetch('https://stormy-cliffs-56449.herokuapp.com/explore', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            if(result.insertedId){
                alert('Product Added Successdull');
                reset();
            }
        })
    }
    return (
        <div>
            <h3>Adding Products</h3>
            <div className = "addItem-container">
            <form  className="shipping-form w-auto" onSubmit={handleSubmit(onSubmit)}>
            <input style={{width: '50%', height: '40px', marginBottom: '20px'}}  placeholder="Product Name" defaultValue="" {...register("name")} /><br/>
            <input style={{width: '50%', height: '40px', marginBottom: '20px'}} placeholder="Image URL" defaultValue="" {...register("img")} /><br/>
            <input style={{width: '50%', height: '40px', marginBottom: '20px'}} placeholder="Cost" defaultValue="" {...register("price")} /><br/>
            <textarea style={{width: '50%', height: '70px', marginBottom: '20px'}} className="mt-3  description-area" placeholder="Description" defaultValue="" {...register("description")} /><br/>

            <input style={{width: '50%', height: '40px'}} type="submit" />
            </form>
        </div>
        </div>
    );
};

export default AddProducts;