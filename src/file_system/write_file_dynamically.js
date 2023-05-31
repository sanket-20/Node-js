function main(req, res, db){
    const fs = require('fs');
    
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    fileName ="";
    for ( var i = 0; i < req.body.n; i++ ) {
        fileName = characters.charAt(Math.floor(Math.random() * charactersLength));
        fs.writeFileSync(fileName+".txt", req.body.fileContent);
    }

    // fs.writeFileSync(req.body.fileName, req.body.fileContent);
    res.send("Write data Dynamically successfully");
}

module.exports={
    main : main
}