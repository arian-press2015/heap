import Heap from "./heap.js";

const arr = [];

Heap.insert(arr, 3);
Heap.insert(arr, 4);
Heap.insert(arr, 9);
Heap.insert(arr, 5);
Heap.insert(arr, 2);
Heap.insert(arr, 7);
Heap.insert(arr, 1);
Heap.insert(arr, 8);
Heap.insert(arr, 1);
Heap.insert(arr, 5);
Heap.insert(arr, 4);
Heap.insert(arr, 2);
Heap.insert(arr, 6);
Heap.insert(arr, 8);

console.log("Max-Heap array: ");
Heap.print(arr);

Heap.deleteNode(arr, 5);

console.log("After deleting an element: ");
Heap.print(arr);
