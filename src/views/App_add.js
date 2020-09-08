import React from "react";
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import './App_list.css';

const API_BASE_URL = 'https://mdntueu7u8.execute-api.ap-northeast-1.amazonaws.com/Prod/addlist';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            test_id: '',
            name: '' 

        }
    }
    // componentWillMount() {
    //     // コンポーネントがマウントされる前にデータを取得する
    //     this.getDataFromApi();
    // }
    onChange = (e) => {
        this.handleUserInput(e)
    }
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    addDataFromApi = () => {
        console.log(this.state.test_id)
        console.log(this.state.name)
        // APIをコール
        axios.post(API_BASE_URL, { test_id : this.state.test_id, name : this.state.name })
            .then((response) => {

                // 完了報告
                alert("登録完了")
            })
    }
    render() {
        return (
            <div>
                <div className="main">
                    <h2>ADD USER</h2>
                </div>
                <Form>
                    <FormGroup>
                        <Label for="testId">ID</Label>
                        <Input type="test_id" name="test_id" id="test_id" value={this.state.test_id} placeholder="Please enter your ID" onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="name" name="name" id="name" value={this.state.name} placeholder="Please enter your Name" onChange={this.onChange} />
                    </FormGroup>
                    <Button
                        id="qsSubmitBtn"
                        color="primary"
                        size="lg"
                        onClick={this.addDataFromApi}
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

// index.htmlの.containerに描画する
// ReactDOM.render(<App />, document.querySelector('.container'));
// export default App;