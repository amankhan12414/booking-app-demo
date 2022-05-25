import React, { useState } from "react";

import "./booking-form.scss";

type Props = {
  restaurantName: string;
};

const BookingForm = ({ restaurantName }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [isError, setIsError] = useState(true);

  return (
    <div className="booking-form-container">
      <h4>Book now</h4>
      <form>
        <label htmlFor="user-name">Name</label>
        <input
          name="user-name"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="user-email">Email</label>
        <input
          name="user-email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => {
            const match = e.target.value.match(
              /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g
            );
            setIsError(!match ? true : false);
          }}
        />
        {isError && <p>Complete form correctly</p>}
        <button disabled={!name || !email || isError}>Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;

