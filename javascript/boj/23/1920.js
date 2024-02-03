const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const runList = arr[1].split(" ").map(Number).sort((a,b)=>a-b)
const graph = arr[3].split(" ").map(Number)

let answer = ""
const binary = (target) =>{
    let start = 0;
    let end = runList.length-1
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(runList[mid]<target){
            start = mid+1
        }else if(runList[mid]>target){
            end = mid-1
        }else{
            return 1
        }
    }
    return 0
}
for(let i=0;i<graph.length;i++){
    answer +=binary(graph[i])+"\n"
}

console.log(answer)
