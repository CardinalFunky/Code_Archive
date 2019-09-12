// Sorting Algorithms

// Bubble Sort
function bubbleSort(list) {
    var complete = false;
    var dummyList = list;
    var flag = 0;
    
    while(!complete) {
        for(var i = 0; i < dummyList.length; i++) {
            if(dummyList[i] > dummyList[i + 1]) {
                flag += 1;
                var temp = dummyList[i];
                dummyList[i] = dummyList[i + 1];
                dummyList[i + 1] = temp;
            }
        }
        
        if(flag == 0) {
            complete = true;
        }
        
        flag = 0;
    }
    
    return dummyList;
}

// Algorithm Testing
var testArray = [5, 4, 3, 2, 1, 0];
print(bubbleSort(testArray));
