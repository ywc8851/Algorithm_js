const texts = require("fs").readFileSync("/dev/stdin").toString().split("\n");
if (texts[texts.length-1] === "") texts.pop();
texts.forEach(i => {
    let d = "";
    [/[a-z]/g, /[A-Z]/g, /\d/g, /[ ]/g].forEach(reg => d += i.match(reg) ? i.match(reg).length+" " : "0 ");
    console.log(d.slice(0, d.length-1));
});
