function main(req, res, db){
    const fs = require('fs');
    // var readData = fs.readFileSync("write_data.txt",{encoding:'utf8'});
    var readData = fs.readFile("write_data2.txt",(err,data)=>{
        console.log(err,data);
        //another way to read data in console in string format
        console.log(String(data));
        // console.log(data.toString());
        res.send("read data successfully");
    });
}

module.exports={
    main : main
}