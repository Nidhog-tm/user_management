import * as React from "react";
import { motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid #4400FF` };
  const style2 = { border: `2px solid #FF008C` };

  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });
  
  return (
    <div>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="icon-placeholder" style={style} />
        <div className="text-placeholder" style={style} >
        <p style={{color: "#4400FF"}}>サンプルボタン</p>
        </div>
      </motion.li>
      {isAuthenticated && (
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="icon-placeholder" style={style2} />
        <div 
          className="text-placeholder"
          style={style2}
          onClick={() => logoutWithRedirect()}
        >
          <p style={{color: "#FF008C"}}>ログアウト</p>
        </div>
      </motion.li>
      )}
    </div>
  );
};
