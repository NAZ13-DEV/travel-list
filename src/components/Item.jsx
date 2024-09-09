const Item = ({ description, quantity, packed, onDeleteItems, id,onToggleItem }) => {

  return (
    <li>
      <input type="checkbox" onChange={() => onToggleItem(id)} value={Item.packed}/>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItems(id)}>❌</button>
    </li>
  );
};
export default Item;
