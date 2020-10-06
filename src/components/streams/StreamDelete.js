import React, { Component } from 'react'; 
import Modal from '../Modal';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchStream, deleteStream} from '../../actions';
import history from '../../history';




class StreamDelete extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    

     renderActions = () => {


        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(this.props.match.params.id)} className='ui button negative'>Delete</button>
                <Link to='/' className='ui button'>Cancel</Link>
            </React.Fragment>
        )
    }

     renderContent = () => {
         if(!this.props.stream) {
             return 'Are you sure you want to delete this stream?'
         }

         return `Are you sure you want to delete this stream with title: ${this.props.stream.title} `
     }



    render() {
    return (
            <Modal 
             onDismiss = {() => history.push('/')}
             title='Delete Stream'
             content={this.renderContent()}
             actions = {this.renderActions()}
             stream = {this.props.stream}
             />
    )
 }
}

const mapStateToProps = (state, ownProps) => {

    return {
        stream: state.streams[ownProps.match.params.id]
  
    }

}


export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);