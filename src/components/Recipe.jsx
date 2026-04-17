import { ListItem } from "./ListItem"

export const Recipe = () => {
    return <div className='mt-10'>
        <h1 className="text-preset-1  mb-6">Simple Omelette Recipe</h1>
        <p className='text-preset-4'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats. </p>
        <div className="my-8 bg-clr-rose-50 rounded-xl p-6">
            <h5 className='text-clr-rose-800 text-preset-3 mb-4'>Preparation time</h5>
            <ul className="flex flex-col gap-2 list-disc marker:text-clr-rose-800 ">
                <ListItem><strong>Total:</strong> Approximately 10 minutes</ListItem>
                <ListItem><strong>Preparation:</strong> 5 minutes</ListItem>
                <ListItem><strong>Cooking:</strong> 5 minutes</ListItem>
            </ul>
        </div>
    </div>
}