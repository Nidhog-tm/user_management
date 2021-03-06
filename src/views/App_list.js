import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from 'axios';

import './App_list.css';
import Loading from "../components/Loading";
import ListItem from "../components/ListItem.js"

const API_BASE_URL = 'https://mdntueu7u8.execute-api.ap-northeast-1.amazonaws.com/Prod/getlist';

const IndicateList = () => {
    const[list, setList] = useState(null);

    const getDataFromApi = async () => {
        // APIをコール
        await axios.get(API_BASE_URL)
            .then((response) => {
                // APIから取得したデータをstateに保存
                setList(
                    JSON.parse(response.data.body.body).result
                );
            })
    }

    useEffect(() => {
        getDataFromApi();
    }, []);

    return (
        <div className="wrapper">
            <div className="main">
                <h2>USER LIST</h2>
                <motion.div
                className="back"
                animate={{
                    x: 0,
                    opacity: 1
                }}
                initial={{
                    x: 100,
                    opacity: 0
                }}
                exit={{
                    x: -100,
                    opacity: 0
                }}
                transition={{
                    duration: 0.2
                }}
                >
                    <Link to="/">← Back</Link>
                </motion.div>
            </div>
            <div>
                <div className="App" style={{textAlign: "center"}}>
                {/* list 配列の要素数分 ListItem コンポーネントを展開 */}
                {list === null && <Loading />}
                {list &&
                    list.map((lisrItem) => (
                        <ListItem
                        test_id={lisrItem.test_id}
                        name={lisrItem.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndicateList;
