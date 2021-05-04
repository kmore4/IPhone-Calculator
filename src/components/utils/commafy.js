const commafy = (value) => {
    let op = '';
    let decimal = '';
    let isNeg = false;
    if(value.includes('.')){
        op = value.substring(0,value.indexOf('.'));
        decimal = value.substring(value.indexOf('.'));
    }
    else{
        op = value;
    }
    if(parseFloat(value) < 0){
        isNeg = true;
        op = op.substring(1);
    }
    return isNeg ? "-" + parseFloat(op).toLocaleString() + decimal 
    : parseFloat(op).toLocaleString() + decimal;
};

export default commafy;