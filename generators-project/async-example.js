function* generatorWorkflow() {
    yield 'Start';
    yield* ['Step 1', 'Step 2', 'Step 3']; // Delegate to array
    yield 'End';
  }
  
  async function runWorkflow() {
    const workflow = generatorWorkflow();
    for (const step of workflow) {
      console.log(`Processing: ${step}`);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async delay
    }
  }
  
  runWorkflow();
  // Output (1 second apart):
  // Processing: Start
  // Processing: Step 1
  // Processing: Step 2
  // Processing: Step 3
  // Processing: End
  