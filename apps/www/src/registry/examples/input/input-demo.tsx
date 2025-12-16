import { Input } from "~/registry/ui/input";

export function InputDemo() {
  return (
    <div className="flex flex-col flex-wrap gap-4 md:flex-row">
      <Input placeholder="Email" type="email" />
      <Input aria-invalid="true" placeholder="Error" type="text" />
      <Input placeholder="Password" type="password" />
      <Input placeholder="Number" type="number" />
      <Input placeholder="File" type="file" />
      <Input placeholder="Tel" type="tel" />
      <Input placeholder="Text" type="text" />
      <Input placeholder="URL" type="url" />
      <Input placeholder="Search" type="search" />
      <Input placeholder="Date" type="date" />
      <Input placeholder="Datetime Local" type="datetime-local" />
      <Input placeholder="Month" type="month" />
      <Input placeholder="Time" type="time" />
      <Input placeholder="Week" type="week" />
      <Input disabled placeholder="Disabled" />
    </div>
  );
}
