function* flattenNestedList(list) {
    for (const item of list) {
      if (Array.isArray(item)) {
        yield* flattenNestedList(item); // Delegate to itself for nested lists
      } else {
        yield item;
      }
    }
  }
  
  const nestedList = [1, [2, [3, 4]], 5];
  
  for (const value of flattenNestedList(nestedList)) {
    console.log(value);
  }
  // Output:
  // 1
  // 2
  // 3
  // 4
  // 5
  