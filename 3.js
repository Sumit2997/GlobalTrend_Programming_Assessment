function flattenArray(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten
    );
  }, []);
}

console.log(flattenArray([[34, [[[[[6]]]]]], 645, 235]));
