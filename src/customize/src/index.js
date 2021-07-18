import moment from 'moment';
import numRef from './ref.json';

export function numToWord(num) {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
}

export function wordToNum(word) {
    return word
}
