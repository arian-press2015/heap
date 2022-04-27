function heapify(arr, i) {
  console.log("heapify");
  print(arr);

  let size = arr.length;
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < size && arr[largest] < arr[l]) {
    largest = l;
  }

  if (r < size && arr[largest] < arr[r]) {
    largest = r;
  }

  if (largest != i) {
    let temp = arr[largest];
    arr[largest] = arr[i];
    arr[i] = temp;

    console.log("heapify call");
    heapify(arr, largest);
  }
}

function insert(arr, newNum) {
  let size = arr.length;
  if (size == 0) {
    arr.push(newNum);
  } else {
    arr.push(newNum);
    for (let i = size / 2 - 1; i >= 0; i--) {
      console.log("insert heapify");
      heapify(arr, i);
    }
  }
}

function deleteNode(arr, num) {
  let size = arr.length;
  let i;
  for (i = 0; i < size; i++) {
    if (num == arr[i]) {
      break;
    }
  }

  let temp = arr[i];
  arr[i] = arr[size - 1];
  arr[size - 1] = temp;

  arr.pop();
  size = arr.length;

  for (let j = size / 2 - 1; j >= 0; j--) {
    console.log("deleteNode heapify");
    heapify(arr, j);
  }
}

// incomplete / only works if arr elements are 1-digit numbers
function print(arr) {
  let index = 0;
  let pow = 0;
  let per_line = 0;
  let str = "";

  // calculate smallest power of 2 that is bigger than arr.length
  let max;
  for (max = 0; Math.pow(2, max) < arr.length; max++) {}

  while (index < arr.length) {
    if (per_line++ < Math.pow(2, pow)) {
      str =
        str +
        " ".repeat(Math.pow(2, max - pow) / 2) +
        arr[index++] +
        " ".repeat(Math.pow(2, max - pow) / 2 - 1);
    } else {
      console.log(str);
      per_line = 0;
      str = "";
      pow++;
    }
  }
  console.log(str);
}

export default {
  heapify,
  insert,
  deleteNode,
  print,
};
