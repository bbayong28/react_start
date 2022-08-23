import Some from './some';

//const Test = (props) => { 
const Test = ({ list, age, name, onClick }) => {
  console.log(onClick)
  return (
    /* jsx안에서 자바스크립트를 전달하려면 중괄호를 치고 씀 */
    <div>
      {/* {props?.list} ?란  prop 가 있는지보고 있으면 list */}
      {/* <h2>my {props?.list} {props.age} 친구{props.name} list</h2>  */}
      <button onClick={onClick}>^^*</button>
      <h2>
        my {list} {age} 친구{name} list 
      <button onClick={
        () => (
          /* console.log({list}) */
          alert(list)
          )
        }>click</button>
      </h2>
      <Some list={ list } />
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
    </div>
  )
}

export default Test;