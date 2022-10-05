import Joi from "joi";

const shortUrlSchema=Joi.object({
shortId: Joi.string().required(),
destination: Joi.string().required()

});

export default shortUrlSchema;
