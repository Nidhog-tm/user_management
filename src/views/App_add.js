import React, {useState} from "react";
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import './App_list.css';

const API_BASE_URL = 'https://mdntueu7u8.execute-api.ap-northeast-1.amazonaws.com/Prod/addlist';

const AddListItem = () => {
    const [test_id, setTestId] = useState('');
    const [name, setName] = useState('');

    const addDataToApi = async () => {
        // APIをコール
        axios.post(API_BASE_URL, { test_id : test_id, name : name })
            .then((response) => {
                // console.log(response);

                // 完了報告アラート
                alert("登録完了")
            })
    }

    return (
        <div>
            <div className="main">
                <h2>ADD USER</h2>
            </div>
            <Form>
                <FormGroup>
                    <Label for="testId">ID</Label>
                    <Input 
                        type="test_id"
                        name="test_id"
                        id="test_id"
                        placeholder="Please enter your ID"
                        onChange={event => setTestId(event.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Please enter your Name"
                        onChange={event => setName(event.target.value)}
                    />
                </FormGroup>
                <Button
                    id="qsSubmitBtn"
                    color="primary"
                    size="lg"
                    onClick={addDataToApi}
                >
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default AddListItem;
