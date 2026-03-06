interface Props {
  title: string;
  items: string[];
  color: "text-cyan-400" | "text-purple-400";
}

export default function CategorySection({ title, items, color }: Props) {
  const hoverColor =
    color === "text-purple-400"
      ? "hover:text-purple-400"
      : "hover:text-cyan-400";

  const borderColor =
    color === "text-purple-400"
      ? "border-purple-500/30 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
      : "border-cyan-400/20 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.2)]";

  return (
    <div className={`bg-black/40 backdrop-blur-md border ${borderColor} p-6 rounded-2xl transition-all duration-300 h-full`}>
      <h2 className={`${color} text-2xl font-bold mb-4 tracking-wide`}>
        {title}
      </h2>

      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className={`text-gray-300 ${hoverColor} transition-colors duration-200 cursor-pointer`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}