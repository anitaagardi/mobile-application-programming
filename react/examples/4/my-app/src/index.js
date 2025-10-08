import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import FormattedMoney from './components/FormattedMoney';
import FormattedDate from './components/FormattedDate';
import ExpenseEntryItemList from './components/ExpenseEntryItemList';
import PropsExample from './components/PropsExample';
import DefaultPropsExample from './components/DefaultPropsExample';
import PropsInitConstructor from './components/PropsInitConstructor';
import EventBindingExample from './components/EventBindingExample';

const root = ReactDOM.createRoot(document.getElementById('root'));
const items = [
   { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food" },
   { id: 1, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category: "Food" },
   { id: 1, name: "Cinema", amount: 210, spendDate: "2020-10-16", category: "Entertainment" },
   { id: 1, name: "Java Programming book", amount: 242, spendDate: "2020-10-15", category: "Academic" },
   { id: 1, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category: "Food" },
   { id: 1, name: "Dress", amount: 2000, spendDate: "2020-10-25", category: "Cloth" },
   { id: 1, name: "Tour", amount: 2555, spendDate: "2020-10-29", category: "Entertainment" },
   { id: 1, name: "Meals", amount: 300, spendDate: "2020-10-30", category: "Food" },
   { id: 1, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category: "Gadgets" },
   { id: 1, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category: "Academic" }
]
root.render(
  <React.StrictMode>
    <First />
    <Second />
    <Third />
    <Fourth />
    <FormattedMoney value="12"/>
    <FormattedDate value="2015-05-12"/>
    <ExpenseEntryItemList items={items} />
    <PropsExample headerProp = "Header from props..." contentProp = "Content from props..."/>
    <DefaultPropsExample />
    <PropsInitConstructor name="Name1"/>
    <EventBindingExample name="Name2" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
