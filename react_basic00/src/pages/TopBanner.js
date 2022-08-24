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

// 선호하는 방식이 아님
// import { useRef, useState } from "react";
// import { BsChevronBarUp } from "react-icons/bs";
// const TopBanner = () => {
//     //useRef 는 자바스크립트 객체다.
//     //매번 렌더링될 때마다 동일한 객체를 넘긴다
//     //동일한 객체를 가지고 있기 때문에 값이 변경되어도 리렌더링 되지 않는다.
//     const TopSpan = useRef(null);
//     return (
//         <>
//             <div className="TopBanner" ref={TopSpan}>  //ref는 정해진거
//                 <h2>Lorem ipsum dolor sit. </h2>
//                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br />
//                     Soluta vitae voluptatem voluptatum quas vel incidunt?</p>
//                 <a href="" onClick={
//                     (e) => {
//                         e.preventDefault();
//                     }
//                 }>more</a>
//             </div>
//             <span onClick={e => {
//                 e.currentTarget.classList.toggle('on');
//                 TopSpan.current.classList.toggle('on');
//             }} className="btn">
//                 <BsChevronBarUp />
//             </span>
//         </>
//     )
// }
// 
// export default TopBanner;