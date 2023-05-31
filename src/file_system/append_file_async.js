function main(req, res, db){
    const fs = require('fs');
    fs.appendFile("dwrite_data2.txt", "hello World, this is sanket......",(err,data)=>{
        console.log(err,data);
        fs.rename("dwrite_data2.txt","ddasync_file_test.txt",(err,data2)=>{
            console.log(err,data2);
            res.send("append data successfully");
        });
    });
}

module.exports={
    main : main
}