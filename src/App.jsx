import './App.css'
import { Ingredients } from './components/Ingredients'
import { Instructions } from './components/Instructions'
import { ListItem } from './components/ListItem'
import { Nutrition } from './components/nutrition'
import { Recipe } from './components/Recipe'

function App() {
  return <div className='px-8 text-clr-stone-900 md:p-10 bg-white md:max-w-154 md:mx-auto md:my-32 md:rounded-3xl lg:max-w-184  '>
    <img src="src\assets\images\image-omelette.jpeg" alt="" className='-mx-8 w-[calc(100%+4rem)] max-w-164 h-auto object-cover md:mx-0 md:w-full md:rounded-3xl' />
    <Recipe />
    <Ingredients />

    <hr className='border-clr-stone-150' />

    <Instructions />

    <hr className='border-clr-stone-150' />
    <Nutrition />
  </div>

}

export default App
