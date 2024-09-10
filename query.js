///// 1.$and   
///// sample_restaurants   
///  { $and: [{ borough: "Brooklyn" }, { cuisine: "Steak" }] }

///// 2. $or  
///// sample_restaurants   
//{ $or: [{ borough: "Brooklyn" }, { cuisine: "Steak" }] }

////// 3. $not  
//sample_restaurants _neighborhoods
//{ name: { $not: /^A.*/ } }

////// 4. $nor
////sample_supplies _sales
/// { $nor: [{ storeLocation: "Seattle" }, { purchaseMethod: "In store" }] }

///// 5. $eq  
////// sample_supplies/sales
/////  { couponUsed: { $ne: false } }

////  6. $ne
////// sample_supplies/sales
/////   { couponUsed: { $eq: true } }


///// 7. $gt  
////// sample_analytics
////// { transaction_count: { $gt: 50 } }

///// 8. $lt
////// sample_analytics
///// { $and: [{transaction_count: { $gt: 50 } }, {transaction_count: { $lt: 70}}] }


////// 9.  $in
/////// sample_restaurants
////// { borough: {$in: ["Manhattan", "Staten Island" ] }}  

////// 10. $nin
/////// sample_restaurants
////{ cuisine: {$nin: ["Pizza", "Salads", "Delicatessen" ] }}
