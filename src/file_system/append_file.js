function main(req, res, db){
    const fs = require('fs');
    fs.appendFileSync("write_data.txt", "hello World, this is sanket......");
    fs.renameSync("write_data.txt","test_file.txt");
    res.send("append data successfully");
}

module.exports={
    main : main
}