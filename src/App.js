import './App.css';
import Item from './components/Item';
import ItemDate from  './components/ItemDate';

function App() {
  const itemTwo="Nirma";
  return (
    <div>
      <Item name="abc1"></Item>
      <ItemDate day="20" month="20" year="20"></ItemDate>

      <Item name={itemTwo}></Item>
      <ItemDate day="30" month="30" year="30"></ItemDate>

      <Item name="abc3"></Item>
      <ItemDate day="40" month="40" year="40"></ItemDate>
      <div>this is me here</div>
    </div>
  );
}
export default App;
