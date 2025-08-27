
function List({ category = "category", items = [] }) {


    //fruits.sort((a,b)=>a.name.localeCompare(b.name));
    //fruits.sort((a,b)=>b.name.localeCompare(a.name));
    //fruits.sort((a,b)=>a.calories - b.calories);
    //fruits.sort((a,b)=>b.calories - a.calories);

    //const lowCalFruits = fruits.filter(fruit => fruit.calories <100);

    //const highCalFruits = fruits.filter(fruit => fruit.calories >100);

    const listItems = items.map(item =><li key={item.id}>
        {item.name}:&nbsp; <b>{item.calories}</b></li>);


    return(<div>
        <h3>{category}</h3>
        <ol>{listItems}</ol>
    </div>);
}

export default List