import { Button, GroupSelect, Input, Switch, Table, type ButtonProps } from "../lib";

export default function () {
  return (
    // <Button>Hello world</Button>
    <div className="flex flex-col items-start">
      <GroupSelect
        id="test"
        options={{
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
        option={({ option }) => ({
          // key: 1,
          className: option.value === 'male' ? 'text-red-400' : '',
          children: option.value === 'male' ? '11' : option.label,
        })}
      />
      <Switch id="s" />
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
