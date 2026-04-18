export const set2 = {
  id: 'set2',
  title: 'Set 2 — Easy',
  exercises: [
    {
      topic: 'Lists',
      prompt: 'What does this code print?',
      code: 'nums = [1, 2, 3]\nnums.append(4)\nprint(nums)',
      answer: '<code>[1, 2, 3, 4]</code>',
      explanation: '<code>append()</code> adds a single item to the end of the list, modifying it in place.'
    },
    {
      topic: 'Lists',
      prompt: 'What does this code print?',
      code: 'nums = [10, 20, 30]\nnums[1] = 99\nprint(nums)',
      answer: '<code>[10, 99, 30]</code>',
      explanation: 'You can replace an element by assigning to its index. Index <code>1</code> is the second element.'
    },
    {
      topic: 'Lists',
      prompt: 'What does this code print?',
      code: 'my_list = [10, 20, 30, 40, 50]\nprint(my_list[::2])',
      answer: '<code>[10, 30, 50]</code>',
      explanation: 'The third number in a slice is the <em>step</em>. <code>[::2]</code> means "every second element, from start to end."'
    },
    {
      topic: 'Lists',
      prompt: 'What does this code print?',
      code: 'nums = [4, 8, 2, 6]\nprint(sum(nums))',
      answer: '<code>20</code>',
      explanation: '<code>sum()</code> adds up all the numbers in the list: <code>4 + 8 + 2 + 6 = 20</code>.'
    },
    {
      topic: 'Lists',
      prompt: 'What does this code print?',
      code: 'nums = [4, 8, 2, 6]\nprint(max(nums))\nprint(min(nums))',
      answer: '<pre class="code"><code>8\n2</code></pre>',
      explanation: '<code>max()</code> returns the largest value in the list and <code>min()</code> returns the smallest.'
    },
    {
      topic: 'Dictionaries',
      prompt: 'What does this code print?',
      code: 'student = {"name": "Ada", "grade": 92}\nstudent["grade"] = 100\nprint(student)',
      answer: '<code>{\'name\': \'Ada\', \'grade\': 100}</code>',
      explanation: 'Assigning to an existing key <em>replaces</em> the value at that key.'
    },
    {
      topic: 'Dictionaries',
      prompt: 'What does this code print?',
      code: 'ages = {"Ada": 36, "Ben": 28, "Cleo": 41}\nprint(len(ages))',
      answer: '<code>3</code>',
      explanation: '<code>len()</code> on a dictionary returns the number of key/value pairs.'
    },
    {
      topic: 'Dictionaries',
      prompt: 'What does this code print?',
      code: 'scores = {"a": 1, "b": 2, "c": 3}\nfor key in scores:\n    print(key)',
      answer: '<pre class="code"><code>a\nb\nc</code></pre>',
      explanation: 'Iterating over a dictionary with <code>for</code> loops over its <em>keys</em>.'
    },
    {
      topic: 'If Statements',
      prompt: 'What does this code print?',
      code: 'name = "Ada"\nif name == "Ada":\n    print("hi Ada")\nelse:\n    print("hi stranger")',
      answer: '<code>hi Ada</code>',
      explanation: 'Use <code>==</code> (two equals signs) to compare values. A single <code>=</code> would be assignment.'
    },
    {
      topic: 'If Statements',
      prompt: 'What does this code print?',
      code: 'n = 7\nif n % 2 == 0:\n    print("even")\nelse:\n    print("odd")',
      answer: '<code>odd</code>',
      explanation: '<code>n % 2</code> is the remainder when <code>n</code> is divided by <code>2</code>. For <code>7</code>, that remainder is <code>1</code>, so the <code>else</code> branch runs.'
    },
    {
      topic: 'For Loops',
      prompt: 'What does this code print?',
      code: 'for i in range(1, 6):\n    print(i)',
      answer: '<pre class="code"><code>1\n2\n3\n4\n5</code></pre>',
      explanation: '<code>range(1, 6)</code> starts at <code>1</code> and stops <em>before</em> <code>6</code>.'
    },
    {
      topic: 'For Loops',
      prompt: 'What does this code print?',
      code: 'for i in range(0, 10, 2):\n    print(i)',
      answer: '<pre class="code"><code>0\n2\n4\n6\n8</code></pre>',
      explanation: 'The third argument to <code>range</code> is the <em>step</em>. This counts by 2s, stopping before 10.'
    },
    {
      topic: 'For Loops',
      prompt: 'What does this code print?',
      code: 'total = 0\nfor n in [1, 2, 3, 4, 5, 6]:\n    if n % 2 == 0:\n        total += n\nprint(total)',
      answer: '<code>12</code>',
      explanation: 'The <code>if</code> keeps only even numbers: <code>2 + 4 + 6 = 12</code>.'
    },
    {
      topic: 'Functions',
      prompt: 'What does this code print?',
      code: 'def grade(score):\n    if score >= 60:\n        return "pass"\n    else:\n        return "fail"\n\nprint(grade(75))\nprint(grade(50))',
      answer: '<pre class="code"><code>pass\nfail</code></pre>',
      explanation: 'A function can contain an <code>if</code>/<code>else</code>. Each call runs the function from the top with its own argument, so <code>grade(75)</code> returns <code>"pass"</code> and <code>grade(50)</code> returns <code>"fail"</code>.'
    },
    {
      topic: 'Functions',
      prompt: 'What does this code print?',
      code: 'def describe(name, age):\n    return f"{name} is {age} years old"\n\nprint(describe("Ada", 36))',
      answer: '<code>Ada is 36 years old</code>',
      explanation: 'The function builds a string using an f-string and returns it. The returned value is then printed by <code>print()</code>.'
    },
    {
      topic: 'Functions',
      question: 'Write a function called <code>count_evens</code> that takes a list of numbers and returns how many of them are even.',
      answerCode: 'def count_evens(nums):\n    count = 0\n    for n in nums:\n        if n % 2 == 0:\n            count += 1\n    return count',
      explanation: 'Loop through the list, and for each even number bump a counter. Return the counter at the end.'
    }
  ]
};
