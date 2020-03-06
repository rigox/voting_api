const Topic =  require("../model/Topic")
const asyncHandler =  require("../middleware/async")


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
     
    const  topic =  await Topic.create(req.body)

    res.status(200).json({
         success:true,
         data: topic
    })

});

//@desc add a photo to the Person
//@POST /api/v1/person/id
//@access Public

exports.addPhoto  = asyncHandler(async (req,res,next)=>{});