// Sorting Algorithms

// Bubble Sort
function bubbleSort_LeastToGreatest(list) {
    let complete = false;
    let dummyList = list;
    let flag = 0;
    let count = 0;

    while(!complete) {
        count++;
        console.log("Cycle #" + count);

        for(let i = 0; i < dummyList.length; i++) {
            if(dummyList[i] > dummyList[i + 1]) {
                flag += 1;
                let temp = dummyList[i];
                dummyList[i] = dummyList[i + 1];
                dummyList[i + 1] = temp;
            }

            console.log(dummyList);
        }

        if(flag == 0) {
            complete = true;
        }
        
        flag = 0;
    }
    
    return dummyList;
}

// Algorithm Testing
let testArray = [5, 4, 3, 2, 1, 0];
console.log(bubbleSort_LeastToGreatest(testArray));
