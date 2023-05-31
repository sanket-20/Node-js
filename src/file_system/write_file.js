function main(req, res, db){
    const fs = require('fs');
    fs.writeFileSync("write_data_stream.txt", "hello World, i am sanket");
    
    temp_data = "The biography of oneself narrated by oneself. Autobiographical works can take many forms, from the intimate writings made during life that were not necessarily intended for publication including letters, diaries, journals, memoirs, and reminiscences to a formal book-length autobiography.The biography of oneself narrated by oneself. Autobiographical works can take many forms, from the intimate writings made during life that were not necessarily intended for publication including letters,diaries..";
    for(i=0;i<19; i++)
    {
        temp_data += temp_data;
        console.log(i);
    }
    fs.writeFileSync("write_data_stream.txt", temp_data);
    res.send("Write data successfully");
}

module.exports={
    main : main
}