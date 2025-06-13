interface PaginatorProps {
  currentPage: number;
  totalPages: number;
}

export function Paginator({currentPage, totalPages}: PaginatorProps) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const nextPage = currentPage + 1;
  const previousPage = currentPage - 1;
  // TODO: here goes the logic to make the Links work. Feel free to rewrite the jsx part completely
  return (
    <>
      {isFirstPage ?
        <span>Previous</span> :
        <Link href="/results">Previous</Link>
      }
      <span> Page {currentPage} of {totalPages} </span>
      {isLastPage ?
        <span>Next</span> :
        <Link href="/results">Next</Link>
      }
    </>
  );
}

export default Paginator;
