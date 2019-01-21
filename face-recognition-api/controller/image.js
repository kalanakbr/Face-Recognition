const Clarifai = require('clarifai');

//'YOUR_API_KEY'
const app = new Clarifai.App ({
    apiKey:'8b83e88c1c204a638cc02e9816530e94' 
   });

const handleApiCall = (req, res) => {
   app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {
        res.json(data);
    })
    .catch(err => res.status(400).json('Unable to work with API'))
}

const handleImage= (req,res,db) =>{
    const { id } =req.body;
    db('users').where('id','=',id )
    .increment('entries',1)
    .returning('entries')
    .then(entries =>{
        res.json(entries[0]);
    })
    .catch(err => res.status(400).json('Unable to get entries'))
}

module.exports = {
    handleApiCall,
    handleImage
}