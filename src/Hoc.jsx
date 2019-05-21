import React from 'react';
import {Redirect} from 'react-router-dom';


export default (Child) =>{
    return class auth extends React.Component{
        constructor(props){
            super(props);
            this.PreventedRoute();
        }
        PreventedRoute=()=>{
            if(!localStorage.getItem('data')){
                this.props.history.push('/')
            }
        }
        render(){
            if(localStorage.getItem('data')){
                return(<>
                <Child {...this.props}/>
                </>)
            }
            return <Redirect to='/'
            />
        }
    }
}