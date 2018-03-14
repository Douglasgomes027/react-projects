import React,{Component} from 'react'

class Board extends Component{
    render(){
        return(
            <div>
                <div className="row text-center">
                    <div className="col-md-2 col-md-offset-3 col-xs-4 square" onclick="clicked('.row11')">
                        <span className="row11"></span>
                    </div>
                    <div className="col-md-2 col-xs-4 square" onclick="clicked('.row12')">
                        <span className="row12"></span>
                    </div>
                    <div className="col-md-2 col-xs-4 square" onclick="clicked('.row13')">
                        <span className="row13"></span>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-2 col-md-offset-3 col-xs-4 square" onclick="clicked('.row21')">
                        <span className="row21"></span>
                    </div>
                    <div className="col-md-2 col-xs-4 square" onclick="clicked('.row22')">
                        <span className="row22"></span>
                    </div>
                    <div className="col-md-2 col-xs-4 square" onclick="clicked('.row23')">
                        <span className="row23"></span>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-2 col-md-offset-3 col-xs-4 square" onclick="clicked('.row31')">
                        <span className="row31"></span>
                    </div>
                    <div className="col-md-2 col-xs-4 square" onclick="clicked('.row32')">
                        <span className="row32"></span>
                    </div>
                    <div className="col-md-2 col-xs-4 square" onclick="clicked('.row33')">
                        <span className="row33"></span>
                    </div>
                </div>
            </div>
            
    
        );
    }

}

export default Board;
