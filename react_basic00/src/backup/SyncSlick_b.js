//이렇게하면 새로고침하면 안됨 
// import { useRef, useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// 
// const SyncSlick = () => { 
// 
//     
// 
//     const [nav1, setNav1] = useState();
//     const [nav2, setNav2] = useState();
// 
//     return (
//         <>
//             <Slider  asNavFor={nav2} ref={ (slider1) => setNav1(slider1)}>
//                 <div>A</div>
//                 <div>B</div>
//                 <div>C</div>
//             </Slider>
//             <Slider asNavFor={nav1} ref={ (slider2) => setNav2(slider2)}>
//                 <div>01</div>
//                 <div>02</div>
//                 <div>03</div>
//             </Slider>
//         </>
//     )
// } 
// 
// export default SyncSlick;

//해결방안!
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SyncSlick = () => {
    const [n1, setN1] = useState();
    const [n2, setN2] = useState();


    const [slnum, setSlnum] = useState(1);

    const s1 = useRef();
    const s2 = useRef();

    //useEffect -처음에 한 번 실행 해주는것
    useEffect(() => {
        setN1(s1.current);
        setN2(s2.current);
    }, [])


    const set = {
        beforeChange: (oldIndex, newIndex) => {
            console.log(oldIndex, newIndex)
        },
        afterChange: idx => {
            setSlnum(idx);
        }
    }

    return (
        <>
            {slnum + 1}
            {/* 이후에 설정된 ref를 읽어오지 못함 리액트 설릭??? */}
            <Slider dots={true} ref={s1} asNavFor={s2.current} {...set}>
                <div>A</div>
                <div>B</div>
                <div>C</div>
            </Slider>
            <Slider arrows={false} ref={s2} asNavFor={s1.current}>
                <div>01</div>
                <div>02</div>
                <div>03</div>
            </Slider>

            <div className="arrows">
                <i className="xi-arrow-left"
                    onClick={() => (s1.current.slickPrev())}></i>
                <i className="xi-arrow-right"
                    onClick={() => (s1.current.slickNext())}></i>
            </div>
        </>
    )


}

export default SyncSlick;