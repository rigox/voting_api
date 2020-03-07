const Person =  require("../model/Person")
const asyncHandler =  require("../middleware/async")
const path   =  require("path")
const aws =  require("aws-sdk")
// @desc get all topics
//@route  GET /api/v1/Topic
//@access  Public
exports.getPeople = asyncHandler(async(req,res,next)=>{
       const topics =  await Topic.find()

       res.status(200).json({
            success:true,
            topics:topics
       })
    });


// @desc make a topic
//@route  POST /api/v1/Topic
//@access  Public

exports.createPerson   = asyncHandler( async (req,res,next)=>{
     
    const  temp =  await Person.create(req.body)

    res.status(200).json({
         success:true,
         data: temp
    })

});

//@desc add a photo to the Person
//@POST /api/v1/person/id
//@access Public

exports.addPhoto  = asyncHandler(async (req,res,next)=>{
   
     const person =   await Person.findById(req.params.id)

     if(!person){
               return "person not found"
     }

     if(!req.files){
           return "please upload a file"
     }

      const file =   req.files.photo;

    // make sure the  file is a  photo

     if(!file.mimetype.startsWith('image')){
          return "please  upload and image"
     }

     // check file size

     if(file.size > process.env.MAX_FILE_UPLOAD){
             return  "please upload a smaller file"
     }

     //create the file name

     file.name  =  `Photo_${person.id}${path.parse(file.name).ext}`;
    

     const s3  =  new aws.s3()

     const params = {
              Bucket:'rigo002',
              Key:file.name,
              Body:file,
              ACL:'public-read'
     }

     s3.putObject(params,function(err,data){
            if(err){throw err}
            res.status(200).json({
                   success:true,
                   data:'file uploaded'
            })
     });


       

});