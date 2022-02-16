let mensagem = "abc"; //string
let endsWithC = mensagem.endsWith("c");

//type assertions:

let msg; // any
msg = "abc";

let endsWithB = (<string>msg).endsWith("b");

let endsWithA = (msg as string).endsWith("b");

//PS: msg continua a ser ANY