import React, {useEffect} from "react";
import { useNavigate } from "react-router";

export default function Error() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() =>{
            navigate("/")
        },1000)
        
    }, []);
  return (
    <div>
      <img src="https://media2.giphy.com/media/iCZvHo7DXKrgTD2xch/giphy.gif?cid=ecf05e47gob3nt1g1dudafu58to5a3w7c9s7hiu2ggal22r0&rid=giphy.gif&ct=s" alt="j" width="500" height="500"/>
    </div>
  );
}