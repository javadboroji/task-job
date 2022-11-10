import React, { useEffect, useState ,useContext} from "react";
import ReactPaginate from "react-paginate";
import List from "../List-item/List";
import { newContext } from "../../Context/Context";
import '../../../App.css'

export default function Pagenat() {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const {list} = useContext(newContext);

  

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    //console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(list.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(list.length / itemsPerPage));

  }, [itemOffset, itemsPerPage,list]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % list.length;
   
    setItemOffset(newOffset);
  };

  return (
    <div className="pagantion-contaiiner">

      <List currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
