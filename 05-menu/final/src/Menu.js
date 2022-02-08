import React from 'react';

const Menu = ({items}) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const {id, title, price, img, desc} = menuItem;
        return (
          <article className="menu-item" key={id}>
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <div className="price">${price}</div>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  );
};

export default Menu;
