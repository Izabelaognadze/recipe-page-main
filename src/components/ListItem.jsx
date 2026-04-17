export const ListItem = ({ children, color = "rose" }) => {
  const bulletColor =
    color === "brown" ? "bg-clr-brown-800" : "bg-clr-rose-800";
  return (
    <li className="flex items-start gap-4">
      <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${bulletColor}`} />
      <div className="flex-1">{children}</div>
    </li>
  );
};
