import React,{Component} from 'react';

class Weather extends Component{
    render(){
        return(
            <div>
                {this.props.temperature}
                {this.props.city}
                {this.props.country}
                {this.props.humidity}
                {this.props.description}
            </div>
        );
    }
}

export default Weather;