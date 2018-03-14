import React,{Component} from 'react'

class Board extends Component{
    state={
        turn:"X"
    }
    
    clickedBoard=(e)=>{
        e.preventDefault()
        alert(e.target.childrenNode)
        e.target.innerText = this.state.turn;
        this.setState({
            turn:this.state.turn==="X"?"0":"X"
        });
    }

    render(){
        return(
            <div>
                <div className="row text-center">
                    <div className="col-md-2 col-md-offset-3 col-xs-4 square" onClick={this.clickedBoard}>
                        <span></span>
                    </div>
                    <div className="col-md-2 col-xs-4 square" onClick={this.clickedBoard}>
                        <span></span>
                    </div>
                    <div className="col-md-2 col-xs-4 square" onClick={this.clickedBoard}>
                        <span></span>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-2 col-md-offset-3 col-xs-4 square" onClick={this.clickedBoard}>
                        <span></span>
                    </div>
                    <div className="col-md-2 col-xs-4 square" onClick={this.clickedBoard}>
                        <span></span>
                    </div>
                    <div className="col-md-2 col-xs-4 square" onClick={this.clickedBoard}>
                        <span></span>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-2 col-md-offset-3 col-xs-4 square" onClick={this.clickedBoard}>
                        <span></span>
                    </div>
                    <div className="col-md-2 col-xs-4 square" onClick={this.clickedBoard}>
                        <span></span>
                    </div>
                    <div className="col-md-2 col-xs-4 square" onClick={this.clickedBoard}>
                        <span></span>
                    </div>
                </div>
            </div>
            
    
        );
    }

}

export default Board;
