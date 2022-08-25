import { useRef } from 'react';
import MainSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';


const MainVisual = () => { 
    const settinggggg = {
        dots: true,
    }
    //slick method 사용하기
    // 1. 슬릭에 이름 붙여주기 useRef --> 소환할 때 --> useRef로 만들어준 이름.current
    // 2. 클릭하는 요소에 이벤트를 직접 달아준다.

    const Ms = useRef(null) 
    return (
        <div>
            <h3>나는 아이콘이다.</h3>
            <i className="xi-bars"></i>
            <MainSlider {...settinggggg} ref={Ms}>{/* settings 객체 넣어줘야함 // ref={Ms}는 자스의 $('slider)과 같음 */}
                <figure>01</figure>
                <figure>02</figure>
                <figure>03</figure>
            </MainSlider>
            <div className="arrows">
                <i className="xi-arrow-left"
                    onClick={() => (Ms.current.slickPrev())}></i>
                {/* console.log(Ms.current) current는 객체를 뿌려준다  */}
                <i className="xi-arrow-right"
                    onClick={() =>( Ms.current.slickNext())}></i>
            </div>

        </div>
    )
}

export default MainVisual;