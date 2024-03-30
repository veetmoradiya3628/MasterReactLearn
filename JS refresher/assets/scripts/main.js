import { apiKey } from "./util.";

function combine(a, b, c){
    return a * b / c;
}

function transformToObjects(numberArray) {
    // Todo: Add your logic
    return numberArray.map((value) => ({val: value}))
}


console.log(apiKey);