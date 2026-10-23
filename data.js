// Static content and rules: keep lesson/world definitions separate from app behavior.

const worlds=[
 {id:"programming",icon:"⌘",name:"Programming",desc:"Bankai",color:"#7aa8ff",xp:0},
 {id:"architecture",icon:"◈",name:"Computer architecture",desc:"Bits, CPU, memory & machine code",color:"#b8a1ff",xp:0},
 {id:"operating",icon:"▣",name:"Operating systems",desc:"Processes, threads, Linux & kernels",color:"#65e0c0",xp:0},
 {id:"networking",icon:"⌁",name:"Networking & web",desc:"DNS, TCP/IP, HTTP & browsers",color:"#ffd477",xp:0},
 {id:"databases",icon:"▤",name:"Databases",desc:"SQL, indexes, transactions & caching",color:"#f6a6d7",xp:0},
 {id:"engineering",icon:"⚒",name:"Software engineering",desc:"Git, testing, architecture & debugging",color:"#80d8ff",xp:0},
 {id:"infrastructure",icon:"⬡",name:"Infrastructure & security",desc:"Containers, VMs, cloud & security",color:"#ff9d9d",xp:0},
 {id:"advanced",icon:"✧",name:"Advanced computing",desc:"Compilers, distributed systems & AI",color:"#c8adff",xp:0}
];

const quests=[
 {id:"lesson",icon:"📖",title:"Learn a new concept",desc:"Complete today's binary lesson.",xp:40,action:"lesson"},
 {id:"lab",icon:"🧪",title:"Experiment in the binary lab",desc:"Change bits and discover patterns.",xp:20,action:"playground"},
 {id:"quiz",icon:"🧠",title:"Pass a knowledge check",desc:"Test your understanding of binary.",xp:15,action:"lesson"}
];

const defaultState={xp:0,lessons:[],quests:[],worlds:[],achievements:[],streak:0,lastVisit:null,quizPassed:false,labDone:false};

const achievements=[
 {id:"first",icon:"🌱",name:"First Steps",desc:"Earn your first XP.",test:s=>s.xp>0},
 {id:"learner",icon:"📚",name:"Curious Mind",desc:"Complete your first lesson.",test:s=>s.lessons.length>0},
 {id:"scientist",icon:"🧪",name:"Lab Scientist",desc:"Finish the binary lab.",test:s=>s.labDone},
 {id:"streak",icon:"🔥",name:"Consistency Spark",desc:"Build a 3-day learning streak.",test:s=>s.streak>=3},
 {id:"century",icon:"⚡",name:"Century Club",desc:"Earn 100 XP.",test:s=>s.xp>=100}
];

export { worlds, quests, defaultState, achievements };
