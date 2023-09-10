import { Fragment } from "react";

function ListGroup() {
  const items = ["NYC", "SF", "BD", "Tokyo", "Paris"];

  {
    items.map((item) => <li>{item}</li>);
  }

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
