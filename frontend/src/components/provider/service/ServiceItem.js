import { Link } from "react-router-dom";
import React, { Component } from "react";

class ServiceItem extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }

  render() {
    if (!this.props.service) {
      return null;
    } else {
      return (
        <div className="ServiceItem">
          {this.props.service.type}
          {this.props.service.price}
        </div>
      );
    }
  }
}

export default ServiceItem;
