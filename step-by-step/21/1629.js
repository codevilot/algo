const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const [a,b, c]= input.split(" ").map(str=>BigInt(str))

const pow = (b)=>{
  if(b==0) return BigInt(1)
  else{
    const p = pow(BigInt(parseInt(b/BigInt(2))))
    if(b%BigInt(2)==0){
      return (p*p)%c
    }else{
      return (p*p*a)%c
    }
  }
}



console.log(parseInt(pow(b)))
