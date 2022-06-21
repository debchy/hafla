import React from 'react';

/**
 * Buttom component
 */
export default class Button extends React.Component{
        
    render(){
        return <div className={this.props.className} onClick={this.props.onClick}>{this.props.value}</div>
    }
}
