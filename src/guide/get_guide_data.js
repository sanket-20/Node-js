function main(req, res, db){
    db.collection("collection_4").aggregate([
        {$match:{"documentType": "guide"}},
        {$project:
        {
            "_id":0,
            "startTimestamp":1,
            "documentType":1,
            "entityType":1,
            "events":1,
            "breakdown":1
        }},

        {$unwind:"$breakdown"},
        {
            $project:{
                "breakdown.startTimestampoutside":"$startTimestamp",
                "breakdown.startTimestamp": "$breakdown.startTimestamp",
                "breakdown.minTime": "$breakdown.minTime",
                "breakdown.maxTime": "$breakdown.maxTime",
                "breakdown.totalTime": "$breakdown.totalTime",
                "breakdown.playedBy": "$breakdown.playedBy",
            }
        },
        {"$replaceRoot":{"newRoot":"$breakdown"}},
        {$group:{
            _id:{startTimestamp:"$startTimestamp"},
            "minTime":{"$sum":"$minTime"},
            "maxTime":{"$sum":"$maxTime"},
            "totalTime":{"$sum":"$totalTime"},
            "playedBy":{"$push":"$playedBy"},//in push whole value will came
            // "playedBy":{"$addToSet":"$playedBy"},//in addToSet repeatedly value will print only one time
        }
        },

        {$project:{
            "minTime":"$minTime",
            "maxTime":"$maxTime",
            "totalTime":"$totalTime",
            "playedBy":{
                "$reduce":{
                    "input":"$playedBy",
                    "initialValue":[],
                    "in":{"$concatArrays":["$$value","$$this"]}
                }
            }
        }
        },
        {
            $sort:{
                "minTime":-1,
            }
        },

        {$project:
        {
            "_id":0
        }}
    ]).toArray(function(err, data){
        res.send(data);
    });
}

module.exports={
    main: main
}