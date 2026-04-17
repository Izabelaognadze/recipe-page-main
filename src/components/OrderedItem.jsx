export const OrderedItem = ({ title, desc }) => {
  return (
    <li className="pl-4 marker:text-clr-brown-800 marker:font-bold">
      <p>
        <span className="text-preset-5 font-bold">{title}:</span> {desc}
      </p>
    </li>
  );
};
