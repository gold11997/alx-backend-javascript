const Utils = {
    calculateNumber(type, a, b){
        // if type is SUM
        if (type === 'SUM') {
            const round_a = Math.round(a);
            const round_b = Math.round(b);
            return round_a + round_b;
        }

        //if type is SUBTRACT
        if (type === 'SUBTRACT') {
            const round_a = Math.round(a);
            const round_b = Math.round(b);
            return round_a - round_b;
        }
        
        if (type === 'DIVIDE') {
            const round_a = Math.round(a);
            const round_b = Math.round(b);
            if (round_b == 0) {
                return 'Error'
            }
            return round_a / round_b;
        }
    }
};
module.exports = Utils;
