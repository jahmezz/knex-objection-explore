const { taskRunner, runTasks } = require('./taskRunner');
const delay = require('delay');

// Define a series of tasks
const tasks = [
  {
    name: 'Task 1',
    run: async () => {
      await delay(1000); // Simulate async work
      return 'Task 1 done!';
    },
  },
  {
    name: 'Task 2',
    run: async () => {
      await delay(500); // Simulate async work
      return 'Task 2 done!';
    },
  },
  {
    name: 'Task 3',
    run: async () => {
      await delay(2000); // Simulate async work
      return 'Task 3 done!';
    },
  },
];

// Execute tasks sequentially
(async () => {
  console.log('Starting task runner...');
  await runTasks(taskRunner, tasks);
  console.log('All tasks completed!');
})();