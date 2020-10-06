import _ from 'lodash';
import React, { Component } from 'react'; 
import {connect} from 'react-redux';
import {fetchStream, editStream} from '../../actions';
import StreamForm from '../streams/StreamForm';




class StreamEdit extends Component {


      componentDidMount() {
         this.props.fetchStream(this.props.match.params.id)
      } 

      onSubmit = (formValues) => {
          this.props.editStream(this.props.match.params.id, formValues)
      }
        

 

    render() {
        console.log(this.props.selectedStream)
    return (
        <div>
            <h2>Edit Stream</h2>
            {!this.props.selectedStream ? <div>Loading...</div>: <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit}/>}      
        </div>
    )
    }
}


const mapStateToProps = (state, ownProps) => {

    return {
        selectedStream: state.streams[ownProps.match.params.id]
    }
}




export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);