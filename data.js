// data.js

const predefinedRoadmaps = [
  {
  id: "java-roadmap",
  title: "Java",
  description: "OOP, Collections, Threads, JVM, Streams, File I/O, Lambda",
  trending: true,
  steps: [
    {
      title: "Java Basics",
      videoUrl: "https://www.youtube.com/watch?v=grEKMHGYyns",
      note: "### Java Basics\n- Syntax, variables, data types\n- Conditionals, loops, arrays\n- Functions and basic classes",
      completed: false
    },
    {
      title: "OOP in Java",
      videoUrl: "https://youtu.be/BSVKUk58K6U?si=cHrf9-3u6ln0WX3j",
      note: "### Object-Oriented Programming (OOP)\n- Classes, Objects\n- Inheritance, Polymorphism\n- Encapsulation, Abstraction",
      completed: false
    },
    {
      title: "Exception Handling",
      videoUrl: "https://youtu.be/W-N2ltgU-X4?si=RKo9fNk77Ytn5moD",
      note: "### Exception Handling\n- try-catch-finally\n- Checked vs Unchecked Exceptions\n- Custom Exceptions",
      completed: false
    },
    {
      title: "Java Collections Framework",
      videoUrl: "https://youtu.be/9ogGan-R1pc?si=m8GwLerxgeQoUmti",
      note: "### Collections\n- List, Set, Map, Queue\n- ArrayList vs LinkedList\n- HashMap vs TreeMap",
      completed: false
    },
    {
      title: "Multithreading and Concurrency",
      videoUrl: "https://youtu.be/Rot2QnaUqBU?si=dIL5dThA4ovw4pjt",
      note: "### Multithreading\n- Thread class and Runnable interface\n- Synchronization\n- Executors, Thread Pools",
      completed: false
    },
    {
      title: "JVM Internals",
      videoUrl: "https://youtu.be/Ms7KDg_TVcI?si=ILicasY_BWsosLFr",
      note: "### JVM Internals\n- Class Loader\n- Heap, Stack, Method Area\n- Garbage Collection",
      completed: false
    },
    {
      title: "File I/O in Java",
      videoUrl: "https://youtu.be/b35mlSPOlJg?si=LaN5NG0Rnuowdzon",
      note: "### File I/O\n- FileReader, FileWriter\n- BufferedReader, Scanner\n- Reading/writing text files",
      completed: false
    },
    {
      title: "Java 8+ Features",
      videoUrl: "https://youtu.be/QRwG9X9l6xI?si=OUHFgrLJrZe6H4mB",
      note: "### Java 8+ Features\n- Lambda Expressions\n- Functional Interfaces\n- Streams API, Optional, Method references",
      completed: false
    },
    {
      title: "Java Stream API",
      videoUrl: "https://youtu.be/tklkyVa7KZo?si=I35KYIlpDHTomGoa",
      note: "### Streams API\n- map, filter, reduce\n- Collectors and terminal operations\n- Lazy vs eager evaluation",
      completed: false
    },
    {
      title: "Java Best Practices",
      videoUrl: "https://youtube.com/playlist?list=PLGRDMO4rOGcMhnsyQj7gpojVMGnJP5kv1&si=6war_-ktWKkZZC3x",
      note: "### Best Practices\n- Immutability\n- Code conventions\n- Effective memory usage, clean code",
      completed: false
    }
  ]
},


  {
  id: "dsa-roadmap",
  title: "Master DSA",
  description: "Arrays, Strings, LinkedList, Stack, Trees, Graphs, DP and more",
  trending: true,
  steps: [
    {
      title: "Arrays - Basic Problems",
      videoUrl: "https://youtube.com/playlist?list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB&si=xDYPZ2YAsEDmjzK7",
      note: "### Arrays (Basics)\n- Reverse array\n- Find max/min\n- Rotate array\n- Move zeros to end",
      completed: false
    },
    {
      title: "Sorting Algorithms",
      videoUrl: "https://youtu.be/HGk_ypEuS24?si=sfzvq_echwssCHzl",
      note: "### Sorting\n- Bubble, Insertion, Selection\n- Merge Sort, Quick Sort\n- Time & space complexities",
      completed: false
    },
    {
      title: "Hashing + Prefix Sum",
      videoUrl: "https://youtu.be/XLbvmMz8Fr8?si=dGWX16OiMYxiga74",
      note: "### Hashing\n- Frequency map\n- Count subarrays with sum K\n- Prefix sums & optimization",
      completed: false
    },
    {
      title: "Two Pointer + Sliding Window",
      videoUrl: "https://youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL&si=drOuIQdbxjZwELDu",
      note: "### Two Pointer / Sliding Window\n- Longest substring\n- Max sum subarray\n- Kadane’s Algorithm",
      completed: false
    },
    {
      title: "Binary Search",
      videoUrl: "https://youtube.com/playlist?list=PLgUwDviBIf0pMFMWuuvDNMAkoQFi-h0ZF&si=uB4uXp9nhdQIzdXh",
      note: "### Binary Search\n- Search in rotated sorted array\n- Lower/Upper bound\n- Peak element",
      completed: false
    },
    {
      title: "Linked List",
      videoUrl: "https://youtu.be/58YbpRDc4yw?si=iBPNsZf5IMMVr_kY",
      note: "### Linked List\n- Reverse list\n- Detect cycle (Floyd’s algo)\n- Merge K sorted lists",
      completed: false
    },
    {
      title: "Stack and Queue",
      videoUrl: "https://youtu.be/rHQI4mrJ3cg?si=LXAhS3wcc7i5lnyT",
      note: "### Stack & Queue\n- Next greater element\n- Min Stack\n- Implement queue using stack",
      completed: false
    },
    {
      title: "Greedy Algorithms",
      videoUrl: "https://youtu.be/DIX2p7vb9co?si=RY2TrqoD1_EU9d7s",
      note: "### Greedy\n- Activity selection\n- Job sequencing\n- Fractional knapsack",
      completed: false
    },
    {
      title: "Recursion and Backtracking",
      videoUrl: "https://youtu.be/M2uO2nMT0Bk?si=rSkr0CkoTb26sSTw",
      note: "### Recursion & Backtracking\n- Subsets, permutations\n- N-Queens\n- Sudoku solver",
      completed: false
    },
    {
      title: "Binary Trees",
      videoUrl: "https://youtu.be/4s1Tcvm00pA?si=sQwrFMtyTaf8dG-s",
      note: "### Binary Trees\n- Inorder/Preorder/Postorder\n- Diameter\n- Zigzag/Level order traversal",
      completed: false
    },
    {
      title: "Binary Search Trees",
      videoUrl: "https://youtu.be/p7-9UvDQZ3w?si=rTmGjwOVagNhuzkg",
      note: "### BST\n- Insert/Delete/Search\n- Floor/Ceil in BST\n- Kth smallest/largest element",
      completed: false
    },
    {
      title: "Heaps / Priority Queue",
      videoUrl: "https://youtu.be/Qf-TDPr0nYw?si=1sdLsxXA6bZtigsD",
      note: "### Heap\n- MaxHeap, MinHeap\n- K largest/smallest elements\n- Median in stream",
      completed: false
    },
    {
      title: "Graphs - BFS/DFS",
      videoUrl: "https://youtu.be/-tgVpUgsQ5k?si=r5wS9_ZW_JR9_4DS",
      note: "### Graphs\n- DFS, BFS\n- Detect cycle\n- Topological sort\n- Connected components",
      completed: false
    },
    {
      title: "Graphs - MST & Dijkstra",
      videoUrl: "https://www.youtube.com/watch?v=ZtZaR7EcGwg",
      note: "### Advanced Graphs\n- Prim’s, Kruskal’s MST\n- Dijkstra’s Algorithm\n- Bellman-Ford",
      completed: false
    },
    {
      title: "Dynamic Programming - 1D/2D",
      videoUrl: "https://youtu.be/oBt53YbR9Kk?si=z4yhbmiGgEcu1R68",
      note: "### DP Basics\n- Fibonacci, Climbing stairs\n- 0/1 Knapsack, Subset Sum\n- Memoization vs Tabulation",
      completed: false
    },
    {
      title: "Dynamic Programming - Advanced",
      videoUrl: "https://youtu.be/oBt53YbR9Kk?si=z4yhbmiGgEcu1R68",
      note: "### DP Advanced\n- LIS, LCS\n- Matrix DP\n- Partition Equal Subset Sum",
      completed: false
    },
    {
      title: "Tries",
      videoUrl: "https://youtu.be/dBGUmUQhjaM?si=a0OfWLa_Cguj7VDB",
      note: "### Trie\n- Insert/Search/Delete\n- Prefix count\n- Word suggestions / Autocomplete",
      completed: false
    },
    {
      title: "Bit Manipulation",
      videoUrl: "https://youtu.be/qQd-ViW7bfk?si=DyMbd1UfshuBB1QV",
      note: "### Bit Manipulation\n- AND, OR, XOR basics\n- Find unique element\n- Subsets using bits",
      completed: false
    },
    {
      title: "Maths for DSA",
      videoUrl: "https://youtu.be/fzip9Aml6og?si=D3MyQi41ZhlFnAfI",
      note: "### Math\n- GCD, LCM\n- Prime Sieve\n- Fast Exponentiation, Mod Inverse",
      completed: false
    },
    {
      title: "Segment Trees",
      videoUrl: "https://youtu.be/ciHThtTVNto?si=Gfw_dgT0udYmIEaM",
      note: "### Segment Tree\n- Range sum, min, max queries\n- Lazy propagation\n- Update queries efficiently",
      completed: false
    }
  ]
}
  
  ,
  {
  id: "os-roadmap",
  title: "Operating System",
  description: "Processes, Threads, Scheduling, Memory, Deadlocks, File Systems",
  trending: true,
  steps: [
    {
      title: "Introduction to OS",
      videoUrl: "https://youtu.be/26QPDBe-NB8",
      note: "### What is OS?\n- Functions of OS\n- Types of OS (Batch, Time-sharing)",
      completed: false
    },
    {
      title: "Process Management",
      videoUrl: "https://youtu.be/xq3aJm2_H_w",
      note: "### Processes\n- PCB, process states\n- Context switching",
      completed: false
    },
    {
      title: "Threads and CPU Scheduling",
      videoUrl: "https://youtu.be/SGd0I7nKqfA",
      note: "### Scheduling\n- FCFS, SJF, Round Robin\n- Multilevel scheduling",
      completed: false
    },
    {
      title: "Interprocess Communication",
      videoUrl: "https://youtu.be/yX8KuPZCAMo",
      note: "### IPC\n- Shared memory\n- Message passing, semaphores",
      completed: false
    },
    {
      title: "Deadlocks",
      videoUrl: "https://youtu.be/dvTIkBwwa6Y",
      note: "### Deadlocks\n- Necessary conditions\n- Avoidance & prevention\n- Banker's Algorithm",
      completed: false
    },
    {
      title: "Memory Management",
      videoUrl: "https://youtu.be/1FYR3To5l-Q",
      note: "### Memory\n- Paging vs Segmentation\n- Virtual Memory\n- Page Replacement",
      completed: false
    },
    {
      title: "File Systems",
      videoUrl: "https://youtu.be/dZkJt8sP3Gk",
      note: "### File System\n- Directory structure\n- Allocation strategies\n- FAT, NTFS, Inodes",
      completed: false
    },
    {
      title: "I/O and Disk Scheduling",
      videoUrl: "https://youtu.be/RVYb-B7G5tI",
      note: "### I/O Systems\n- Disk scheduling (FCFS, SSTF, SCAN)\n- DMA, buffering",
      completed: false
    }
  ]
}
,
{
  id: "cn-roadmap",
  title: "Computer Networks",
  description: "OSI, TCP/IP, Routing, Protocols, DNS, HTTP, Security",
  trending: true,
  steps: [
    {
      title: "Introduction to Networking",
      videoUrl: "https://youtu.be/qiQR5rTSshw",
      note: "### What is a Network?\n- LAN, WAN, MAN\n- Packet switching vs circuit switching",
      completed: false
    },
    {
      title: "OSI & TCP/IP Models",
      videoUrl: "https://youtu.be/Jq3NvV5rPz8",
      note: "### Network Models\n- OSI 7 layers\n- TCP/IP model",
      completed: false
    },
    {
      title: "IP Addressing and Subnetting",
      videoUrl: "https://youtu.be/ZCXMxI3gYrc",
      note: "### IP Addresses\n- IPv4 vs IPv6\n- CIDR and subnet masks",
      completed: false
    },
    {
      title: "Data Link Layer & MAC",
      videoUrl: "https://youtu.be/jDkBfF3HOx4",
      note: "### Datalink Layer\n- MAC addressing\n- CSMA/CD, ARP protocol",
      completed: false
    },
    {
      title: "Routing Algorithms",
      videoUrl: "https://youtu.be/GvE00p0GqJg",
      note: "### Network Layer\n- Routing concepts\n- Distance vector & link state",
      completed: false
    },
    {
      title: "Transport Layer & TCP/UDP",
      videoUrl: "https://youtu.be/vY2MZ1kM4og",
      note: "### Transport Layer\n- TCP vs UDP\n- Port numbers, flow control, congestion",
      completed: false
    },
    {
      title: "DNS and DHCP",
      videoUrl: "https://youtu.be/l0v9HZ1_UD4",
      note: "### Application Layer\n- DNS resolution\n- DHCP mechanism",
      completed: false
    },
    {
      title: "HTTP, FTP & SMTP",
      videoUrl: "https://youtu.be/2S0TkEo7aUI",
      note: "### Protocols\n- HTTP request/response\n- Email protocols: SMTP, POP3, IMAP",
      completed: false
    },
    {
      title: "Network Security Basics",
      videoUrl: "https://youtu.be/Mzq7OLoS6XY",
      note: "### Security\n- Encryption\n- Firewalls, VPN, SSL/TLS basics",
      completed: false
    }
  ]
},
{
  id: "dbms-roadmap",
  title: "DBMS",
  description: "ER Models, SQL, Normalization, Transactions, Indexing, Concurrency",
  trending: true,
  steps: [
    {
      title: "Introduction to DBMS",
      videoUrl: "https://youtu.be/mY4jXg2Q2Xo",
      note: "### What is DBMS?\n- Purpose of databases\n- DBMS vs File System\n- Types of DBMS",
      completed: false
    },
    {
      title: "ER Model & Relational Model",
      videoUrl: "https://youtu.be/SbZ0I_9UMr8",
      note: "### ER Diagrams\n- Entities, attributes, relationships\n- Mapping ER to Relational Model",
      completed: false
    },
    {
      title: "SQL Basics",
      videoUrl: "https://youtu.be/HXV3zeQKqGY",
      note: "### SQL\n- DDL, DML, DCL commands\n- SELECT, WHERE, JOINs\n- GROUP BY, ORDER BY",
      completed: false
    },
    {
      title: "Normalization",
      videoUrl: "https://youtu.be/5OdVJbNCSso",
      note: "### Normal Forms\n- 1NF, 2NF, 3NF\n- BCNF and redundancy\n- Decomposition",
      completed: false
    },
    {
      title: "Transaction Management",
      videoUrl: "https://youtu.be/zQpAxVqziI8",
      note: "### Transactions\n- ACID properties\n- Schedules and serializability",
      completed: false
    },
    {
      title: "Indexing and File Organization",
      videoUrl: "https://youtu.be/BRO7mVIFt08",
      note: "### Indexing\n- Primary, secondary, B+ trees\n- File organization techniques",
      completed: false
    },
    {
      title: "Concurrency Control",
      videoUrl: "https://youtu.be/oL6JBUk6tj0",
      note: "### Concurrency\n- Lock-based protocols\n- Timestamp ordering",
      completed: false
    },
    {
      title: "Recovery and Backup",
      videoUrl: "https://youtu.be/1eRrAUZ8J3g",
      note: "### Recovery\n- Log-based recovery\n- Checkpoints and crash recovery",
      completed: false
    }
  ]
}

];

window.predefinedRoadmaps = predefinedRoadmaps;
