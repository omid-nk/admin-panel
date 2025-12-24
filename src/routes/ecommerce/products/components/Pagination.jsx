function getPaginationPages(currentPage, totalPages) {
  const pages = [];
  let lastPage = 0;

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
      if (lastPage && i - lastPage > 1) {
        pages.push("...");
      }
      pages.push(i);
      lastPage = i;
    }
  }

  return pages;
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = getPaginationPages(currentPage, totalPages);

  return (
    <div className="mt-4 flex flex-wrap items-center justify-center gap-1 sm:gap-2">
      {pages.map((page, index) =>
        page === "..." ? (
          <span
            key={`dots-${index}`}
            className="px-2 text-gray-400 select-none"
          >
            …
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`min-w-9 cursor-pointer rounded-lg px-3 py-1 text-sm transition ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "border hover:bg-blue-50 dark:hover:bg-blue-400/20"
            }`}
          >
            {page}
          </button>
        ),
      )}
    </div>
  );
}

export default Pagination;
