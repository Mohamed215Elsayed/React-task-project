
import { Component } from "react";

export default class Child extends Component { 
  state={};
  render() {
    //destruct
    let {id,name,price,count,Category,OnSale}=this.props.productInfo;
//   console.log(this.props);
    return <>

    <div className="col-md-3">
        <div className="product bg-white p-2 position-relative">
        <h5>id : {id}</h5>
        <h5>name : {name}</h5>
        <h5 className={price>5000?"text-danger": ''}> price : {price}</h5>
        <h5>count : {count}</h5>
        <h5>Category : {Category}</h5>
        <h5>OnSale : {OnSale}</h5>
        {OnSale?<div className="sale bg-danger p-1 text-white position-absolute top-0 end-0">Sale</div>:``}

        {/* <button onClick={()=>this.props.delete(id)} className="btn btn-outline-danger btn-sm w-100">Delete</button> */}

          {/* لو عايز امسح بالindex */}
        <button onClick={()=>this.props.delete(this.props.productIndex)} className="btn btn-outline-danger btn-sm w-100">Delete</button>
        <button onClick={()=>this.props.update(this.props.productIndex)} className="btn btn-outline-primary btn-sm w-100 my-2">+</button>
        </div>
          
    </div>
    
    </>
  };
}

//ternary operator
// let productPrice=5000;
// let x=productPrice>5000?'8ali':'re5ees';