const API_URL = "https://react-fast-pizza-api.onrender.com/api";

//get menu function
export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  if (!res.ok) {
    throw Error("Pizza Menu is failed to loading");
  }

  const data = await res.json();

  return data;
}

//create order function
export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw Error(`order failed`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw Error(`Failed to confirm your order. Please try again`);
  }
}

//get order function
export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);

  if (!res.ok) {
    throw Error(`Failed to loading the order no: ${id}`);
  }

  const data = await res.json();

  return data;
}

//update order function
export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw Error("Failed to update your order");
    }
    //don't need to return anything
  } catch (error) {
    throw Error("Failed to updating your order");
  }
}
