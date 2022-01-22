const { v4: uuidv4 } = require('uuid');
 
const getRoom = (req, res) => {
 const randomGenUniqueName = uuidv4();
 res.status(200).send({ roomUrl: randomGenUniqueName });
};