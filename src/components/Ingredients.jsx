import { ListItem } from "./ListItem";

export const Ingredients = () => {
  return (
    <div className="">
      <h4 className="text-preset-2 text-clr-brown-800 mb-6">Ingredients</h4>
      <ul className="flex flex-col gap-2 list-disc marker:text-clr-brown-800 text-preset-4">
        <ListItem color="brown">2-3 large eggs</ListItem>
        <ListItem color="brown">Salt, to taste</ListItem>
        <ListItem color="brown">Pepper, to taste</ListItem>
        <ListItem color="brown">1 tablespoon of butter or oil</ListItem>
        <ListItem color="brown">
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </ListItem>
      </ul>
    </div>
  );
};
