function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

for (const value of simpleGenerator()) {
    console.log(value);
}