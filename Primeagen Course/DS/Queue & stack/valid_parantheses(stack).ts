
function isValid(s: string): boolean {
    let stack : string[] = [];
    const hash = { "}" : "{",
                   ")" : "(",
                   "]" : "[" };

    for (let i = 0; i < s.length; ++i) {

        if (s[i] in hash) {

            if (stack && stack[-1] == hash[s[i]]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }

    if (stack.length === 0) {
        return true;
    } 

    return false;

}