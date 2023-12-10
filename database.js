//create database
//use Zen_Class
//cteate collections
db.createCollection("users")
db.createCollection("codekata")
db.createCollection("attendance")
db.createCollection(" topics")
db.createCollection("tasks")
db.createCollection("company_drives")
db.createCollection(" mentors")

//inserting users collection
db.users.insertMany([
    {
      "user-id": 1,
      "name": "Meenatchi",
      "email": "meena@gmail.com",
      "mentor-id": 1,
    },
    {
      "user-id": 2,
      "name": "Balaji",
      "email": "bala@gmail.com",
      "mentor-id": 2,
    },
    {
      "user-id": 3,
      "name": "Keerthana",
      "email": "keerthi@gmail.com",
     " mentor-id": 4,
    },
    {
      "user-id": 4,
      "name": "Bharath",
      "email": "bharath@gmail.com",
      "mentor-id": 4,
    },
    {
      "user-id": 5,
      "name": "Stalin",
      "email": "stalin@gmail.com",
      "mentor-id": 5,
    },
    {
        "user-id": 6,
        "name": "Praveen",
        "email": "praveen@gmail.com",
        "mentor-id": 7,
      },
      {
        "user-id": 7,
        "name": "Manoj",
        "email": "manoj@gmail.com",
        "mentor-id": 7,
      },
      {
        "user-id": 8,
        "name": "Shreedhana",
        "email": "shreedhana@gmail.com",
        "mentor-id": 9,
      },
      {
        "user-id": 9,
        "name": "Soniya",
        "email": "soniya@gmail.com",
        "mentor-id": 8,
      },
      {
        "user-id": 10,
        "name": "Meera",
        "email": "meera@gmail.com",
        "mentor-id": 10,
      },
  ])
  // inserting codekata collection
db.codekata.insertMany([
    {
      "user-id": 1,
      "no_of_problems_solved": 45,
    },
    {
      "user-id": 2,
      "no_of_problems_solved": 10,
    },
    {
      "user-id": 3,
      "no_of_problems_solved": 25,
    },
    {
      "user-id": 4,
      "no_of_problems_solved": 30,
    },
    {
      "user-id": 5,
      "no_of_problems_solved": 50,
    },
    {
      "user-id": 6,
      "no_of_problems_solved": 10,
    },
    {
      "user-id": 7,
      "no_of_problems_solved": 25,
    },
    {
      "user-id": 8,
      "no_of_problems_solved": 30,
    },
    {
      "user-id": 9,
      "no_of_problems_solved": 50,
    },
    {
      "user-id": 10,
      "no_of_problems_solved": 20,
    },
  
  ]);
  
// inserting attendance collection

db.attendance.insertMany([
    {
      "user-id": 1,
      "topic_id": 10,
      "present": true,
    },
    {
      "user-id": 2,
      "topic_id": 9,
     "present": false,
    },
    {
      "user-id": 3,
      "topic_id": 8,
      "present": true,
    },
    {
      "user-id": 4,
      "topic_id": 7,
      "present": false,
    },
    {
      "user-id": 5,
      "topic_id": 6,
      "present": false,
    },
    {
        "user-id": 6,
        "topic_id": 5,
        "present": true,
      },
      {
        "user-id": 7,
        "topic_id": 4,
       "present": true,
      },
      {
        "user-id": 8,
        "topic_id": 3,
        "present": true,
      },
      {
        "user-id": 9,
        "topic_id": 2,
        "present": false,
      },
      {
        "user-id": 10,
        "topic_id": 1,
        "present": false,
      },
  ]);
  // inserting topics collection
db.topics.insertMany([
    {
        "topic_id": 1,
        "topic": "JS Basic",
        "topic_date": new Date("2021-10-01"),
      },
    {
      "topic_id": 2,
      "topic": "HTML",
      "topic_date": new Date("2021-10-05"),
    },
    {
      "topic_id": 3,
      "topic": "CSS",
      "topic_date": new Date("2021-10-10"),
    },
    {
      "topic_id": 4,
      "topic": "Bootstrap",
      "topic_date": new Date("2021-10-12"),
    },
    {
      "topic_id": 5,
      "topic": "DOM",
      "topic_date": new Date("2021-10-15"),
    },
    {
      "topic_id": 6,
      "topic": "Advance JS",
      "topic_date": new Date("2021-10-19"),
    },
    {
        "topic_id": 7,
        "topic": "React JS",
        "topic_date": new Date("2021-10-23"),
      },
      {
        "topic_id": 8,
        "topic": "DataBase",
        "topic_date": new Date("2021-10-24"),
      },
      {
        "topic_id": 9,
        "topic": "MongoDB",
        "topic_date": new Date("2021-10-26"),
      },
      {
        "topic_id": 10,
        "topic": "Note JS",
        "topic_date": new Date("2021-10-29"),
      },
     
  ]);
  // inserting  tasks collection
