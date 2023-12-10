
//1.Find all the topics and tasks which are thought in the month of October
db.topics.find({topic_date:{$gt:ISODate("2021-10-01"),$lt:ISODate("2021-10-31")}})
db.tasks.find({due_date:{$gt:ISODate("2021-10-01"),$lt:ISODate("2021-10-31")}})
// 2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.find({drive_date:{$gt:ISODate("2021-10-15"),$lt:ISODate("2021-10-31")}})
// 3.Find all the company drives and students who are appeared for the placement.
db.company_drives.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "user-id",
      foreignField: "user-id",
      as: "placement",
    },
  },
]);
// 4.Find the number of problems solved by the user in codekata
db.user.aggregate([
  {
    $lookup: {
      from: "codekata",
      localField: "user-id",
      foreignField: "user-id",
      as: "number of problems solved",
    },
  },
]);

// 5.Find all the mentors with who has the mentee's count more than 15
db.mentors.find({mentee_count : { $gt: 15 } });
// 6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.attendance.aggregate([{$match:{present: false}}])
db.tasks.find({$and:[{submitted:false},{due_date:{$gt:ISODate("2021-10-15"),$lt:ISODate("2021-10-31")}}]})


 
  
  



