let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n =  Number(input[0]);
const result = [];

for (let i = 0; i < n; i++) {
    let cnt = 0;
    
    for (let s of input[i+1]) {
        if(s==="("){
            cnt++;
        } else {
            cnt--;
        }
        if (cnt < 0) break;
    }
    
    result.push(cnt === 0 ? 'YES' : "NO");
}

console.log(result.join('\n'));
