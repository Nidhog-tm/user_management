import React from "react";
import axios from 'axios';

import './App_list.css';
import ListItem from "./ListItem.js"
import Footer from "./Footer.js";
import Header from "./Header.js";

const API_BASE_URL = 'https://mdntueu7u8.execute-api.ap-northeast-1.amazonaws.com/Prod/getlist';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // test_id: ``
            list: []
        }
    }
    componentWillMount() {
        // コンポーネントがマウントされる前にデータを取得する
        this.getDataFromApi();
    }
    async getDataFromApi() {
        // APIをコール
        await axios.get(API_BASE_URL)
            .then((response) => {
                // log 
                console.log(JSON.parse(response.data.body.body).result);

                // APIから取得したデータをstateに保存
                this.setState({
                    list: JSON.parse(response.data.body.body).result
                });
                console.log(this.state.list);
            })
    }
    render() {
        return (
            <div>
            <Header/>
                <div className="main">
                    <h2>ユーザリスト</h2>
                </div>
                <div className="App">
                    {/* {this.state.test_id} */}
                    {/* list 配列の要素数分 ListItem コンポーネントを展開 */}
                    {this.state.list.map(list => (
                        <ListItem
                        test_id={list.test_id}
                        name={list.name}
                        />
                    ))}
                </div>
            <Footer/>
            </div>
        );
    }
}

// index.htmlの.containerに描画する
// ReactDOM.render(<App />, document.querySelector('.container'));
// export default App;