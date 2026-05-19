import { useState } from "react";
import PasswordInput from "./components/Input/PasswordInput";
import Button from "./components/Button/Button";
import Table from "./components/Table/Table";
import Icon from "./components/Icon/Icon";
import Hero from "./assets/hero.png";
import Switch from "./components/Switch/Switch";
import Textarea from "./components/Textarea/Textarea";
import Select from "./components/Select/Select";
import Label from "./components/Label/Label";
import Popover from "./components/Popover/Popover";
import InfoCard from "./components/Card/InfoCard";

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState('1');
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
      {/* <label htmlFor="cars">Choose a car:</label> */}
      <Label htmlFor="test">For card</Label>
      <Select
        id="test"
        value={value}
        options={[
          { label: 'test-1', value: '1' },
          { label: 'test-2', value: '2' },
          { label: 'test-3', value: '3' },
          { label: 'test-4', value: '4' },
        ]}
        option={(data) => ({
          className: value === data.value ? 'bg-red-200' : '',
        })}
        onChange={e => {
          console.log(e.target.value);
          setValue(e.target.value)
        }}
      />
    </div>
  );
}
