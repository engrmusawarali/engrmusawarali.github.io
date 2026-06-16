// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-structures-lab",
          title: 'Data Structures - Lab',
          description: "Practical implementations of core data structures and programming techniques, including command-line file streaming, debugging, dynamic allocation, recursion architectures, elementary sorting, linked lists, stacks, queues, hash tables, and advanced graph algorithms.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/Data%20Structures%20Lab/";
            },},{id: "teachings-digital-logic-design-dld",
          title: 'Digital Logic Design (DLD)',
          description: "This course introduces the concepts &amp; tools for the design of digital electronic circuits using sequential and combinational logic to freshman computer science students.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/Digital%20Logic%20Design/";
            },},{id: "teachings-discrete-structures",
          title: 'Discrete Structures',
          description: "Logic, relations, functions, basic set theory, counting, proof techniques, mathematical induction, graph theory, recursion, recurrence relations, number theory and sequence &amp; series. All the topics will be taught in perspective of their applications in computing.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/Discrete%20Structures/";
            },},{id: "teachings-object-oriented-programming-lab",
          title: 'Object - Oriented Programming - Lab',
          description: "Practical implementation of the object-oriented paradigm. Covers IDE setup, data abstraction, encapsulation, constructors, destructors, inheritance architectures, polymorphism, operator overloading, file handling, templates, and graphical user interfaces using C++ and C#.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/Object%20Oriented%20Programming%20Lab/";
            },},{id: "teachings-programming-fundamentals-lab",
          title: 'Programming Fundamentals - Lab',
          description: "Getting students acquainted with problem understanding, modeling and solving. Covers computation, problem-solving techniques, and complete syntax implementation using the C programming language.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/Programming%20Fundamentals%20-%20Lab/";
            },},{id: "teachings-programming-fundamentals",
          title: 'Programming Fundamentals',
          description: "This course introduces fundamental computing concepts and structured programming methodologies. Students will develop logical reasoning, algorithmic problem-solving skills, and practical programming proficiency using the C language.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/Programming%20Fundamentals/";
            },},{id: "teachings-theory-of-computation-automata",
          title: 'Theory of Computation / Automata',
          description: "Finite State Models, Regular expressions/Regular languages, Finite automata (FAs), Transition graphs (TGs), NFAs, Kleene’s theorem, Transducers, Pumping lemma, CFGs, Pushdown Automata (PDA), Turing Machines Theory, Decidability, and the Chomsky Hierarchy.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/Theory%20of%20Automata/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
