import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//const allCategories = ['all', ... new Set(items.map((item) => item.category))];
const allCategories = items.reduce(function(values, item){
  if(!values.includes(item.category)){
    values.push(item.category)
  }
  return values;
}, ['all']);
//console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all'){
      return setMenuItems(items)
    }
    else {
      const newItems = items.filter((item)=> {
        return (item.category === category)
      })
      return setMenuItems(newItems)
    }
  }

  return (
    <main>
      <section className='menu section'>
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
