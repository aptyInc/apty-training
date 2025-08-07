function chunkArray(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const array = [1, 2, 3, 4, 5];
const chunkSize = 2;

const chunkedArray = chunkArray(array, chunkSize);

document.getElementById("result").innerText = JSON.stringify(chunkedArray);
