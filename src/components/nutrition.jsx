export const Nutrition = () => {
  const nutritionValue = [
    { name: "Calories", value: "277kcal" },
    { name: "Carbs", value: "0g" },
    { name: "Protein", value: "20g" },
    { name: "Fat", value: "22g" },
  ];
  return (
    <div className="mt-8">
      <h2 className="text-preset-2 text-clr-brown-800">Nutrition</h2>
      <p className="text-preset-4 my-6">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>

      <table className="w-full border-collapse">
        <tbody className="divide-y divide-clr-stone-150">
          {nutritionValue.map((item, i) => (
            <tr key={i}>
              <th
                scope="row"
                className="py-[8.7px] text-start font-normal text-clr-stone-600"
              >
                {item.name}
              </th>
              <td className="py-2 font-bold text-clr-brown-800 text-left">
                {item.value}
              </td>
            </tr>
          ))}
        
        </tbody>
      </table>
    </div>
  );
};
