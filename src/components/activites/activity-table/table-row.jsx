import React from "react";

import TableCell from "./table-cell";

const TableRow = ({ date, weatherArray }) => {
  return (
    <tr>
      <th>{`${date.getMonth() + 1}/${date.getDate()}`}</th>
      {weatherArray.map((weather, index) => (
        <TableCell key={index} weather={weather} />
      ))}
    </tr>
  );
};

export default TableRow;
