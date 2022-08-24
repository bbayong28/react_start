const DATA = [
  {id : 1, name:'신화영', age:28, sleep: true, gender: '그녀'},
  {id : 2, name:'이인우', age:31, sleep: true, gender: '그'},
  {id : 3, name:'조서우', age:26, sleep: false, gender: '그'}
]

const List = () => { 
  return (
    <ul>
      {
        DATA.map(
          it =>
          <li key={it.id}>
            {it.name} {it.age} {it.sleep ? 'sleep' : 'playing'}
          </li>
        )
      }
    </ul>
  )
}






//const List = () => {
//  return (
//    <ul>
//      {
//        DATA.map(
//          (it, idx) =>
//          <li key={it.id}>
//              {idx + 1}번 {it.name}은 {it.age}살. {it.gender}는 {it.
//              sleep ? '자고있음' : '깨어있음'}.
//          </li>
//        ).slice(0,2).reverse()
//      }      
//    </ul>
//  )
//}


// const List = () => {
//   return (
//     <ul>
//       {
//         DATA.map(function (it) {
//           return (
//             it.name
//           )
//         })
//       }      
//     </ul>
//   )
// }

//const List = () => {
//  return (
//    <ul>
//      {DATA[0].name}은 {DATA[0].age}살 {DATA[0].sleep && '자고있음'},
//      {DATA[1].name}은 {DATA[1].age}살 {DATA[1].sleep && '자고있음'},
//      {DATA[2].name}은 {DATA[2].age}살 {DATA[2].sleep && '자고있음'},
//      
//    </ul>
//  )
//}

// const List = () => {
//   return (
//      <ul>
//       { DATA[0].name}
//       {/* it은 데이터 하나하나 */}
//       <li>{
//         DATA.map(it => <li>{it.name}</li>)}
//         {/* DATA.map(it => { return <li>{it.name}</li>})} */}
//       </li>
//   )
// }

//const List = () => {
//  return (
//     <ul>
//         <li>
//         {DATA[0].name}
//         </li> 
//           {/*  jsx에서 자스 쓸때 중괄호, 객체를 불러올때 키값을 사용해서 불러옴 신화영 이인우 조서우 다 불러오고싶으면 for문 써야함리액트 for문 잘 안씀 대신 map, for each 씀 map을 더 많이 씀 */}
//         <li>
//           {DATA[1].name}
//         </li>
//         <li>
//           {DATA[2].name}
//         </li>
//     </ul>
//  )
//}


export default List;