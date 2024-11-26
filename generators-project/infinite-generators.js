function* infiniteCounter(start = 0) {
    let count = start;
    while (true) {
        yield count++;
    }
}

function* finiteGenerator() {
    yield* infiniteCounter(10); // Start counting at 10
}

const counter = finiteGenerator();

console.log(counter.next().value); // 10
console.log(counter.next().value); // 11
console.log(counter.next().value); // 12
