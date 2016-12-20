 //This component hanhles the App template used on every page and wrapping the other components
 import React, { PropTypes } from 'react';
 import Header from "./common/Header.jsx";

 export default class App extends React.Component {
   render() {
     return(
       <div className='container-fluid'>
        <Header />
        {this.props.children}
      </div>
     )
   }
 }
 //these children are passed in from React Router

 App.propTypes = {
   children: PropTypes.object.isRequired
 }
