interface CategorySectionProps {
  title: string;
  items: string[];
  color?: "cyan" | "purple";
}

export default function CategorySection({
  title,
  items,
  color = "cyan",
}: CategorySectionProps) {

  const glow =
    color === "purple"
      ? "hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
      : "hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]";

  const border =
    color === "purple"
      ? "border-purple-500/30"
      : "border-cyan-400/30";

  const titleColor =
    color === "purple"
      ? "text-purple-400"
      : "text-cyan-400";

  return (
    <div
      className={`bg-black/40 backdrop-blur-md border ${border} p-6 rounded-2xl transition-all duration-300 ${glow}`}
    >
      <h2 className={`${titleColor} text-2xl font-bold mb-4 tracking-wide`}>
        {title}
      </h2>

      <ul className="space-y-2">
        {items.map((item, index) => (
  <li
    key={index}
    className={`text-gray-300 cursor-pointer hover:${color} transition-colors duration-300`}
  >
    {item}
  </li>
))}
      </ul>
    </div>
  );
}