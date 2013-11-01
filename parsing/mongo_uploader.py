import pymongo

print('==> Parsing data files')

import parser

mongo_url = 'mongodb://infjam.cloudapp.net:27017/'
print('==> Connecting to MongoDB database: %s' % mongo_url)

client = pymongo.MongoClient(mongo_url)

print('==> Dropping all current users in collection')
client.db.users.drop()

print('==> Inserting users parsed from data directory')
for obj in parser.parsed_objs:
    print('====> Uploading the good veteran %s %s' % (obj['DEMOGRAPHICS']['First Name'], obj['DEMOGRAPHICS']['Last Name']))
    client.db.users.insert(obj)

print('==> Done!  Be sure to have fun at the hackathon.  ;)')