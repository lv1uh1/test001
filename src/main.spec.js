Main = require('./main');

test('`proc = A`のとき、`_procA`が呼び出される', () => {
    const target = new Main();
    target._procA = jest.fn();
    target._procB = jest.fn();
    target._procC = jest.fn();

    target.run('A', 1);
    expect(target._procA.mock.calls.length).toBe(1);
    expect(target._procB.mock.calls.length).toBe(0);
    expect(target._procC.mock.calls.length).toBe(0);
});

test('`proc = B`のとき、`_procB`が呼び出される', () => {
    const target = new Main();
    target._procA = jest.fn();
    target._procB = jest.fn();
    target._procC = jest.fn();

    target.run('B', 1);
    expect(target._procA.mock.calls.length).toBe(0);
    expect(target._procB.mock.calls.length).toBe(1);
    expect(target._procC.mock.calls.length).toBe(0);
});

test('`proc = C`のとき、`_procC`が呼び出される', () => {
    const target = new Main();
    target._procA = jest.fn();
    target._procB = jest.fn();
    target._procC = jest.fn();

    target.run('C', 1);
    expect(target._procA.mock.calls.length).toBe(0);
    expect(target._procB.mock.calls.length).toBe(0);
    expect(target._procC.mock.calls.length).toBe(1);
});

test('`proc`はA,B,Cいずれでもないとき、例外をスローする', () => {
    const target = new Main();
    target._procA = jest.fn();
    target._procB = jest.fn();
    target._procC = jest.fn();

    expect(() => target.run('Z', 1)).toThrow();
    expect(target._procA.mock.calls.length).toBe(0);
    expect(target._procB.mock.calls.length).toBe(0);
    expect(target._procC.mock.calls.length).toBe(0);
});
