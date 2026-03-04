interface Props {
  title: string;
  items: string[];
  color: string;
}

export default function CategorySection({ title, items, color }: Props) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
      <h2 className={`text-2xl font-bold mb-4 ${color}`}>{title}</h2>
      <ul className="space-y-2 text-gray-300">
        {items.map((item, index) => (
          <li key={index} className="hover:text-white transition cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}