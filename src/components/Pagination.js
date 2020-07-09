import React from 'react';

const Pagination = (props) => {
  const TotalPageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    TotalPageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {TotalPageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => props.paginate(number)} href='#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
