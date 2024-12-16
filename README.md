# React useEffect Runs Even When Condition is False

This repository demonstrates a common mistake when using the `useEffect` hook in React.  The `useEffect` hook, while powerful, is often misunderstood. This example showcases a scenario where the `useEffect` function executes unnecessarily, leading to unexpected behavior.

## Problem
The provided code intends to log a message only when the `count` state variable exceeds 5.  However, due to an incorrect understanding of `useEffect`, the log statement is triggered on every render, even if `count` is less than or equal to 5.

## Solution
The solution involves refactoring the code to conditionally execute the logging functionality outside of `useEffect`, or more elegantly, use the dependency array of useEffect to control when the effect runs.  The solution file demonstrates the correct approach.