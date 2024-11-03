import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
    pageCount: number;
    onPageChange: (selectedItem: { selected: number }) => void;
};

export default function Pagination({ pageCount, onPageChange }: PaginationProps) {
    return (
        <ReactPaginate
            previousLabel={<MdNavigateBefore size={20} />}
            nextLabel={<MdNavigateNext size={20} />}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={onPageChange}
            containerClassName={'pagination'}
            activeClassName={'active'}
        />
    );
}
