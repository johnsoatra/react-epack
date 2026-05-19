import { useState } from "react";
import PasswordInput from "./components/Input/PasswordInput";
import Button from "./components/Button/Button";
import Table from "./components/Table/Table";
import Icon from "./components/Icon/Icon";
import Hero from "./assets/hero.png";
import { InfoCard } from "./components/Card/InfoCard";
import Switch from "./components/Switch/Switch";
import Textarea from "./components/Textarea/Textarea";

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full flex flex-col p-5">
      <button onClick={() => setShowPassword(s => !s)}>show</button>
      <InfoCard
        icon={{ svg: { path: 'topup' } }}
        title="Hello world" />
      <Table
        columns={[
          {
            key: 'name',
            title: 'Name',
          },
          {
            key: 'age',
            title: 'Age',
          },
          {
            key: 'gender',
            title: <>Gender</>,
          }
        ]}
        rows={[
          {
            id: '1',
            name: 'John Doe',
            age: 20,
            gender: 'male'
          },
          {
            id: '2',
            name: 'Good User',
            age: 24,
            gender: 'female'
          }
        ]}
        // th={{
        //   className: 'border-r-0'
        // }}
        // td={{
        //   className: 'border-r-0'
        // }}
        renderCell={({ row, column }) => <span>
          {(showPassword && column.key === 'name') ? <Icon
            image={{
              alt: 'test',
              src: Hero,
            }}
          /> : row[column.key]}
        </span>}
      />
      {/* <Switch id="test" name="test" />
      <Textarea id="test" placeholder="test text area" prefix={{ node: <p>Hello</p> }}/> */}
      <label htmlFor="cars">Choose a car:</label>
      <select id="cars" name="cars">
        <option value="volvo" className="bg-red-300">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
}
