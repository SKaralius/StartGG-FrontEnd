import React from "react";

export default function Pages({
  currentPage,
  setPage,
}: {
  currentPage: number;
  setPage: (arg0: number) => void;
}) {
  function handlePageChange(isChangeToNext: boolean) {
    isChangeToNext ? setPage(currentPage + 1) : setPage(currentPage - 1);
  }
  return (
    <div className="pages">
      {currentPage === 0 ? null : (
        <button className="previous" onClick={() => handlePageChange(false)}>
          Previous
        </button>
      )}
      {currentPage === 3 ? null : (
        <button className="next" onClick={() => handlePageChange(true)}>
          Next
        </button>
      )}
    </div>
  );
}
