console.log('KNAPSACK ALGORITHM IS BEING PROCESSED')

var cap = 10;
var items = [{
        W: 10,
        P: 5,
    },
    {
        W: 3,
        P: 3,
    },
    {
        W: 2,
        P: 4,
    },
    {
        W: 2,
        P: 19,
    },

];

console.log('the inial array is:\n', items);


function ZeroOneknapsack(i, capacity) {
    if (capacity < 0)
        return Number.NEGATIVE_INFINITY
    if (i === items.length)
        return 0;
    var res = Math.max(ZeroOneknapsack(i + 1, capacity), ZeroOneknapsack(i + 1, (capacity - items[i].W)) + items[i].P);
    return res
}


var result = ZeroOneknapsack(0, cap);
console.log('the optimal profit from zero/one knapsack would be:', result);


function BubbleSort(items) {
    for (let i = 0; i < items.length - 1; i++) {
        for (let j = items.length - 1; j > i; j--) {
            if (items[j - 1].P / items[j - 1].W < items[j].P / items[j].W) {
                let temp = items[j - 1];
                items[j - 1] = items[j]
                items[j] = temp
            }
        }
    }
    return items;
}




function GreedyKnapsack(items, capacity) {
    var optimalProfit = 0;
    let remainedC = capacity

    for (let i = 0; i < items.length; i++) {
        if (items[i].W > remainedC) {
            items[i].X = remainedC / items[i].W;
            optimalProfit = optimalProfit + (items[i].P * items[i].X);
            break;
        }
        items[i].X = 1;
        remainedC = remainedC - items[i].W;
        optimalProfit = optimalProfit + items[i].P;
    }
    console.log('the selected amount of each item is:',items.map(x=> x.X))
    console.log('the optimal profit from greedy knapsack would be:', optimalProfit)
}



items = BubbleSort(items);
console.log('the sorted array is:\n',items);
GreedyKnapsack(items, cap);