import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../../actions/modalActions";

class Service extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <button onClick={() =>this.props.openModal("create")}>Create</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
})

export default connect(null, mapDispatchToProps)(Service);