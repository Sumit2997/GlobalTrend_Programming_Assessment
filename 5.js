function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([4, 543, 2, 3, 56, 32, 4, 3, 2]));
