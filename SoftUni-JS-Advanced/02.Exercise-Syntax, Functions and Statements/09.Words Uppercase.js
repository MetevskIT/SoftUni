function solve(words){
    words = words.toUpperCase();
    let regex = /[A-Za-z0-9]+/g;
    arr = [...words.matchAll(regex)];
    console.log(arr.join(", "));
}
solve('Hi, how are you?')