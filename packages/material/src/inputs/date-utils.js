import formatISO9075 from 'date-fns/formatISO9075';

export const format = {
    date: value => formatISO9075(value, { representation: 'date' }),
    time: value => formatISO9075(value, { representation: 'time' }),
    datetime: value => formatISO9075(value)
};

export const parse = {
    date: value => (value ? new Date(value) : null),
    time: value => (value ? new Date('9999-01-01 ' + value) : null),
    datetime: value => (value ? new Date(value) : null)
};
