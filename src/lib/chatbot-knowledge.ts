
// Simple knowledge base for the chatbot
// In a real application, you would want to use a more sophisticated approach
// such as an actual NLP model or API

interface KnowledgeItem {
  keywords: string[];
  response: string;
}

const programmingKnowledge: KnowledgeItem[] = [
  {
    keywords: ["python", "start", "begin", "learn"],
    response: "To start learning Python, I recommend:\n\n1. Install Python from python.org\n2. Learn the basic syntax\n3. Practice with small projects\n\nHere's a simple Python example:\n\n```python\n# This is your first Python program\nprint(\"Hello, World!\")\n\n# Variables\nname = \"Learner\"\nprint(f\"Hello, {name}!\")\n```"
  },
  {
    keywords: ["java", "start", "begin", "learn"],
    response: "To start with Java:\n\n1. Install JDK (Java Development Kit)\n2. Set up an IDE like IntelliJ or Eclipse\n3. Learn the syntax and OOP concepts\n\nHere's a simple Java example:\n\n```java\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n        \n        // Variables\n        String name = \"Learner\";\n        System.out.println(\"Hello, \" + name + \"!\");\n    }\n}\n```"
  },
  {
    keywords: ["html", "css", "web", "start", "begin", "learn"],
    response: "To learn web development with HTML and CSS:\n\n1. Start with basic HTML structure\n2. Learn CSS for styling\n3. Practice creating simple web pages\n\nHere's a simple HTML example:\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>My First Webpage</title>\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n            margin: 40px;\n        }\n        h1 {\n            color: #333;\n        }\n    </style>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n    <p>This is my first web page.</p>\n</body>\n</html>\n```"
  },
  {
    keywords: ["javascript", "js", "learn", "start"],
    response: "To learn JavaScript:\n\n1. Understand HTML and CSS basics first\n2. Learn JavaScript syntax and DOM manipulation\n3. Practice with interactive elements\n\nHere's a simple JavaScript example:\n\n```javascript\n// Variables\nlet name = \"Learner\";\n\n// Functions\nfunction greet(person) {\n    return `Hello, ${person}!`;\n}\n\n// DOM manipulation\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    document.getElementById(\"greeting\").textContent = greet(name);\n});\n```"
  },
  {
    keywords: ["loop", "for", "while", "iteration"],
    response: "Loops are fundamental in programming. Here are examples in different languages:\n\n**Python For Loop:**\n```python\nfor i in range(5):\n    print(i)  # Prints 0, 1, 2, 3, 4\n```\n\n**Java For Loop:**\n```java\nfor (int i = 0; i < 5; i++) {\n    System.out.println(i);  // Prints 0, 1, 2, 3, 4\n}\n```\n\n**JavaScript For Loop:**\n```javascript\nfor (let i = 0; i < 5; i++) {\n    console.log(i);  // Prints 0, 1, 2, 3, 4\n}\n```"
  },
  {
    keywords: ["function", "method", "define"],
    response: "Functions are blocks of reusable code. Here are examples:\n\n**Python Function:**\n```python\ndef add(a, b):\n    return a + b\n\nresult = add(5, 3)  # result = 8\n```\n\n**Java Method:**\n```java\npublic int add(int a, int b) {\n    return a + b;\n}\n\nint result = add(5, 3);  // result = 8\n```\n\n**JavaScript Function:**\n```javascript\nfunction add(a, b) {\n    return a + b;\n}\n\nconst result = add(5, 3);  // result = 8\n```"
  },
  {
    keywords: ["variable", "declare", "define"],
    response: "Variables store data values. Here's how to declare them:\n\n**Python Variables:**\n```python\nname = \"John\"  # String\nage = 30      # Integer\nprice = 19.99  # Float\nis_student = True  # Boolean\n```\n\n**Java Variables:**\n```java\nString name = \"John\";\nint age = 30;\ndouble price = 19.99;\nboolean isStudent = true;\n```\n\n**JavaScript Variables:**\n```javascript\nlet name = \"John\";\nconst age = 30;\nlet price = 19.99;\nlet isStudent = true;\n```"
  },
  {
    keywords: ["class", "object", "oop"],
    response: "Classes are blueprints for objects. Here are examples:\n\n**Python Class:**\n```python\nclass Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n        \n    def greet(self):\n        return f\"Hello, my name is {self.name}\"\n\n# Create an object\nperson = Person(\"John\", 30)\nprint(person.greet())\n```\n\n**Java Class:**\n```java\npublic class Person {\n    private String name;\n    private int age;\n    \n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    public String greet() {\n        return \"Hello, my name is \" + name;\n    }\n}\n\n// Create an object\nPerson person = new Person(\"John\", 30);\nSystem.out.println(person.greet());\n```\n\n**JavaScript Class:**\n```javascript\nclass Person {\n    constructor(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    greet() {\n        return `Hello, my name is ${this.name}`;\n    }\n}\n\n// Create an object\nconst person = new Person(\"John\", 30);\nconsole.log(person.greet());\n```"
  },
  {
    keywords: ["array", "list", "collection"],
    response: "Arrays/Lists store collections of items. Examples:\n\n**Python List:**\n```python\nfruits = [\"apple\", \"banana\", \"cherry\"]\n\n# Accessing elements\nprint(fruits[0])  # apple\n\n# Adding elements\nfruits.append(\"orange\")\n\n# Iterating\nfor fruit in fruits:\n    print(fruit)\n```\n\n**Java Array:**\n```java\n// Fixed size array\nString[] fruits = {\"apple\", \"banana\", \"cherry\"};\n\n// ArrayList for dynamic size\nimport java.util.ArrayList;\nimport java.util.List;\n\nList<String> fruitList = new ArrayList<>();\nfruitList.add(\"apple\");\nfruitList.add(\"banana\");\n\n// Iterating\nfor (String fruit : fruitList) {\n    System.out.println(fruit);\n}\n```\n\n**JavaScript Array:**\n```javascript\nconst fruits = [\"apple\", \"banana\", \"cherry\"];\n\n// Adding elements\nfruits.push(\"orange\");\n\n// Iterating\nfruits.forEach(fruit => {\n    console.log(fruit);\n});\n```"
  },
  {
    keywords: ["dictionary", "map", "object", "key", "value"],
    response: "Dictionaries/Maps store key-value pairs:\n\n**Python Dictionary:**\n```python\nperson = {\n    \"name\": \"John\",\n    \"age\": 30,\n    \"city\": \"New York\"\n}\n\n# Accessing values\nprint(person[\"name\"])  # John\n\n# Adding new key-value pairs\nperson[\"email\"] = \"john@example.com\"\n\n# Iterating\nfor key, value in person.items():\n    print(f\"{key}: {value}\")\n```\n\n**Java Map:**\n```java\nimport java.util.HashMap;\nimport java.util.Map;\n\nMap<String, Object> person = new HashMap<>();\nperson.put(\"name\", \"John\");\nperson.put(\"age\", 30);\n\n// Accessing values\nString name = (String) person.get(\"name\");\n\n// Iterating\nfor (Map.Entry<String, Object> entry : person.entrySet()) {\n    System.out.println(entry.getKey() + \": \" + entry.getValue());\n}\n```\n\n**JavaScript Object:**\n```javascript\nconst person = {\n    name: \"John\",\n    age: 30,\n    city: \"New York\"\n};\n\n// Accessing values\nconsole.log(person.name);  // John\n\n// Adding new properties\nperson.email = \"john@example.com\";\n\n// Iterating\nfor (const key in person) {\n    console.log(`${key}: ${person[key]}`);\n}\n```"
  },
  {
    keywords: ["hello", "hi", "hey"],
    response: "Hello! I'm Code Buddy, your programming assistant. I can help with questions about:\n\n- Python\n- Java\n- JavaScript\n- HTML/CSS\n- Programming concepts\n\nWhat would you like to learn today?"
  }
];

export function getResponseForMessage(message: string): string {
  // Convert message to lowercase for case-insensitive matching
  const lowerMessage = message.toLowerCase();
  
  // Find matching knowledge items
  const matchingItems: KnowledgeItem[] = [];
  
  programmingKnowledge.forEach(item => {
    // Check if any keyword matches the message
    const hasMatch = item.keywords.some(keyword => 
      lowerMessage.includes(keyword.toLowerCase())
    );
    
    if (hasMatch) {
      matchingItems.push(item);
    }
  });
  
  // If we found matches, return the response from the first match
  if (matchingItems.length > 0) {
    return matchingItems[0].response;
  }
  
  // Default response if no match found
  return "I don't have specific information about that topic yet. I can help with questions about Python, Java, JavaScript, HTML/CSS, and general programming concepts. Could you try asking in a different way?";
}
