import React, {Component} from 'react'; 
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions/index';



class GoogleAuth extends Component {
 
 
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '359859064943-8fj81ho3qv3dobi4193odv7c7v1p86g1.apps.googleusercontent.com', 
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()  //We now have access to the auth object from anywhere in our application
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }



   onAuthChange = (isSignedIn) => {
       if(isSignedIn) {
           this.props.signIn(this.auth.currentUser.get().getId())
       } else {
           this.props.signOut()
       }
   }

   onSignOutClick = () => {
       this.auth.signOut()
   }

   onSignInClick = () => {
    this.auth.signIn()
   }




    renderAuthButton = () => {
        switch (this.props.isSignedIn) {
            case null:
                return null;
             case true: 
              return (
                  <button onClick ={this.onSignOutClick} className='ui red google button'>
                      <i className='google icon'/>
                        Sign Out 
                  </button>
              ); 
              case false: 
              return (
                  <button onClick={this.onSignInClick} className='ui red google button'>
                    <i className='google icon'/>
                      Sign In with Google
                  </button>
              )        
            default:
                return null;
        }

    }


    
  


    


    render() {
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }

}

const mapStateToProps = (state) => {

    return {
        isSignedIn: state.auth.isSignedIn
    }
    
}



export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);