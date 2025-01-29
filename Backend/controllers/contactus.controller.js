 const sendContactedMessages = async (req,res) => {
    try {
        const data = req.body
        return res.status(200).send(data)
        
    } catch (error) {
       console.log(error);
        
    }
 } 

 module.exports={
    sendContactedMessages
 }