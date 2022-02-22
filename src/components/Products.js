import { useState, useEffect } from "react";
import Product from "./Product";
import Info from "./Info";
import Searching from "./Searching";
import ReactPaginate from "react-paginate";

const Products = () => {
  const [items, setItems] = useState([]);
  const [searching, setSearching] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const contentPerPage = 10;
  const pagesVisited = pageNumber * contentPerPage;
  const pageCount = Math.ceil(items.length / contentPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayContent = items
    .slice(pagesVisited, pagesVisited + contentPerPage)
    .map((item, i) => {
      return <Product contest={item} key={i} />;
    });

  useEffect(() => {
    setSearching(true);
    const getContests = async () => {
      const details = await fetch(`https://kontests.net/api/v1/all`, {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      });
      const data = await details.json();
      setItems(data);
      setSearching(false);
    };

    getContests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (searching === true) {
    return <Searching />;
  } else {
    return (
      <section className="p-6 pb-10 lg:pb-20">
        <Info />
        <div className="container pt-4">
          <div className="flex flex-wrap -mx-4">{displayContent}</div>
          <div className="pt-6">
            <ReactPaginate
              previousLabel={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              nextLabel={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationContainer"}
              disabledClassName={"previousBtn"}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              activeClassName={"activeBtn"}
            />
          </div>
        </div>
      </section>
    );
  }
};

export default Products;
