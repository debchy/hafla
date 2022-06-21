import React from 'react';
import Display from "./Display";
import Button from "./Button";


export default class Claculator extends React.Component{
    constructor(props){
        super(props);
        this.state={numbers:[""],result:"0", currentIndex:0}
        this.onClickButton=this.onClickButton.bind(this);
        this.onClickCommanButton=this.onClickCommanButton.bind(this);
    }
    /**On click event handler for buttons */
    onClickButton(e){
        console.log(e.target.innerHTML)
        let currentNumber=this.state.numbers[this.state.currentIndex];
        //if first number is zero, omit it
        if(currentNumber==="" && e.target.innerHTML==="0")return;
        //update display number and concate it to previous number
        currentNumber=currentNumber+e.target.innerHTML
        let numbers=this.state.numbers;
        numbers[this.state.currentIndex]=currentNumber;
        this.setState({numbers,result:currentNumber});
    }
    onClickCommanButton(e){
        if(e.target.innerHTML==="+"){
            //increase index, only if the current value is not empty
            if(this.state.numbers[this.state.currentIndex]!==""){
                this.setState({currentIndex:this.state.currentIndex+1}) ;
                this.state.numbers.push("");
            }            
        }
        else if(e.target.innerHTML==="="){
            let numbers=this.state.numbers;
            //omit "="" operation if no value is stored
            if(numbers.length===1 && numbers[0]==="")return;
            else{
                //prepare the summation
                let total =0;
                numbers.forEach(number=>{
                    total+= (number!=="" && !isNaN(number)?parseInt(number):0);
                })
                //update state to reflect the result and prepare for new summation
                this.setState({numbers:[""],result:total, currentIndex:0})
            }
        }
    }
    render(){
        return <div className='calculator'>
            <Display value={this.state.result}></Display>
            <div className='ButtonArea border'>
                <div className='d-flex flex-row mb-3'>
                    <Button value={7} className="btn btn-primary p-2 m-1" onClick={this.onClickButton}></Button>
                    <Button value={8}  className="btn btn-primary p-2 m-1" onClick={this.onClickButton}></Button>
                    <Button value={9}  className="btn btn-primary p-2 m-1"  onClick={this.onClickButton}></Button>
                </div>
                <div className='d-flex flex-row mb-3'>
                    <Button value={4} className="btn btn-primary p-2 m-1" onClick={this.onClickButton}></Button>
                    <Button value={5}  className="btn btn-primary p-2 m-1" onClick={this.onClickButton}></Button>
                    <Button value={6}  className="btn btn-primary p-2 m-1"  onClick={this.onClickButton}></Button>
                </div>
                <div className='d-flex flex-row mb-3'>
                    <Button value={1} className="btn btn-primary p-2 m-1" onClick={this.onClickButton}></Button>
                    <Button value={2}  className="btn btn-primary p-2 m-1" onClick={this.onClickButton}></Button>
                    <Button value={3}  className="btn btn-primary p-2 m-1"  onClick={this.onClickButton}></Button>
                </div>
                <div className='d-flex flex-row mb-3'>
                    <Button value={0} className="btn btn-primary p-2 m-1" onClick={this.onClickButton}></Button>
                    <Button value={"+"} className="btn btn-info p-2 m-1" onClick={this.onClickCommanButton}></Button>
                    <Button value={"="} className="btn btn-info p-2 m-1" onClick={this.onClickCommanButton}></Button>
                </div>
            </div>
            
        </div>
    }
}
