import React from 'react';
/**
 * This is Display component
 */
export default class Display extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props)
    }
    
    render(){
        return <textarea className={this.props.className} value={this.props.value} readOnly>{this.props.value}</textarea>
    }
}
