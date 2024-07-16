function evalexp(exp) {
  let arr = exp.split(/[+-]/);
  let ans = 0;
  let i = 0;
  let j = 0;
  if (exp[0] !== "-") exp = "+" + exp;
  while (i < exp.length) {
    if (exp[i] == "+") ans += Number(arr[j++]);
    else if (exp[i] == "-") ans -= Number(arr[j++]);
    i++;
  }
  console.log(ans);
}

console.log(evalexp("5+6-89"));
