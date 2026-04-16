let projects =[
    {

  name: "Transitioning",
  classification: "Organization Of Programming Languages | CMSC 330",
  when: "Spring 25",
  format: "Language: Ocaml",
  description: "This project focused on the concept of non-deterministic finite automata (NFA) and deterministic finite automata (DFA) which are finite state machines.",
  info: [
    "A finite state machine (FSM) is an abstract machine that can be in one of its finite states at a time. Each state represents an accept or decline. The FSM in this project represented regular expressions and could move between states based on letters. Some notable functions I had to implement for this project were: accept, NFA to DFA, and Regex to NFA.",
    "Accept: Took a NFA and string as input and returned true if the string was accepted by the regular expression represented by the NFA. Determined if the NFA ended up in an accept state based on the letters in the string.",
    "NFA to DFA: Took a NFA as input and returned the equivalent DFA.",
    "Regex to NFA: Took in a regular expression as input and returned the NFA that accepts the same language as regex.",
    "Through this project, I developed a deeper understanding of how regular expressions can be translated into finite state machines. The implementation of NFA to DFA and Regex to NFA helped me better understand how the conversion algorithms work as I had to stimulate the processes by hand before being able to execute them in code."
  ],
  demo: [
    "transitioning/transitioning.mp4",
    "transitioning/transitioning.png"
  ]
},
{
    name: "Small C",
    classification: "Organization Of Programming Languages | CMSC 330",
    when: "Spring 25",
    format: "Language: Ocaml",
    description:"This project was the implementation of a lexer, parser, and interpreter for a simple C program.",
    info: ["Lexing is a process at compile time that breaks down a string into tokens the compiler can understand. Parsing is the process of taking those tokens and translating them into an abstract syntax tree (AST) / paring tree, a meaningful format the computer can understand. The interpreter evaluates the statements and expressions of a program to a value, simulating program execution."

    ],
    demo:["small_c/small_c.mp4"]

},
{
    name:"Mini Honeypot",
    classification:"Applied Cybersecurity Foundations I | Hacs 101",
    when:"Spring 25",
    format:"Language: Unix | Python",
    description:"This is a mini project focused on container lifecycles, data collection, and data processing.",
    info:[],
    demo:[]

    


},
{
    name:"Build it Break it",
    classification:"Network Security | CMSC 414",
    when:"Fall 25",
    format:"Language: C",
    description:"h",
    info:["Partner Project"],
    demo:[]
},
{
    name:"Program Proposal",
    classification:"Innovations in Countering Violent Extremism | BSST 335",
    when:"Fall 25",
    format:"Essay",
    description:"Program Proposal designed to prevent far-right extremism in Upstate New York through early identification andintervention in High Schools",
    info:["Group Project", "Program informed by Significance Quest Theory (SQT) using primary, secondary, and tertiary levels of preventionconsistent with public health framework"],
    demo:[]
},
{
    name:"Honeypot Research Project",
    classification:"Applied Cybersecurity Foundations II | HACS 200",
    when:"Fall 25",
    format:"Essay / Language: Unix | Python ",
    description:"Semester long group project based on the research question: “How does attacker behavior vary based on the targeted University of Maryland department?”",
    info:["Group Project","Implemented Unix scripts to manage container lifecycles, initiate Man-in-the Middle (MITM), and MITM log processing","Implemented Python scripts for data formatting, processing, and visualization using pandas"],
    demo:[]
},
{
    name:"Kitchen Kompanions",
    classification:"Intro to Human Computer Interaction | CMSC 434",
    when:"Spring 26",
    format:"Language: HTML | CSS | JavaScript",
    description:"P",
    info:["Group Project"],
    demo:[]
}
]

function project_cards(id){
    const space=document.getElementById(id);
    
    if(space){
        projects.forEach(project=>{
        const card=document.createElement('div');
        card.classList.add("card");
        card.innerHTML=`
           
            <div class="name">${project.name}</div>
            <div class="format">${project.format}</div>
            <div class="classifcation">${project.classification}</div>
            <div class="when">${project.when}</div>
            <div class="description">${project.description}</div>
            
        `;
        space.appendChild(card);

    });
    }
    
}

project_cards("projects");
project_cards("demos");