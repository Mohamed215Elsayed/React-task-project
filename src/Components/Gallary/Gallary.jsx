import { Component } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import GallaryStyle from './Gallary.module.css';
export  default class Gallery extends Component {
    state={
       count:0
    };
changeCount= () => {
    this.setState({count:Math.random()});
};
    render() {
      return (<>
      {/* nested routing */}
      <div className="row">
        <div className="col-md-2">
          <ul>
            {/* <li><Link to="Web" className="test">Web</Link></li> */}
            <li><Link to="Web" className={GallaryStyle.test}>Web</Link></li>
            <li><Link to="mobile">Mobile</Link></li>
          </ul>
        </div>
        <div className="col-md-10">
          <Outlet></Outlet>
        </div>
      </div>


        {/* <h3>count: {this.state.count}</h3>
        <h2>Gallery</h2>
        <button className="btn btn-info w-100 my-2" onClick={this.changeCount}>changeCount</button> */}
        </>
      )

    };
}