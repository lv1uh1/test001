/**
 * メインメインメイクイーン
 */
class Main
{
    constructor() {}

    /**
     * こいつを叩くぜ！
     * @param {*} proc 処理
     * @param {*} num 引数
     */
    run(proc, num) {
        if (proc === 'A') this._procA(num);
        else if (proc === 'B') this._procB(num);
        else if (proc === 'C') this._procC(num);
        else throw new Error('Out of range: argument: proc');
    }

    /**
     * Proc-A
     * @param {Number} num argument
     * @ignore
     */
    _procA (num) {
        console.log(num);
    }

    /**
     * Proc-B
     * @param {Number} num argument
     * @ignore
     */
    _procB (num) {
        console.log(num);
    }

    /**
     * Proc-C
     * @param {Number} num argument
     * @ignore
     */
    _procC (num) {
        console.log(num);
    }
}

module.exports = Main;