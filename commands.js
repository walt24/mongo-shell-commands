Get all
db.restaurants.find();

Limit and sort
db.restaurants.find().limit(10).sort({name:1});

Get by _id
db.restaurants.findOne({"_id" : ObjectId("5998f651ad1aa08dc27a179e")});

Get by value
db.restaurants.find({borough:"Queens"})

Count
db.restauranst.find().count();

Count by nested value
db.restaurants.find({"address.zipcode": "11206"});

Delete by id
db.restaurants.deleteOne({"_id" : ObjectId("5998f651ad1aa08dc27a179e")});

Update a single document
db.restaurants.updateOne({"_id" : ObjectId("5998f651ad1aa08dc27a179e")},{$set:{"name":"Bizz Bar Bang"}});

Update many documents
db.restaurants.updateMany({"address.zipcode" : "10035"},{$set:{"address.zipcode":"10036"}});
