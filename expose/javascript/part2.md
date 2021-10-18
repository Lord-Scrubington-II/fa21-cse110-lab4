1. The console will log `i.toString()`, where `i = prices.length - 1`. This is because `var` hoists all variable declarations to the function scope, so `i`  is still available on line 12. 
   1. Since `prices = [100, 200, 300]` and `discount = 0.5`, the console will log `2`.
2. The console will log `discountedPrice.toString()`, where `discountedPrice = prices[prices.length - 1] * (1 - discount)`. This is again because `var` hoists all variable declarations to the function scope, so `discountedPrice` is still available on line 13.  
   1. Since `prices = [100, 200, 300]` and `discount = 0.5`, the console will log `150`.
3. The console will log `finalPrice.toString()`, where `finalPrice = Math.round((prices[prices.length - 1] * (1 - discount)) * 100) / 100`. This is again because `var` hoists all variable declarations to the function scope, so `finalPrice` is still available on line 14.
   1. Since `prices = [100, 200, 300]` and `discount = 0.5`, the console will log `150`.
4. This function will return `discounted` as an `int[]` where `discounted[i] = Math.round((prices[i] * (1 - discount)) * 100) / 100` for `i` from `0 => prices.length - 1`. This is because the algorithm for applying the discounts and flooring them is correct. No scope violations occur.
   1. Since `prices = [100, 200, 300]` and `discount = 0.5`, the console will log `[50, 100, 150]`.
5. This will log `undefined` because the `let` declaration in the `for` loop header means that `i` becomes undefined after exiting the for loop.
6. This will throw an exception because the `let` declaration in the `for` loop body means that `discountedPrice` is unavailable in the top-level function scope.
7. The console will log `finalPrice.toString()`, where `finalPrice = Math.round((prices[prices.length - 1] * (1 - discount)) * 100) / 100`. Since `finalPrice` was declared in the function scope using `let`, it is available on line 14.
   1. Since `prices = [100, 200, 300]` and `discount = 0.5`, the console will log `150`.
8. This function will return `discounted` as an `int[]` where `discounted[i] = Math.round((prices[i] * (1 - discount)) * 100) / 100` for `i` from `0 => prices.length - 1`. This is because the algorithm for applying the discounts and flooring them is correct. No scope violations occur.
   1. Since `prices = [100, 200, 300]` and `discount = 0.5`, the console will log `[50, 100, 150]`.
9. The console will log `undefined` because `i` is not in scope from `let`. 
10. The console will log `prices.length.toString()` because `length` is in scope from `const`. 
11. This function will return `discounted` as an `int[]` where `discounted[i] = prices[i] * (1 - discount)` for `i` from `0 => prices.length - 1`. This works because no `const` variables are ever reassigned or redeclared in the same scope. Redeclaration of `discountedPrices` in between `for` loop iterations is not considered unlawful redeclaration by the interpreter.
   1. Since `prices = [100, 200, 300]` and `discount = 0.5`, the console will log `[50, 100, 150]`.

12. 
- student.name
- student['Grad Year']
- student.greeting();
- student['Favorite Teacher'].name
- student.courseload[0]

13. 
- '32'
  - Because + defaults to string concatenation when a string is the first argument
- 1
  - Because - cannot be applied to strings so it parses '2' into `2`. 
- 3
  - Because null === 0
- '3null'
  - Because null -> "null" when concatenated to a string
- 4
  - because true === 1
- 0
  - because false === 0 && null === 0, where + can only be applied to strings or integers
- '3undefined'
  - Because undefined -> 'undefined' when concatenated to a string
- NaN
  - This is (not a number) because undefined !== 0, hence this is not valid arithmetic.

14.  
- true
  - because '2' comes after '1'.
- false
  - because `strings` are sorted by alphabetical order; integers whose first digits are smaller are considered smaller alphabetically
- true
  - because the weak equality operator attempts to convert whichever type it can to the other first.
- false
  - because the strong equality operator typechecks first and rejects dissimilar types.
- false
  - `true` is not equal to 2 when weakly typed, only equal to 1.
- true
  - Boolean(int) returns true if int !== 0.

15.  == is the weak equality operator and it automatically converts whichever type it can to the other first, while the strong equality operator === returns false when its operands are not of the same type.

16. see part2-question16.js.
    
17. This will return `[1, 2, 3, 2, 4, 6]`. `doSomething` is passed to `modifyArray` as a closure and bound to the name `callback` inside `modifyArray`'s lexical scope. In the `for` loop, each element of `array` is appended to it after being passed through `callback`, which in this case returns `array[i] * 2`. Hence the result.

18. see part2-question18.js.
    
19. 
```js
1
4
3
2
```


