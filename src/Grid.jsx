import { range } from './utils';

function Grid({ numRows, numCols }) {
  const gridArray = range(numRows, numCols);
  console.log(gridArray);
  return (
    <div>
      {gridArray.map((row, rowIdx) => {
        return (
          <div className="row" key={`${rowIdx}-row`}>
            {row.map((col, colIdx) => {
              return (
                <div className="col" key={col}>
                  {col}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
export default Grid;
