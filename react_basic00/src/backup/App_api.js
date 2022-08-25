import TopBanner from "./pages/TopBanner";
import ListTest from "./pages/ListTest";
import './basic.css';
import { useEffect, useState } from 'react'



const App = () => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setData(json))
      /* const init = async () =>
      await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setData(json)) 
        
        init();*/


  }, []);

  //axios

  //JSON.parse()

  // console.log (Object(data[0]).id)
    
  // async await ????
 
   
 
 // 이렇게 하면 무한반복으로 스크롤이 계속 짧아짐. 이걸 위처럼 하면 무한반복 멈춤
 // https://jsonplaceholder.typicode.com/에서 긁어온 것 아래 3줄
 // fetch('https://jsonplaceholder.typicode.com/todos/1')
 // .then(response => response.json()) /* response를 json으로 바꿔줌 */
 // .then(json => console.log(json))/* 바뀐 json을 console에 찍어줌 */
 // .then(json => setData(json))
 
 
 //키값이 다 ""로 들어옴 아마 json이 이걸 객체로 바꿔주지 않을까?
 // {
 // 	"userId": 1,
 // 	"id": 1,
 // 	"title": "delectus aut autem",
 // 	"completed": false
 // }
 
   return (
     <div>
       {
        data.map(it => <li key={it.id}>{it.title}</li>).slice(0,10)
         
 }
     </div>
   )
 }



export default App;
