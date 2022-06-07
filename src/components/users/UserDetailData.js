import Card from "../UI/Card";
import { useDispatch } from "react-redux";

import { usersActions } from "../../store/table-slice";

const UserDetailData = (props) => {
  const dispatch = useDispatch();

  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    dispatch(
      usersActions.addItemToCart({
        id,
        title,
        price,
        description,
      })
    );
  };

  return (
    <li >
      <Card>
        <header>
          <h3>{title}</h3>
          <div >${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div >
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default UserDetailData;
