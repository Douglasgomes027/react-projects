import React,{Component} from 'react'

class GameResults extends Component{
    render(){
        return(
            <div className="modal fade" id="gameModal" tabindex="-1" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">Game Results</h4>
                        </div>
                        <div className="modal-body">
                            <p id="gameResults"></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default GameResults;
