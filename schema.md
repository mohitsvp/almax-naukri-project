User
- id : ObjectId
- name : String
- password : String
- email : String, Unique
- number : number
- role: ["admin", "user", "super-admin"]
- profilePicture : String
- resume : String (Cloudinary)

Job
- id : ObjectId
- title: string
- type : ["Part Time", "Full Time", "Contract"]
- company : Reference Company ID
- location : String
- skills: [Reference Skill Id's]
- Experience : number
- salary : number
- jobDescription : string
- user_id : Reference User
- category : Reference Job Category


Company
- id : ObjectId
- name : String
- noOfEmployees: number
- description: String
- companyImage : String

Skills
- id : ObjectId
- name : String

Job Category
- id : ObjectID
- name : String