import React, { useEffect,useState } from 'react';


const List = ({items}) => {
  // cоздаем состояние для хранения измененных элементов списка
  const [listItems, setListItems] = useState(items);

  //useEffect для синхронизации App и List,
  //список, который обновляется в родительском компоненте, например, через 
  //добавление нового элемента. Если бы не было useEffect, l
  //istItems не обновились бы автоматически, 
  //видели бы старое состояние списка до следующего перерисовки

  //useEffect будет вызван каждый раз при изменении items
  
  useEffect(()=>{setListItems(items)},[items])
  //обновление элемента с нужным id
  const handleClick = (id) => {    
    //map создает новый массив
    //и надо вернуть либо старый item, либо обновленный.
    const newItems = listItems.map((item) => {
      // создаем новый объект с обновленным свойством
      return item.id === id ? { ...item, title: '!!!' + item.title } : item 
    });        
    setListItems((newItems)); // Обновляем состояние
    // создание элементов списка на основе измененного состояния   
  }
    //В arrOfItems используется listItems вместо items,
    //актуальное состояние списка:oтображение списка на основе текущего состояния
     

  const arrOfItems = listItems.map((item) =>
    <li key={item.id}>
      {item.title}
      {/* Используя стрелочную функцию, создаем функцию, 
      которая будет вызвана при срабатывании события. 
      Это позволяет передать аргумент item.id в функцию handleClick.
      Если бы просто onClick={handleClick(item.id)}, эта функция 
      была бы вызвана сразу при рендеринге компонента, а не по клику. 
      стрелочная функция обеспечивает отложенный вызов handleClick, 
      который произойдет только когда пользователь нажимает на кнопку. */}

      <button onClick ={()=> handleClick(item.id)}>
          Кнопка {item.id+1}
      </button>  
    </li>
  );
  return (
    <ul>
      {arrOfItems} 
             
    </ul>
  )
}

export default List
