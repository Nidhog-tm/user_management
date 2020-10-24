import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from 'axios';
import Slider from "react-slick";
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../views/App_list.css';
import Loading from "./Loading";
import ListItem from "./ListItem.js"

const API_BASE_URL = 'https://mdntueu7u8.execute-api.ap-northeast-1.amazonaws.com/Prod/getlist';

const SimpleSlider = () =>  {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const style = {
        margin: 12,
        width: 300
    };  

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
        <div>
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
            <div className="App" style={{textAlign: "center"}}>
                {/* list 配列の要素数分 ListItem コンポーネントを展開 */}
                {list === null && <Loading />}
                {list &&
                    list.map((lisrItem) => (
                        <Slider {...settings}>
                        <div>
                            <ListItem
                            test_id={lisrItem.test_id}
                            name={lisrItem.name}
                            />
                        </div>
                        <div>
                            <h1 style={style}>1</h1>
                        </div>
                        </Slider>
                    ))}
            </div>
        </div>
    //   <Slider {...settings}>
    //     <div>
    //       <h1 style={style}>1</h1>
    //     </div>
    //     <div>
    //       <h1 style={style}>2</h1>
    //     </div>
    //     <div>
    //       <h1 style={style}>3</h1>
    //     </div>
    //     <div>
    //       <h1 style={style}>4</h1>
    //     </div>
    //     <div>
    //       <h1 style={style}>5</h1>
    //     </div>        
    //   </Slider>
    );
  }
 
  export default SimpleSlider;