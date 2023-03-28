import './App.css';
import Item from './components/Item';
import ItemDate from  './components/ItemDate';

function App() {
  const itemTwo="Nirma";
  const response = [
    {
      itemName:"Nirma1",
      itemDate: "20",
      itemMonth: "June",
      itemyear:"2001"
    },
    {
      itemName:"Nirma2",
      itemDate: "202",
      itemMonth: "June2",
      itemyear:"2002"
    },
    {
      itemName:"Nirma3",
      itemDate: "203",
      itemMonth: "June3",
      itemyear:"2003"
    }
  ];
  return (
    <div>
      <Item name="abc1"></Item>
      <ItemDate day="20" month="20" year="20"></ItemDate>

      <Item name={itemTwo}></Item>
      <ItemDate day="30" month="30" year="30"></ItemDate>

      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemyear}></ItemDate>
      <div>this is me here</div>
    </div>
  );
}
export default App;
