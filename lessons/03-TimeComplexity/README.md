# Time Complexity

## Question 1: Frog Jump

**Count minimal number of jumps from position X to Y.** <br>

A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D. <br>

Count the minimal number of jumps that the small frog must perform to reach its target. <br>

Write a function: <br>
`function solution(X, Y, D)` <br>

that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y. <br>

For example, given: <br>
`X = 10` <br>
`Y = 85` <br>
`D = 30` <br>

the function should return 3, because the frog will be positioned as follows:
* after the first jump, at position 10 + 30 = 40
* after the second jump, at position 10 + 30 + 30 = 70
* after the third jump, at position 10 + 30 + 30 + 30 = 100

Write an efficient algorithm for the following assumptions:
* X, Y and D are integers within the range [1..1,000,000,000];
* X ≤ Y.

[Credit](https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/)


## Question 2: PermMissingElem

**Find the missing element in a given permutation..** <br>

An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing. <br>

Your goal is to find that missing element. <br>

Write a function: <br>
`function solution(A);`

that, given an array A, returns the value of the missing element. <br>

For example, given array A such that:<br>
`A[0] = 2`<br>
`A[1] = 3`<br>
`A[2] = 1`<br>
`A[3] = 5`<br>

the function should return 4, as it is the missing element.<br>

Write an efficient algorithm for the following assumptions:
* N is an integer within the range [0..100,000];
* the elements of A are all distinct;
* each element of array A is an integer within the range [1..(N + 1)].

[Credit](https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/)


## Question 3: Tape Equilibrium

**Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|**

