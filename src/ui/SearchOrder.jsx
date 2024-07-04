import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please provide your order id"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchOrder;
