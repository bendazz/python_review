export const set1 = {
  id: 'set1',
  title: 'Set 1 — Super Easy',
  exercises: [
    {
      topic: 'Lists',
      prompt: 'Consider this list:',
      code: 'my_list = [10, 20, 30, 40, 50]',
      question: 'What is the value of <code>my_list[0]</code>?',
      answer: '<code>10</code>',
      explanation: 'Python list indexing starts at <code>0</code>, so the first element is at index 0.'
    },
    {
      topic: 'Lists',
      prompt: 'Consider this list:',
      code: 'my_list = [10, 20, 30, 40, 50]',
      question: 'What is the value of <code>my_list[-1]</code>?',
      answer: '<code>50</code>',
      explanation: 'A negative index counts from the end of the list. <code>-1</code> is the last element.'
    },
    {
      topic: 'Lists',
      prompt: 'Consider this list:',
      code: 'my_list = [10, 20, 30, 40, 50]',
      question: 'What is the value of <code>my_list[1:3]</code>?',
      answer: '<code>[20, 30]</code>',
      explanation: 'Slicing <code>[1:3]</code> includes index 1 but <em>stops before</em> index 3.'
    },
    {
      topic: 'Lists',
      prompt: 'Consider this list:',
      code: 'my_list = [10, 20, 30, 40, 50]',
      question: 'What is the value of <code>my_list[:2]</code>?',
      answer: '<code>[10, 20]</code>',
      explanation: 'When you omit the start of a slice, it defaults to <code>0</code>.'
    },
    {
      topic: 'Lists',
      prompt: 'Consider this list:',
      code: 'my_list = [10, 20, 30, 40, 50]',
      question: 'What is the value of <code>len(my_list)</code>?',
      answer: '<code>5</code>',
      explanation: '<code>len()</code> returns the number of elements in the list.'
    },
    {
      topic: 'Dictionaries',
      prompt: 'Consider this dictionary:',
      code: 'student = {"name": "Ada", "grade": 92}',
      question: 'What is the value of <code>student["name"]</code>?',
      answer: '<code>"Ada"</code>',
      explanation: 'Dictionaries look up values by key. The key <code>"name"</code> maps to the string <code>"Ada"</code>.'
    },
    {
      topic: 'Dictionaries',
      prompt: 'Consider this dictionary:',
      code: 'student = {"name": "Ada", "grade": 92}',
      question: 'Write a line of code that adds a new key <code>"subject"</code> with the value <code>"Math"</code>.',
      answerCode: 'student["subject"] = "Math"',
      explanation: 'Assigning to a new key adds it to the dictionary.'
    },
    {
      topic: 'Dictionaries',
      prompt: 'Consider this dictionary:',
      code: 'prices = {"apple": 1, "banana": 2, "cherry": 3}',
      question: 'What does <code>prices["banana"]</code> evaluate to?',
      answer: '<code>2</code>',
      explanation: 'The key <code>"banana"</code> maps to the value <code>2</code>.'
    },
    {
      topic: 'If Statements',
      prompt: 'What does this code print?',
      code: 'x = 10\nif x > 5:\n    print("big")\nelse:\n    print("small")',
      answer: '<code>big</code>',
      explanation: '<code>x &gt; 5</code> is <code>True</code> because <code>10 &gt; 5</code>, so the <code>if</code> branch runs.'
    },
    {
      topic: 'If Statements',
      prompt: 'What does this code print?',
      code: 'score = 75\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelse:\n    print("C")',
      answer: '<code>C</code>',
      explanation: '<code>75</code> is not <code>&gt;= 90</code> and not <code>&gt;= 80</code>, so the <code>else</code> branch runs.'
    },
    {
      topic: 'For Loops',
      prompt: 'What does this code print?',
      code: 'for i in range(3):\n    print(i)',
      answer: '<pre class="code"><code>0\n1\n2</code></pre>',
      explanation: '<code>range(3)</code> produces the numbers <code>0, 1, 2</code> — it stops before <code>3</code>.'
    },
    {
      topic: 'For Loops',
      prompt: 'What does this code print?',
      code: 'fruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)',
      answer: '<pre class="code"><code>apple\nbanana\ncherry</code></pre>',
      explanation: 'A <code>for</code> loop over a list visits each element in order.'
    },
    {
      topic: 'For Loops',
      prompt: 'What does this code print?',
      code: 'total = 0\nfor n in [1, 2, 3, 4]:\n    total += n\nprint(total)',
      answer: '<code>10</code>',
      explanation: 'The loop adds each number to <code>total</code>: <code>1 + 2 + 3 + 4 = 10</code>. Note that <code>total += n</code> is shorthand for <code>total = total + n</code> — they do the same thing.'
    },
    {
      topic: 'Functions',
      prompt: 'What does this code print?',
      code: 'def add(a, b):\n    return a + b\n\nprint(add(3, 4))',
      answer: '<code>7</code>',
      explanation: '<code>add(3, 4)</code> returns <code>3 + 4</code>, which is <code>7</code>.'
    },
    {
      topic: 'Functions',
      prompt: 'What does this code print?',
      code: 'def greet(name):\n    print(f"Hello, {name}!")\n\ngreet("World")',
      answer: '<code>Hello, World!</code>',
      explanation: 'The parameter <code>name</code> receives <code>"World"</code>. Inside the f-string, <code>{name}</code> is replaced with that value to produce <code>Hello, World!</code>.'
    },
    {
      topic: 'Functions',
      question: 'Write a function called <code>square</code> that takes one number and returns its square.',
      answerCode: 'def square(n):\n    return n * n',
      explanation: 'There are other valid forms too, e.g. <code>return n ** 2</code>.'
    }
  ]
};
