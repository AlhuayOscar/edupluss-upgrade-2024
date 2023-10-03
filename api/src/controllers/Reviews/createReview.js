const { Review, User } = require('../../db');
const { catchedAsync } = require('../../utils');
const { ClientError } = require("../../utils/index.js");

const createReview = async (req, res) => {
  let { text, rating, activityId, userId } = req.body;
  if(!text){ 
    text= "";
  }
  rating = rating.toString();
  if(rating !=="0" && rating !=="1" && rating !=="2" && rating !=="3" && rating !=="4" && rating !=="5"){
    throw new Error("Ingrese un valor de puntuación correcta.");
  }
  try {
    const employeeUser = await User.findByPk(userId);

    if (employeeUser.tipo !== 'empleado') {
        throw new ClientError(
          'incorrect request: the data sent does not correspond to an employee',
          400
        );
    } else {
        const previousReview = await Review.findAll({
            where: {
            userId: userId,
            activityId: activityId,
            },
        });
        if (previousReview.length > 0) {
            throw new Error("Ya existe una reseña creada anteriormente.");
        } else {
            const newReview = await Review.create({ text, rating, activityId, userId });
            res.status(200).json(newReview);
        }
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = { createReview: catchedAsync(createReview) };