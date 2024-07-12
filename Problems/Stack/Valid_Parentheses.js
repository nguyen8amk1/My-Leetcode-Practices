
const isValid = (s) => {
    const openParen = [];
    const isOpenParen = (char) => {
        return (char == '(' || char == '[' || char == '{');
    }

    //if(!isOpenParen(s[0])) return false;
    
    const matchingParen = (open, close) => {
        const a = open == '(' && close == ')';
        const b = open == '[' && close == ']';
        const c = open == '{' && close == '}';
        return a || b || c;

    }

    for(const c in s) {
        const char = s[c]; 
        console.log(char);
        if(isOpenParen(char)) {
            openParen.push(char);
            continue;
        } 
        if(matchingParen(openParen[openParen.length -1], char)) {
            openParen.pop();
        } else {
            return false;
        }
    }

    return openParen.length == 0;
}

{
    const  s = "()";
    console.log(isValid(s));
}

{
    const  s = "()[]{}";
    console.log(isValid(s));
}

{
    const  s = "(]";
    console.log(isValid(s));
}

{
    const  s = "]";
    console.log(isValid(s));
}
