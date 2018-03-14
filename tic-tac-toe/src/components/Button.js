import React,{Component} from 'react'

class Button extends Component{
    render(){
        return(
            <button className="btn btn-primary playAgain" onclick="clearBoard()">
                Play Again
            </button>
        );
    }

}

export default Button;