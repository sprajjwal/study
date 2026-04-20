function longestSubstring(s) {
  let longest = 1;
  const items = new Set();
  items.add(s[0])

  let current = 1;

  for (let left=0, right = 1 ; right < s.length; ) {
    if(items.has(s[right])) {
      while(items.has(s[right])) {
        items.delete(s[left]);
        left += 1
        current -= 1;
      };
    } else {
      items.add(s[right])
      current += 1;
      right += 1
    };
    longest = current > longest ? current : longest;
  }

  return longest;
}

console.log('expected: 7', 'answer: ', longestSubstring('abbcaeard'));
console.log('expected: 4', 'answer: ', longestSubstring('babbacd'));
console.log('expected: 1', 'answer: ', longestSubstring('bbbbb'));
console.log('expected: 4', 'answer: ', longestSubstring('ddcdbcdvcc'));



