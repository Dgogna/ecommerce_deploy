
import React,{ useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu';
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";



const Products = () => {
    const [products, setProducts] = useState([]);

    //getall products
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product`);
        setProducts(data.products);
        // console.log(data.products);
      } catch (error) {
        console.log(error);
        toast.error("Someething Went Wrong");
      }
    };
  
    //lifecycle method
    useEffect(() => {
        // console.log("getting all the products");
      getAllProducts();
    }, []);
    return (
      <Layout>
        <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 ">
            <h1 className="text-center">All Products List</h1>
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <Link
                  key={p._id}
                  to={`/admin-dashboard/admin/product/${p.slug}`}
                  className="product-link"
                >
                  <div className="card m-2" style={{ width: "18rem" }}>
                    <img
                      src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                      height={"300px"}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">{p.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        </div>
      </Layout>
  )
}

export default Products
