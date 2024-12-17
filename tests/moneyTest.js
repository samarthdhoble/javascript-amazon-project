import { formatCurrency } from '../scripts/utils/money.js';

if(formatCurrency(2095) === '838.00'){
    console.log('Test passed');
} else {
    console.log(formatCurrency(2095))
    console.log('Test failed');
}
