---
layout: course
title: Data Structures — Lab
description: Practical implementations of core data structures and programming techniques, including command-line file streaming, debugging, dynamic allocation, recursion architectures, elementary sorting, linked lists, stacks, queues, hash tables, and advanced graph algorithms.
instructor: Mr. Musawar Ali
year: 2022
term: Fall
location: National University of Computer and Emerging Sciences (FAST-NUCES), Karachi Campus
course_id: CS218 (Lab)
schedule:
  - week: 1
    topic: Programming and Debugging Fundamentals
    description: Working with Command-Line arguments, direct file streaming (ifstream/ofstream), and standard IDE debugging execution (Watching, stepping into, stepping over, and stepping out of code segments).
  - week: 2
    topic: Advanced Pointers & Object Lifecycles
    description: Pointer manipulation, address sharing, dynamic object allocation, arrays of dynamic objects, pointer structures (dot operator vs. arrow operator), and the implementation of the "Rule of Three" (destructors, copy constructors, and copy assignment operators).
  - week: 3
    topic: Recursion Paradigms & Backtracking
    description: Analyzing recursive structures including base conditions, direct/indirect recursion, tail/non-tail recursion, and nested recursion. Implementation of backtracking logic via an N*N binary matrix maze search problem.
  - week: 4
    topic: Elementary Sorting Algorithms
    description: Architectural implementation and comparison of Bubble Sort (Sinking Sort), Selection Sort, Insertion Sort, and Shell Sort (utilizing Knuth's increment formula). Analysis of algorithmic time and exchange complexities.
  - week: 5
    topic: Singly Linked Lists (SLL)
    description: Designing a helper Node class and SLL mechanics. Operations include appending, prepending, dynamic mid-list insertion (insertAfter), dynamic element deletion, node updates, and node structural rearrangement problems.
  - week: 6
    topic: Advanced List Variants
    description: Implementing bidirectional navigation via Doubly Linked Lists, Circular Linked Lists, and Circular Double Linked Lists. Efficient algorithms for list concatenation with head/tail preservation.
  - week: 7
    topic: Stacks, Queues & Expression Translation
    description: Implementing Linear Stacks and First-In-First-Out Queues using both contiguous array buffers and dynamic linked nodes. Algorithmic translation of mathematical expressions from Infix to Postfix (Reverse Polish) notation using operator precedence stacks. Implementation of dynamic Priority Queues.
  - week: 8
    topic: Binary Search Trees (BST)
    description: Building binary search trees with left-less/right-greater properties. Writing recursive and iterative tree walk algorithms (Inorder, Preorder, Postorder), entry insertion, and dynamic node deletion (leaf, single-child, and two-children scenarios using inorder successors).
  - week: 9
    topic: Huffman Coding & Lossless Data Compression
    description: Designing Huffman's greedy compression tree using an internal search trie structure and node min-priority queues. Constructing optimal variable-length codes and decoding encoded prefix bit-streams back to original symbol sequences.
  - week: 10-11
    topic: Hash Tables & Collision Resolution
    description: Hash function architectures including Division, Multiplication, Mid-Square, Folding, and Radix mapping methods. Managing entry collisions within array slots using sequential Linear Probing and external node Chaining via integrated singly-linked lists.
  - week: 12
    topic: Graphs & Breadth-First Search (BFS)
    description: Abstract data representations of finite directed and undirected structures via symmetric Adjacency Matrices and memory-efficient Adjacency Lists. Implementation of level-by-level breadth-first traversals via structural tracking queues.
  - week: 13-14
    topic: Depth-First Search (DFS) & Advanced Graph Optimization
    description: Executing deep traversal walks (DFS) alongside structural dry-runs. Implementing greedy optimization algorithms for Minimum Spanning Trees (Prim’s and Kruskal’s algorithms) and Single-Source Shortest Paths (Dijkstra’s algorithm using min-priority queues). Dynamic programming approaches for All-Pairs Shortest Paths (Floyd-Warshall algorithm).
  - week: 15
    topic: Lab Evaluation & Final Grading
    description: Finalization of sessional lab records, practical code verification checks, and final grade compilation.
---

## Lab Core Rules & Policies

- **Attendance & Discipline:** Continuous discipline must be maintained during the lab session. Students must pay close attention and precisely follow all instructions provided by the instructors. For assistance, students should raise their hand to alert an instructor or teaching assistant.
- **Task Completion:** Completing all tasks assigned in each lab session is strictly compulsory. Every student must get their lab work verified and signed off by the lab instructor at the end of each session.

## Grading Evaluation Policy

All evaluations are tracked via formal check-off criteria mapping across your weekly tasks:

- **Lab Activities & Daily Code Tasks:** Evaluated weekly for structural correctness and completion.
- **Lab Mid Exam & Final Practical Evaluations:** Administered under strict conditions to evaluate standalone programming proficiency.