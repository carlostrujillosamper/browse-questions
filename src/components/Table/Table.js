import React from "react";
import {
  useTable,
  usePagination,
  useFilters,
  useSortBy,
  useGlobalFilter
} from "react-table";
import "./Table.scss";

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter
}) {
  const count = preGlobalFilteredRows.length;

  return (
    <span className='input-wrapper'>
    
    <i className="fa fa-search" aria-hidden="true"></i>
                    

      <input
        value={globalFilter || ""}
        onChange={e => {
          setGlobalFilter(e.target.value || undefined);
        
        }}
        placeholder={`   Search keyword in over ${count} records...`}
        style={{
          fontSize: "1.2rem",
          border: "0",
          width:'30rem',
          backgroundColor:"black",
          color:'white',
          height:'2rem'
        }}
      />
 

    </span>
  );
}




function Table({ columns, data }) {
  const filterTypes = React.useMemo(
    () => ({
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      }
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    gotoPage,
    nextPage,
    state,
    preGlobalFilteredRows,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      filterTypes,
      initialState: { pageIndex: 0 }
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  return (
    <React.Fragment>
    <div className='global-filter'>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.render("Header") === "ID" ? (
                    <span>
                      <i className="fa fa-sort" aria-hidden="true"></i>
                    </span>
                  ) : null}
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
        <button className="first-button" onClick={() => gotoPage(0)} autoFocus>
          {"1"}
        </button>
        <button onClick={() => gotoPage(1)}>{"2"}</button>
        <button onClick={() => gotoPage(2)}>{"3"}</button>
        <button onClick={() => gotoPage(3)}>{"4"}</button>

        <button className="last-button" onClick={() => nextPage()}>
          {">"}
        </button>
      </div>
    </React.Fragment>
  );
}

export default Table;
