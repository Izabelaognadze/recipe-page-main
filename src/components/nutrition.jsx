export const Nutrition = () => {
  return (
    <div className="mt-8 md:mb-10">
      <h4 className="text-preset-2 text-clr-brown-800">Nutrition</h4>
      <p className="text-preset-4 my-6">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>

      <table className="w-full border-collapse">
        <tbody className="divide-y divide-clr-stone-150">
          <tr>
            <th scope="row" className="py-3 text-clr-stone-600">Calories</th>
            <td className="py-3 font-bold text-clr-brown-800 text-left">
              277kcal
            </td>
          </tr>
          <tr>
            <th scope="row" className="py-3 text-clr-stone-600">Carbs</th>
            <td className="py-3 font-bold text-clr-brown-800 text-left">0g</td>
          </tr>
          <tr>
            <th scope="row" className="py-3 text-clr-stone-600">Protein</th>
            <td className="py-3 font-bold text-clr-brown-800 text-left">20g</td>
          </tr>
          <tr>
            <th scope="row" className="py-3 text-clr-stone-600">Fat</th>
            <td className="py-3 font-bold text-clr-brown-800 text-left">22g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
