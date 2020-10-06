import React, { Component } from 'react'; 
import {fetchStream} from '../../actions';
import {connect} from 'react-redux';




class StreamShow extends Component{

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id) 
    }



    renderInfo = () => {

        if(!this.props.stream) {
            return null;
        }

         const {title, description} = this.props.stream


         
            return (
                <div>
                    <h3>
                        {title}
                    </h3>
                    <p>
                        {description}
                    </p>
                </div>
            )
       
    }









    render() {
        console.log(this.props.stream)

    return (
        <div>
            {this.renderInfo()}
        </div>
    )
}
}


const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps, {fetchStream})(StreamShow);