import { formatCurrency } from '../scripts/utils/money.js';

describe('test suite: formatCurrency' , () => {
    it('convert sents into rs' , () => {
        expect(formatCurrency(2095)).toEqual('838.00');
    });
});;