import { useRef, useState } from "react";
import './basic.css';



// const App = () => {
//   //let num = 1;
//   //console.log('App') // index.js에 React.StrictMode가 관여해서 console에 2번 찍힘
// 
//   
//   const [num, setNum] = useState(1);  // 변수와 변수를 바꾸는 함수를 쌍으로 가지고 다님
//   //const link = useRef(1);
//   //console.log(link.current); 아직 리턴전이라서 undefined라고 뜸.
//   //console.log(num)
//   //console.log('App')
// 
//   return (
//     <>
//       {num}{/*  {link.current} */}
//       <p>11111</p>
//       {/* <div ref={link}>000</div> */}
//       <div>000</div>
//       {/* {console.log(num, link.current)} */}
//       <button onClick={
//         () => (
//           //num = num + 1, // num ++, 
//           setNum(num + 1),
//           console.log(num)
//           //link.current = link.current + 1,
//           //console.log(link.current)
//         )
//       }>click</button>
//     </>
//   )
// }


const App = () => { 
  const [num, setNum] = useState(1);
  const [toggle, setToggle] = useState(true);  // true는 초기값@!

  const Test = () => {
    return (
      <div>
        hello
      </div>
    )
  } 

  return (
    <>
      {num}
      <section className={ toggle ? '' : 'on'}>
         {toggle ? 'loading...' : <Test />}
       </section>
      <div>000</div>
      <button onClick={
        () => (
          setNum(num + 1),
          console.log(toggle),
          setToggle(!toggle),
          console.log(num)
        )
      }>click</button>
    </>
  )
}
 

export default App;




// const App = () => { 
//   const Home = () => { 
//   return (
//     <div>007</div>
//   )
//   }
//   const a = 'A';
//   return (
//     <p>
//       {a}
//       <Home />
//     </p>    
//   )
// }
// const App = () => { 
//   return (
//     <p>
//       <Home />
//     </p>    
//   )
// } // p태그안에 div 들어갈 수 없다고 console 창 에러뜸
// 
// // 함수표현식 호이스팅 안되는데 리액트는 됨
// 
// 
// const Home = () => { 
//   return (
//     <div>007</div>
//   )
// }
// 함수에 이름이 없어서 무명함수라고 함
//const App = function () { 
//  return (
//    <i>002</i>
//  )
//}

// function App() {
//   return (
//     <div>001</div>
//   )
// }

//export default App;  default는 하나만 내보낼때 씀
//export {App, Home};  만약 함수가 두개라면 두개 내보낼 땐 이렇게 export {sayHi, sayBye};

