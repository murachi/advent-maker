import { useState, useEffect } from 'react';

export function Calendar({items, count}: {
    items: string[],
    count: number
}) {
    const [calendar, setCalendar] = useState<{day: number, sweet: string}[]>([]);

    useEffect(() => {
        console.log(items);
        const arr = Array(24);
        arr.fill('');
        const calendar_buf = arr
            .map((e, i) => { return { day: i + 1, fact: Math.random() }; })
            .sort((a, b) => a.fact - b.fact)
            .map((e, i) => { return { day: e.day, sweet: items[i % items.length] }; })
            .sort((a, b) => a.day - b.day);
        console.log(calendar_buf[0]);
        setCalendar(calendar_buf);
    }, [items, count]);

    return (
        <table className="text-sm text-left text-body">
            <thead className="bg-neutral-secondary-soft border-b rounded-base border-default">
                <tr>
                    <th className="px-4 py-2 font-medium">日付</th>
                    <th className="px-6 py-2 font-medium">お菓子</th>
                </tr>
            </thead>
            <tbody>
                {calendar.map(elem =>
                    <tr className="bg-neutral-primary border-b border-default">
                        <td className="px-4 py-1">12 / {elem.day}</td>
                        <td className="px-6 py-1">{elem.sweet}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}