db.tasks.insertMany([
    {
      "task_id": 1,
      'topic_id': 1,
      "user-id": 1,
      "task": "JS Basic task",
      "due_date": new Date("2021-10-04"),
      "submitted": true,
    },
    {
        "task_id": 2,
        'topic_id': 2,
        "user-id": 2,
        "task": "HTML task",
        "due_date": new Date("2021-10-09"),
        "submitted":false,
      },
    {
      "task_id": 3,
      'topic_id': 3,
      "user-id": 3,
      "task": "CSS task",
      "due_date": new Date("2021-10-12"),
      "submitted": true,
    },
    {
      "task_id": 4,
      "topic_id": 4,
      "user-id": 4,
      "task": "Bootstrap task",
      "due_date": new Date("2021-10-14"),
      "submitted": false,
    },
    {
      "task_id": 5,
      "topic_id": 5,
      "user-id": 5,
      "task": "DOM task",
      "due_date": new Date("2021-10-17"),
      "submitted": false,
    },
    {
      "task_id": 6,
      "topic_id": 6,
      "user-id": 6,
      "task": "Advance JS task",
      "due_date": new Date("2021-10-21"),
      'submitted': false,
    },
    {
        "task_id": 7,
        "topic_id": 7,
        "user-id": 7,
        "task": "React task",
        "due_date": new Date("2021-10-24"),
        'submitted': true,
      },
     
      {
        "task_id": 8,
        "topic_id":8,
        "user-id": 8,
        "task": "Database task",
        "due_date": new Date("2021-10-25"),
        'submitted': true,
      },  {
        "task_id": 9,
        "topic_id": 9,
        "user-id": 9,
        "task": "MongoDB task",
        "due_date": new Date("2021-10-28"),
        'submitted': false,
      },  {
        "task_id": 10,
        "topic_id": 10,
        "user-id": 10,
        "task": "Note JS task",
        "due_date": new Date("2021-10-31"),
        'submitted': true,
      },
    ])
    // inserting  companydrives collection
db.company_drives.insertMany([
    {
      "user-id": 1,
      "drive_date": new Date("2021-10-04"),
      "company_name": "Google",
    },
    {
      "user-id": 1,
      "drive_date": new Date("2021-10-09"),
      "company_name": "Amazon",
    },
    {
      "user-id": 3,
      "drive_date": new Date("2021-10-12"),
      "company_name": "Walmart",
    },
    {
      "user-id": 4,
      "drive_date": new Date("2021-10-14"),
      "company_name": "Zoho",
    },
    {
      "user-id": 5,
      "drive_date": new Date("2021-10-17"),
      "company_name": "Dell",
    },
      {
      "user-id": 7,
      "drive_date": new Date("2021-10-21"),
      "company_name": "Google",
    },
    {
      "user-id": 7,
      "drive_date": new Date("2021-10-24"),
      "company_name": "Amazon",
    },
    {
      "user-id": 9,
      "drive_date": new Date("2021-10-25"),
      "company_name": "Walmart",
    },
    {
      "user-id": 9,
      "drive_date": new Date("2021-10-28"),
      "company_name": "Zoho",
    },
    {
      "user-id": 10,
      "drive_date": new Date("2021-10-31"),
      "company_name": "Dell",
    },
  ]);
  
// inserting in mentors collection
db.mentors.insertMany([
    {
    "mentor-id": 1,
    "mentor_name": "Sanjay",
    "mentee_count":20,
    "mentor_email": "sanjay@gmail.com",
  },
  {
    "mentor-id": 2,
    "mentor_name": "Preethi",
    "mentee_count":13,
    "mentor_email": "preethi@gmail.com",
  },
  {
    "mentor-id": 3,
    "mentor_name": "Nanda",
    "mentee_count":10,
    "mentor_email": "nanda@gmail.com",
  },
  {
    "mentor-id": 4,
    "mentor_name": "Pooja",
    "mentee_count":18,
    "mentor_email": "pooja@gmail.com",
  },
  {
    "mentor-id": 5,
    "mentor_name": "Laser Mary",
    "mentee_count":9,
    "mentor_email": "laser@gmail.com",
  },
  {
    "mentor-id": 6,
    "mentor_name": "Vithya",
    "mentee_count":4,
    "mentor_email": "vithya@gmail.com",
  },
  {
    "mentor-id": 7,
    "mentor_name": "Reka",
    "mentee_count":19,
    "mentor_email": "reka@gmail.com",
  },
  {
    "mentor-id": 8,
    "mentor_name": "Arun kumar",
    "mentee_count":8,
    "mentor_email": "arun@gmail.com",
  },
  {
    "mentor-id": 9,
    "mentor_name": "Senthil",
    "mentee_count":25,
    "mentor_email": "senthil@gmail.com",
  },
  {
    "mentor-id": 10,
    "mentor_name": "Thirupathi",
    "mentee_count":16,
    "mentor_email": "thiru@gmail.com",
  },
]);
