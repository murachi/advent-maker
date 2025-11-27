import { useState } from 'react';
import type { Route } from "./+types/home";
import { Sweets } from "../advent/sweets";
import { Calendar } from "../advent/calendar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [sweetsItems, setSweetsItems] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);

  const doSweetsChange = (items: string[]) => {
    console.log("doSweetsChange called");
    console.log(items);
    setSweetsItems(items);
    setCount(prevCount => prevCount + 1);
  };

  return <>
    <Sweets onChange={doSweetsChange} />
    <Calendar items={sweetsItems} count={count} />
  </>;
}
