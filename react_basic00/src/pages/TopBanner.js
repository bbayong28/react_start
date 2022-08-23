import { useState } from "react";
import { BsHandThumbsUp } from "react-icons/bs";
/* import styles from './Topbanner.module.css' */

const TopBanner = () => {
    //console.log(styles)
    //1. 아이콘을 클릭한다.
    //2. 아이콘을 클릭하면 TopBanner에 class를 "on"을 붙인다. / 뗀다.
    //3. 변수를 만들어서 true / false 되는 스위치를 만들고
    //4. true / false 값에 따라서 class를 "on"을 붙인다. / 뗀다.
    
    const [toggle, setToggle] = useState(false);
    //return 안 = jsx  jsx에는 포문 이런거 쓸수 없음

    /* const css = {
        fontSize: '30px',
        color:'#f0f'
    } */


    return (
        <>
            <div className= {`TopBanner ${toggle ? 'on' : ''}`}>
                <h2>Lorem ipsum dolor sit. {toggle ? 'on' : ''}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
                    Minima rem odit deleniti eum ullam.</p>
                <a href="#!" onClick={
                    (e) => { 
                        e.preventDefault();
                    }
                }>more</a>
            </div>       
            <span onClick={() => {
                setToggle(!toggle)
            }} className={toggle ? 'btn on' : 'btn'}>
                <BsHandThumbsUp />
            </span>
            {/* <div style={css}>style test</div>
            <div className={styles.test}>아쿠아색</div> */}
        </>
    )
}

export default TopBanner;