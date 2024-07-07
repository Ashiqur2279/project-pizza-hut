import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurants";

// const isValidPhone = (str) => {
//   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
//     str
//   );
// };

const isValidPhone = (str) => {
  // Improved regular expression for better phone number validation
  const phoneRegex =
    /^\+?([0-9]{1,4})?[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  return phoneRegex.test(str);
};

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];
const CreateOrder = () => {
  const navigation = useNavigation();
  const formErrors = useActionData();

  const cart = fakeCart;
  return (
    <div>
      <h2>Ready to order? Let&apos;s go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
            {formErrors?.phone && formErrors.phone}
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input type="checkbox" name="priority" id="priority" />

          <label htmlFor="priority">
            want to you give your order priority?
          </label>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          {navigation.state === "submitting" ? (
            <button disabled>Order Placing</button>
          ) : (
            <button>Order Now</button>
          )}
        </div>
      </Form>
    </div>
  );
};

export const createOrderAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log(data);
  const orderData = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  //phone number validation
  const errors = {};

  if (!isValidPhone(orderData.phone)) {
    errors.phone = "Please input a valid phone number";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  //if all are okay then place an order.
  const newOrder = await createOrder(orderData);

  return redirect(`/order/${newOrder.data.id}`);
};

export default CreateOrder;
