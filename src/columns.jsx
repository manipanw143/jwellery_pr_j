import React from 'react';
import './App.css';

export const Column = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr className="fixed-column">
            <th className="fixed-column">Fixed Column</th>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 4</th>
            <th>Column 4</th>
            <th>Column 4</th>
            <th>Column 4</th>
            <th>Column 4</th>
            <th>Column 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fixed-column">Row 1</td>
            <td>Data 1.1</td>
            <td>Data 1.2</td>
            <td>Data 1.3</td>
            <td>Data 1.4</td>
          </tr>
          <tr>
            <td className="fixed-column">Row 2</td>
            <td>Data 2.1</td>
            <td>Data 2.2</td>
            <td>Data 2.3</td>
            <td>Data 2.4</td>
          </tr>
          <tr>
            <td className="fixed-column">Row 3</td>
            <td>Data 3.1</td>
            <td>Data 3.2</td>
            <td>Data 3.3</td>
            <td>Data 3.4</td>
          </tr>
          <tr>
            <td className="fixed-column">Row 4</td>
            <td>Data 4.1</td>
            <td>Data 4.2</td>
            <td>Data 4.3</td>
            <td>Data 4.4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Column;
