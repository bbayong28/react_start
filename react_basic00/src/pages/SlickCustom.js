import { useEffect, useRef, useState} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

//useRef라는 dom을 컨트롤 할수있는 리액트 훅을 써야함


const SlickCustom = () => { 
    const SlideEle = [
        { id: 1, h2: '01 JEWELLERT COLLECTION EVENT', P: '모던하면서도 클래식한 디자인들을 완벽하게 표현한 그라프 하우스의 시그니처 컬렉션은 다양한 컷, 스톤 그리고 색상들을 멋진 조합으로 선사합니다.' },
        { id: 2, h2: '02 JEWELLERT COLLECTION EVENT', P: '모던하면서도 클래식한 디자인들을 완벽하게 표현한 그라프 하우스의 시그니처 컬렉션은 다양한 컷, 스톤 그리고 색상들을 멋진 조합으로 선사합니다.' },
        { id: 3, h2: '03 JEWELLERT COLLECTION EVENT', P: '모던하면서도 클래식한 디자인들을 완벽하게 표현한 그라프 하우스의 시그니처 컬렉션은 다양한 컷, 스톤 그리고 색상들을 멋진 조합으로 선사합니다.' },
        { id: 4, h2: '04 JEWELLERT COLLECTION EVENT', P: '모던하면서도 클래식한 디자인들을 완벽하게 표현한 그라프 하우스의 시그니처 컬렉션은 다양한 컷, 스톤 그리고 색상들을 멋진 조합으로 선사합니다.' },
    ];

    



    const s1 = useRef();
    const [num, setNum] = useState();

    useEffect(() => {
        setNum(0)
    }, []);
    
    const set = {
        arrows: false,        
        autoplay: true,
        loop:true,
        afterChange: idx => {
            setNum(idx)
        },
    }
    

    return (
        <>
            <Slider ref={s1} {...set} className="MainVisual">
                {
                    SlideEle.map((itm, idx) => <figure
                        key={itm.id}
                        className={`itm0${idx + 1} ${idx == num ? 'on' : ''}`}
                    >   
                        <div className="slogan">
                           <h2>{itm.h2}</h2>
                            <p>{itm.P}</p>
                            <a href="#!">more</a>
                        </div>
                        
                    
                        </figure>)
                }
                {/* 
                <figure>01</figure>
                <figure>02</figure>
                <figure>03</figure>
                 */}
            </Slider>


            <div className="num">
                {num + 1} / {SlideEle.length}
            </div>


            <div className="slideArrow">
                {/* console.log(s1) 먼저 찍어보고 current 찍어봄 */}
                {/* 태그에 직접 이벤트를 달아버림 */}
                <i className='xi-arrow-left' onClick={() => s1.current.slickPrev()}></i>
                <i className='xi-arrow-right' onClick={() => s1.current.slickNext()}></i>
            </div>

            <ul className="slideDot">
                {
                    /* $().on('click', function(){var idx = $(this).index();
                    $().slick('slickGoTo',idx)         })  를 요롷게(밑에) 만듬 */
                    SlideEle.map((dot, idx) => <li key={dot.id}
                        onClick = {() => 
                            s1.current.slickGoTo(idx)
                        }
            
                        className={idx == num ? 'on' : ''}
                    >
                        {dot.id}</li>)
                }
            </ul>
        </>
    )
}
export default SlickCustom;