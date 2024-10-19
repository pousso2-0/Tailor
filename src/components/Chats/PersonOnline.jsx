import React from "react";

const PersonOnline = ({ img, name }) => {
  return (
    <>
    <div className="messanger-box position-relative d-inline-block">
    <img src={img} className="avatar-48 object-cover rounded-circle" alt="messanger-image" />
    </div>
    <p className="mt-2 mb-0 font-size-14 custom-ellipsis text-body">{name}</p>
    </>

  );
};

export default PersonOnline;