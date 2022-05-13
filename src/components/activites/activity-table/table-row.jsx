import React from "react";

import TableCell from "./table-cell";

const TableRow = ({ weatherArray }) => {
  return (
    <tr>
      {weatherArray.map((weather, index) => (
        <TableCell key={index} weather={weather} />
      ))}
    </tr>
  );
};

export default TableRow;
