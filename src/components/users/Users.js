import UserDetailData from "./UserDetailData";

const DUMMY_USERS = [
  {
    id: "p1",
    price: 6,
    title: "My first book",
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    price: 5,
    title: "My second book",
    description: "This is a second book",
  },
];

const TableData = () => {
  return (
    <section >
      <h2>table of all users in our bank.</h2>
      <ul>
        {DUMMY_USERS.map((product) => (
          <UserDetailData
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default TableData;