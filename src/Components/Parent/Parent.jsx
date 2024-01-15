
import { Component } from "react";
import Child from "../Child/Child";

export default class Parent extends Component { 
    //لو كان object
//   state={
//     product:{id:1,name:'Oppo reno 6',price:9000,count:8,OnSale:false}
//   };

    //لو كان array

  state={
    products:[{id:1,name:'Oppo reno 6',price:9000,count:8 ,Category:"mobile", OnSale:false},
    {id:2,name:'Oppo node 6',price:4900,count:8,Category:"mobile", OnSale:false},
    {id:3,name:'samsung',price:2500,count:18,Category:"mobile", OnSale:true},
    {id:4,name:'iphone',price:22000,count:9,Category:"mobile", OnSale:false},
    {id:5,name:'toshiba',price:5000,count:8,Category:"mobile", OnSale:true},
    {id:6,name:'realme',price:4000,count:8,Category:"mobile", OnSale:false},
    {id:7,name:'readme',price:7000,count:8,Category:"mobile", OnSale:false},
    {id:8,name:'hawawui',price:14000,count:8,Category:"mobile", OnSale:true},
    {id:9,name:'node 6',price:3000,count:8,Category:"mobile", OnSale:false},
]
  };

//   deleteProduct = (productId)=>{
//     // console.log(`delete ${index}`);
//     //1-take deep copy 
//     let myProducts  = [...this.state.products];
//     //2- make action on it
//     myProducts=myProducts.filter((product)=> product.id !==productId);
//     //3- setState()
//     this.setState({products:myProducts});
  
// };


//   {/* لو عايز امسح بالindex */}
deleteProduct = (productIndex)=>{
    // console.log(`delete ${index}`);
    //1-take deep copy 
    let myProducts  = [...this.state.products];
    //2- make action on it
    // myProducts=myProducts.filter((product)=> product.id !==productId);
    myProducts.splice(productIndex,1);
    //3- setState()
    this.setState({products:myProducts});
  
};

updateProduct = (productIndex)=>{
   let myProducts=[...this.state.products]; //copy
   myProducts[productIndex].count++;//action
   this.setState({products:myProducts}); //setState
};
x;
constructor(){
  console.log('Parent constructor called');

  super();
};

componentDidMount(){
  console.log('Parent componentDidMount called');
  this.x=setInterval(()=>{
    console.log('Hello');
  },500);
}

componentDidUpdate(){
  console.log('Parent componentDidUpdate called');
}

componentWillUnmount(){
  console.log('Parent componentWillUnmount called');
  clearInterval(this.x);
}
  render() {
  console.log('Parent render called');

    return <>
    <div className="container bg-dark py-2">
        <div className="row gy-2">


            {/* <h2>Parent Page</h2> */}
            { /* لو كان object */ }
            {/* <Child productInfo={this.state.product}/> */}

            {/* //لو كان array */}
            {/* {this.state.products.filter((product)=>product.OnSale == true).map((product)=> <Child productInfo={product}/>)}; */}

            {/* {this.state.products.map((product)=> <Child delete={this.deleteProduct} productInfo={product}/>)}; */}

            {/* لو عايز امسح بالindex */}
            {this.state.products.map((product,index)=> <Child key={index} update={this.updateProduct} productIndex={index} delete={this.deleteProduct} productInfo={product}/>)};

        </div>
      
    </div>
    </>
  };
}