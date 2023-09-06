export const range = (start, end, step = 1) => {
  let output = [];
  // solve this range utility

  // handle scenario where end is not specified range(5) - [0, 1, 2, 3, 4]
  // a conditional check for end
  if ( end !== undefined && end !== null ){
    for (let i = 0; i < start; i += step) {
      // loop code
      let row = [];
      for(let j = 0; j < end; j+=step){
        row.push(Math.floor(Math.random() * 10000))
      }
      output.push(row)
    }
    
  }else {
    for ( let i = 0; i < start; i += step){
      output.push(Math.floor(Math.random() * 10000)+3500)
    }
  }

  

  return output;
};
