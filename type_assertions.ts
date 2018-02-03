let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let secondWay = (message as string).endsWith('c');