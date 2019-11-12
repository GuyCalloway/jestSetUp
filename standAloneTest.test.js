// toBeLessThan

test("adding to more than", () => {
    load1 = 10;
    load2 = 5;
    expect(load1 + load2).toBeLessThan(16);
})

// regex
test("theres no i in team", () => {
    expect("team").not.toMatch(/i/);
});

test("theres an e in team", () => {
    expect("team").toMatch(/e/);
});
// case insensitive (add i after regex /stuff/)
test("theres either capital or lwercase i in tim", () => {
    expect("tim").toMatch(/I/i);
});