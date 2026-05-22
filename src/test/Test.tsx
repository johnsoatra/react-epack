import { Button, GroupSelect, Input, Switch, Table, type ButtonProps } from "../lib";
import TestCard from "./TestCard";
import TestLine from "./TestLine";
import TestPopover from "./TestPopover";

export default function () {
  return (
    // <Button>Hello world</Button>
    <div className="flex flex-col items-start">
      <TestCard />
      <TestLine />
      <TestPopover />
      <Button className="border border-gray-300">sdfdsf</Button>
      <GroupSelect
        id="test"
        options={{
          '1': [{ label: 'f', value: 2 }],
          age: [
            { label: 1, value: 1 },
            { label: 2, value: 2 },
          ],
          gender: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ]
        }}
        optgroup={(group) => ({
          label: group === 'age' ? 'Age' : 'Gender',
        })}
        option={({ option, group }) => ({
          'data-test': group,
          className: option.value === 'male' ? 'text-red-400' : '',
          children: option.value === 'male' ? '11' : option.label,
        })}
      />
      <Switch id="f" />
      {/* <Input id="test" placeholder="test"/> */}
      <Table
        columns={[
          {
            label: 'Test1',
            index: 'name',
          },
          {
            label: 'Test2',
            index: 'gender',
          },
        ]}
        rows={[
          {
            name: 'John Doe',
            gender: 'male',
          },
          {
            name: 'Zhan Nina',
            gender: 'female',
          },
        ]}
        th={{ className: 'border-r-0' }}
        td={{ className: 'border-r-0' }}
        className="rounded-sm border-red-300"
      />
    </div>

  );
}
