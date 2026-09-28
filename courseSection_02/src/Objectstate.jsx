import React from "react";
import Star from "./Star";

const Objectstate = () => {
  const [contact, setContact] = React.useState({
    firstname: "nouh",
    lastname: "sayeddd",
    Phone: "05565958655",
    email: "kddhg@gmail.com",
    isFavorite: false,
  });

  function handleIcon() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <div className="flex justify-center items-center">
      <article className="w-70 h-auto m-5 border-2 border-amber-600">
        <img
          src="/src/assets/images/1.jpg"
          alt=""
          className="rounded-4xl"
        />
  <Star
          isFilled={contact.isFavorite}
          onClick={handleIcon}
        />
        <div>
          <h1 className="ml-5 mt-2">
            {contact.firstname} {contact.lastname}
          </h1>

          <p className="ml-5 mt-2">{contact.Phone}</p>

          <h3 className="ml-5 mt-2">{contact.email}</h3>

          <p className="ml-5 mt-2">
            {contact.isFavorite.toString()}
          </p>
        </div>

      
      </article>
    </div>
  );
};

export default Objectstate;