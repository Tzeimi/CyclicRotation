function solution(A, K) {
    var aLength = A.length, i, kElements; aElements = 0;
    kElements = A.slice(aLength - K);
    //console.log(kElements);
    for(i = 0; i < aLength - K; i++){
        aElements = A[i];
       // console.log(aElements);
       kElements.push(aElements);
    }
    //console.log(kElements);
    return kElements;
}
