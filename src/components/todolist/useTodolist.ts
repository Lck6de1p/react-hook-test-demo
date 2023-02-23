import { useState } from "react";
let uid = 0;

export interface Item {
  key: number;
  title: string;
}
export type TypeList = Item[];

const useTodolist = () => {
  const [list, setList] = useState<TypeList>([]);
  const handleRemove = (index: number) => {
    setList((v) => v.filter((v, idx) => idx !== index));
  };
  const handleAdd = (title: string) => {
    setList((v) => [...v, { key: uid++, title }]);
  };
  return {
    list,
    handleRemove,
    handleAdd,
  };
};

export default useTodolist;
