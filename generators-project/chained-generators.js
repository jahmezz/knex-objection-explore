function* childGenerator() {
    yield 'A';
    yield 'B';
  }
  
  function* parentGenerator() {
    yield 1;
    yield* childGenerator(); // Delegate to child generator
    yield 2;
  }
  
  for (const value of parentGenerator()) {
    console.log(value);
  }
  // Output:
  // 1
  // A
  // B
  // 2
  