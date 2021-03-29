import React from "react";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="pagination__item">
              {number === currentPage ? (
                <p className="pagination__link active">{number}</p>
              ) : (
                <p
                  onClick={() => paginate(number)}
                  className={"pagination__link"}
                >
                  {number}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
