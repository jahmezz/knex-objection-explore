function* nestedGenerator() {
    yield 1;
    yield* [2, 3]; // Delegate to an array
    yield 4;
  }
  
  for (const value of nestedGenerator()) {
    console.log(value);
  }