function greaterThan(arr, value) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > value) {

            result.push(arr[i]);

        }

    }

    return result;

}

console.log(greaterThan([3, 8, 2, 10, 5], 5));