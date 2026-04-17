import { ListItem } from "./ListItem";
import { OrderedItem } from "./OrderedItem";

export const Instructions = () => {
  const instructionData = [
    {
      title: "Beat the eggs",
      desc: " In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      title: "Heat the pan",
      desc: " Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      title: "Cook the omelett",
      desc: " Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface. ",
    },
    {
      title: "Add fillings (optional)",
      desc: " When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      title: "Fold and serve",
      desc: " As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      title: "Enjoy",
      desc: "Serve hot, with additional salt and pepper if needed.",
    },
  ];
  return (
    <div className="">
      <h2 className="text-preset-2 text-clr-brown-800 mb-6">Instructions</h2>
      <ol className="list-decimal list-outside ml-6 flex flex-col gap-2  text-preset-4">
        {instructionData.map((step, index) => (
          <li
            key={index}
            className="pl-4 marker:text-clr-brown-800 marker:font-bold text-clr-stone-600"
          >
            <p>
              <span className="text-preset-5 font-bold">{step.title}: </span>
              {step.desc}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};
