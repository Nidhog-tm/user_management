import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

//ヘッダの定義
class Header extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
    }

  handleClick(){
  this.props.history.push('/')
  }
  render() {
    return (
      <header>
         <div style={{position:"relative", textAlign:"right", paddingTop: "30px"}}>
           <Link to="/main" style={{paddingRight: "5px"}}>メニュー</Link>
           <Link to="/list" style={{paddingRight: "5px"}}>ユーザーリスト</Link>
           <button onClick={this.handleClick}>ログアウト</button>
         </div>
         <hr/>
       </header>
    );
  }
}

export default withRouter(Header)
