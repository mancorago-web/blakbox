interface Props {
  title: string;
  items: string[];
  color: string;
}

export default function CategorySection({ title, items, color }: Props) {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-cyan-400/20 p-6 rounded-2xl hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] transition-all duration-300">
      <h2 className={`${color} text-2xl font-bold mb-4 tracking-wide`}>
  {title}
</h2>
      <ul className="space-y-2 text-gray-300">
        {items.map((item) => (
  <li
    key={item}
    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
  >
    {item}
  </li>
))}
      </ul>
    </div>
  );
}