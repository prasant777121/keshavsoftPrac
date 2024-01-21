# crudGenByPath
generate end points in expressJs using nodejs

create .env file and insert below keys

KS_SQLITE_PASSWORD=9848163021

folder locataion where you should define the table schema :FromTableColumns

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
