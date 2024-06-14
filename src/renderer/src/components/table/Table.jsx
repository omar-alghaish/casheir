const CustomTable = ({ columns, data }) => {
    return (
        <div className="table_container">
          <table className="custom-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={`${rowIndex}-${column.key}`}>
                  {column.render ? column.render(rowData[column.dataIndex]) : rowData[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>   
        </div>
     
    );
  };
  
  export default CustomTable;
  