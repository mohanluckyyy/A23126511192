const notificationsData=[
{id:1,title:"Google Placement Drive",message:"Google is hiring SDE Interns. Apply before deadline.",type:"Placement",date:"2026-06-24",read:false},
{id:2,title:"Amazon Placement Drive",message:"Amazon online assessment has been scheduled.",type:"Placement",date:"2026-06-23",read:true},
{id:3,title:"Semester Result",message:"Your semester results are published.",type:"Result",date:"2026-06-22",read:false},
{id:4,title:"Coding Contest",message:"Join the coding competition this weekend.",type:"Event",date:"2026-06-21",read:true},
{id:5,title:"Microsoft Placement",message:"Microsoft internship applications are open.",type:"Placement",date:"2026-06-20",read:false},
{id:6,title:"Hackathon Event",message:"College hackathon registration started.",type:"Event",date:"2026-06-19",read:false},
{id:7,title:"Exam Result",message:"Internal exam marks are available.",type:"Result",date:"2026-06-18",read:true},
{id:8,title:"TCS Recruitment",message:"TCS NQT registrations are open.",type:"Placement",date:"2026-06-17",read:false},
{id:9,title:"Workshop Event",message:"AI and ML workshop will be conducted tomorrow.",type:"Event",date:"2026-06-16",read:true},
{id:10,title:"Infosys Drive",message:"Infosys placement drive starts next week.",type:"Placement",date:"2026-06-15",read:false}
];

export function fetchNotifications({type="All",page=1,limit=5}={}){
let filtered=notificationsData;

if(type!=="All"){
filtered=filtered.filter(notification=>notification.type===type);
}

const start=(page-1)*limit;
const end=start+limit;

return Promise.resolve({
notifications:filtered.slice(start,end),
total:filtered.length,
totalPages:Math.ceil(filtered.length/limit)
});
}