# Arrays

## Questions 1: Cyclic Rotation

An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place). <br>

The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times. <br>

Write a function: <br>
`function solution(A, K)`

that, given an array A consisting of N integers and an integer K, returns the array A rotated K times. <br>

For example, given:
`A = [3, 8, 9, 7, 6]` <br>
`K = 3` <br>

the function should return [9, 7, 6, 3, 8]. Three rotations were made: <br>
`[3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]` <br>
`[6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]` <br>
`[7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]` <br>

For another example, given <br>
`A = [0, 0, 0]` <br>
`K = 1` <br>

the function should return [0, 0, 0] <br>

Assume that:
* N and K are integers within the range [0..100];
* each element of array A is an integer within the range [−1,000..1,000].

In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

[Credit](https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/)


## Questions 2: Odd Occurrences in Array

A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that: <br>
`A[0] = 9  A[1] = 3  A[2] = 9`<br>
`A[3] = 3  A[4] = 9  A[5] = 7`<br>
`A[6] = 9`<br>

* the elements at indexes 0 and 2 have value 9,
* the elements at indexes 1 and 3 have value 3,
* the elements at indexes 4 and 6 have value 9,
* the element at index 5 has value 7 and is unpaired.

Write a function: <br>
`function solution(A)` <br>

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element. <br>
 
For example, given array A such that: <br>
`A[0] = 9  A[1] = 3  A[2] = 9`<br>
`A[3] = 3  A[4] = 9  A[5] = 7`<br>
`A[6] = 9`<br>

the function should return 7, as explained in the example above. <br>

Write an **efficient** algorithm for the following assumptions: 
* N is an odd integer within the range [1..1,000,000];
* each element of array A is an integer within the range [1..1,000,000,000];
* all but one of the values in A occur an even number of times.

[Credit](https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/)