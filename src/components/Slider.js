// import React from "react";
import Slider from "react-slick";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "../components/Loading";
import ListItem from "../components/ListItem.js"
 
const SimpleSlider = () =>  {
  const[list, setList] = useState([1, 2, 3]);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const style = {
        margin: 100,
        height: 300,
        color: "#fff",
        background: "#3ab60b"
    };  
    return (
      <div>
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
      // <div>
      //   <div>
      //     <Slider {...settings}>
      //       <div>
      //         <h1 style={style}>1</h1>
      //       </div>
      //       <div>
      //         <h1 style={style}>2</h1>
      //       </div>
      //       <div>
      //         <h1 style={style}>3</h1>
      //       </div>
      //       <div>
      //         <h1 style={style}>4</h1>
      //       </div>
      //       <div>
      //         <h1 style={style}>5</h1>
      //       </div>
      //     </Slider>
      //   </div>
      //   <div>
      //     <Slider {...settings}>
      //       <div>
      //         <h1 style={style}>1</h1>
      //       </div>
      //       <div>
      //         <h1 style={style}>2</h1>
      //       </div>
      //       <div>
      //         <h1 style={style}>3</h1>
      //       </div>
      //       <div>
      //         <h1 style={style}>4</h1>
      //       </div>
      //       <div>
      //         <h1 style={style}>5</h1>
      //       </div>        
      //     </Slider>
      //   </div>
      // </div>
    );
  }
 
  export default SimpleSlider;