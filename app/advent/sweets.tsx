import { useState, type ChangeEvent, type MouseEvent } from 'react';

export function Sweets({onChange}: {
    onChange: (items: string[]) => void
}) {
    let input_item: string = '';
    const [items, setItems] = useState<string[]>([]);

    const changeInputItem = (event: ChangeEvent<HTMLInputElement>): void => {
        input_item = event.target.value;
    };

    const addItem = (event: MouseEvent<HTMLButtonElement>): void => {
        setItems((prevState) => [...prevState, input_item]);
    };

    const decideItems = (event: MouseEvent<HTMLButtonElement>): void => {
        onChange(items);
    };

    return (
        <form>
            <p>
                <label>
                    お菓子の種類：
                    <input 
                        type="text" name="sweet" size={20}
                        className="border py-1"
                        onChange={changeInputItem} />
                </label>
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                    onClick={addItem}
                >追加</button>
            </p>
            <ul className="list-disc list-inside">
                {items.map(item => <li>{item}</li>)}
            </ul>
            <p>
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={decideItems}
                >実行!!</button>
            </p>
        </form>
    );
}
