import React, { useReducer } from "react";

// Initial state
const initialFormState = {
  username: "",
  email: "",
};

// Reducer function
function formReducer(state, action) {
  switch (action.type) {
    case "updateField":
      return { ...state, [action.field]: action.value };
    case "reset":
      return initialFormState;
    default:
      return state;
  }
}

const FormReducer = () => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const handleChange = (e) => {
    dispatch({
      type: "updateField",
      field: e.target.name,
      value: e.target.value,
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${formState.username}, Email: ${formState.email}`);
    dispatch({ type: "reset" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "300px", margin: "50px auto" }}>
      <h3>Form with useReducer</h3>
      <div>
        <label>Username: </label>
        <input
          name="username"
          value={formState.username}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>Email: </label>
        <input
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" style={{ marginTop: "15px" }}>Submit</button>
    </form>
  );
};

export default FormReducer;
