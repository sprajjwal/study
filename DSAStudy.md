## Data structures
### Array
read, append: O(1)
insert/delete: O(n)

### String
appending strings increases time complexity. Better to insert into array and join instead
`"".join(strArr)` O(n)


### Sets
collection of unique values.
search: O(1)

### Loop iteration
#### in:
property loop aka <b>Index</b> in array and <b>Key</b> in objects 

#### of:
value loop aka <b>items</b> in array. <b>Won't</b> work for Objects since they aren't iterable 

### Hash Maps
Just use it. its all O(1)


## Problem Patterns
### two pointers:
track two items in a liner data structure(mostly) and start moving each tracker individually.
<b>example</b>: fast and slow movement, opposite direction tracking,
obvious patterns: pallindrome, string/array reversal etc

### Sliding window:
tracking items in a range(window).
can be fixed size or dynamic. <b>example</b>: subarray of size k, length of longest substring
obvious problems: substring/subarray


### Binary Search:
O(log n)
lowkey two pointer but 1 pointer moves half way
can be used in sorted + rotated array too.

### BFS