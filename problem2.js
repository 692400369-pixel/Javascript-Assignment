// Find the Index of the First Occurrence in a String

function strStr(haystack, needle) {

    for (let i = 0; i <= haystack.length - needle.length; i++) {

        let found = true;

        for (let j = 0; j < needle.length; j++) {

            if (haystack[i + j] != needle[j]) {

                found = false;

                break;

            }

        }

        if (found) {

            return i;

        }

    }

    return -1;

}

// Test Cases

console.log(strStr("hello", "ll"));      // 2

console.log(strStr("aaaaa", "bba"));     // -1

console.log(strStr("javascript", "script")); // 4

console.log(strStr("apple", "app"));     // 0