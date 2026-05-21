import { Button, Input, Switch, Table, type ButtonProps } from "./lib";

export default function App() {
  return (
    // <Button>Hello world</Button>
    <div className="flex flex-col items-start">
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
