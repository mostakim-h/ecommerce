import { useState } from "react";

const data = {
    productName: "",
    imageUrl: "",
    prize: "",
    ratings: "",
    inStock: "",
    category: ""
}

const AddProduct = () => {

    const [productName, setProductName] = useState('')
    const [imgUrl, setImgUrl] = useState()
    const [prize, setPrize] = useState()
    const [ratigns, setratigns] = useState()
    const [inStock, setinStock] = useState()
    const [category, setcategory] = useState()
    

    const handleSubmit = ()=>{
        data.productName = productName
        data.imageUrl = imgUrl
        data.prize = prize
        data.ratings = ratigns
        data.inStock = inStock
        data.category = category
        fetch('http://localhost:9000/product',{
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(data)
        }).then((r)=>{
            console.log("success")
        })
    }
    
    return (
        <div className="add_product">
            <h1>Add New Product</h1>
            
            <form action="/">
                <input value={productName} required onChange={(e)=> setProductName(e.target.value)} type="text" placeholder="Product Name..." />
                <input value={imgUrl} required onChange={(e)=> setImgUrl(e.target.value)} type="text" placeholder="Product Image Url..." />
                <input value={prize} required onChange={(e)=> setPrize(e.target.value)} type="text" placeholder="Prize..." />
                <input value={ratigns} required onChange={(e)=> setratigns(e.target.value)} type="text" maxLength={5} placeholder="Rating" />
                <input value={inStock} required onChange={(e)=> setinStock(e.target.value)} type="text" placeholder="InStock" />
                <input value={category} required onChange={(e)=> setcategory(e.target.value)} type="text" placeholder="Category?" />
                <button onClick={handleSubmit}>Submit</button>
            </form>
            
           
        </div>
    );
}

export default AddProduct;