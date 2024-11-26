const delay = require('delay');

// Task runner using generators
function* taskRunner(tasks) {
  for (const task of tasks) {
    console.log(`Starting task: ${task.name}`);
    const result = yield task.run(); // Yield control to execute task
    console.log(`Completed task: ${task.name}, Result: ${result}`);
  }
}

// Helper function to execute the generator
async function runTasks(generator, tasks) {
  const iterator = generator(tasks);
  let result = iterator.next();

  while (!result.done) {
    // Wait for the task (handle promises)
    const value = await result.value;
    result = iterator.next(value);
  }
}

module.exports = { taskRunner, runTasks };