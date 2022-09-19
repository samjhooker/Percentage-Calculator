export const xIsYPercentOfWhat = (val1, val2, significantFigures) => {
    return (val1/(val2/100))?.toPrecision(significantFigures);
}

export const xIsWhatPercentOfY = (val1, val2, significantFigures) => {
    return ((val1 / val2)*100)?.toPrecision(significantFigures) + '%';
}

export const percetageIncreaseFromXtoY = (val1, val2, significantFigures) => {
    const percentage =  (((val2 - val1)/val1)*100)?.toPrecision(significantFigures);
    return `${Math.abs(percentage)}% ${percentage > 0 ? 'increase' : 'decrease'}`;
}

export const xPercentOfY = (val1, val2, significantFigures) => {
    return val2 * (val1/100);
}