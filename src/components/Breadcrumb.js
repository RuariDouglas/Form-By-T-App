import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const splitLocation = location.pathname.split("/");
  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      <p className="breadcrumb__arrow"> &gt; </p>

      {splitLocation[3] ? (
        <>
          <Link to={`/collections/${splitLocation[2]}`}>
            {splitLocation[2]}
          </Link>
          <p className="breadcrumb__arrow"> &gt; </p>
          <p>{splitLocation[3]}</p>
        </>
      ) : (
        <p>{splitLocation[2]}</p>
      )}
    </div>
  );
};

export default Breadcrumb;
