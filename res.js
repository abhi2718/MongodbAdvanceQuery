// mongodb operator -> https://www.mongodb.com/docs/manual/reference/operator/query/nin/#mongodb-query-op.-nin 

// mongodb advance query ==> https://www.youtube.com/watch?v=DZBGEVgL2eE
// find({age:23}) => if no record is found than it will return []

// mongodb Pipeline in Aggregation ==> https://www.youtube.com/watch?v=tpmKglYnE2U
// mongodb Aggregation document ===> https://www.mongodb.com/docs/manual/core/aggregation-pipeline-limits/
// Pipeline in Aggregation example :- 
// const pipeline = [
//     {
//       $match:{
//         age:{
//           $gt:10
//         },
//         name:{
//           $eq:"Abhishek Singh"
//         }
//       }
//     },
//     {
//       $group:{
//         "_id":"$name",
//       }
//     }
//   ];
//   const result = await User.aggregate(pipeline);