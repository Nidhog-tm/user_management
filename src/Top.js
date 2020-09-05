import React from "react";
import { withRouter } from 'react-router-dom';

class Top extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
        }

    handleClick(){
    this.props.history.push('/main')
    }
    render() {
    return (
        <div>
            <div className="main" style={{textAlign: "center"}}>
            <h1>ログイン</h1>
            <form onSubmit={this.handleSubmit}>
                <input placeholder="userid"/><br/><br/>
                <input placeholder="password"/><br/><br/>
                <div style={{textAlign:"cener"}}>
                <button onClick={this.handleClick}>ログイン</button>
                </div>
            </form>
            </div>
        </div>
    );
    }
}

export default withRouter(Top)