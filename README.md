# crudGenByPath
generate end points in expressJs using nodejs

create .env file and insert below keys

KS_SQLITE_PASSWORD=9848163021

folder location where you should define the table schema :FromTableColumns

below the the sample schema for customers.json table : file

{
    "CustomerName":{
        "type": "STRING",
        "allowNull": false
    },
    "CustomerMobile":{
        "type": "NUMBER",
        "allowNull": false
    },
    "CustomerCity":{
        "type": "STRING",
        "allowNull": true
    }
}



different ways to accomplish

1.  for windows run the batch file : BoilerPlate.bat

running the above batch file will result into the below things

1.    bin folder will be created in the root folder ( the backend code )
2.    bin folder will be created in the public/JsonCRUD ( the frontend code )
3.    data.db will be created in the KData/JSON/316 ( the sqlite database location )

#

2.  for any operating system run the below commands in the terminal
    
    1.  npm i
    2.  node KCode\EntryFile.js
  
#for mac  
chmod +x boilerplate.sh
sh boilerplate.sh
npm run start

purpose of this project

read all the json files in this location :FromData

and create crud for these files

important points about the repository

24 Jan 2024

stopped using encrypted sqlite database, because of no npm modules availability and know how available with our team now.
