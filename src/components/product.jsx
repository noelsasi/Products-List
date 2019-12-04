import React, { Component } from "react";
import "./product.css";
import data from "./data.json";
import Search from "./search";

class product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productsData: data
    };

    this.handleSearchFilter = this.handleSearchFilter.bind(this);
  }

  handleSearchFilter(searchText) {
    const regex = new RegExp(searchText, "gi");
    const prodData = data.filter(product => {
      return product.name.match(regex);
    });

    this.setState({
      productsData: prodData
    });
  }

  render() {
    const { productsData } = this.state;
    return (
      <div class="container col-md-8">
        <Search handleSearchFilter={this.handleSearchFilter} />
        <div className="product-list mt-5">
          <h5>
            {" "}
            <b>Product List </b>
          </h5>
          <div className="list-wrapper mt-4">
            {productsData.map(list => (
              <div className="list">
                <div className="list-img">
                  <img src={list.img} alt="product-img" />
                </div>
                <div className="list-desc">
                  <h6>
                    {" "}
                    <b> {list.name} </b>
                  </h6>
                  <p>{list.reviews}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default product;
