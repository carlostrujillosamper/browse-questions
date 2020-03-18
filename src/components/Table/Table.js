import React, { useState, useEffect } from "react";
import {
  useTable,
  usePagination,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded
} from "react-table";
import "./Table.scss";

function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, 
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
      } = useTable(
        {
          columns,
          data,
          initialState: { pageIndex: 0 },
        },
        useSortBy,
        usePagination
      )

  return (
    <React.Fragment>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}
                {column.render("Header")==='ID'?
            <span>
           <i class="fa fa-sort" aria-hidden="true"></i>
          </span>:null    
            }
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button className='first-button' onClick={() => gotoPage(0)} >
          {'1'}
        </button>
        <button onClick={() => gotoPage(1)} >
          {'2'}
        </button>
        <button onClick={() => gotoPage(2)} >
          {'3'}
        </button>
        <button onClick={() => gotoPage(3)} >
          {'4'}
        </button>

        <button className='last-button' onClick={() => nextPage()}>
          {'>'}
        </button>
      </div>
      
    </React.Fragment>
  );
}

export default Table;
