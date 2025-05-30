import Joi from "joi";

const shortUrlSchema=Joi.object({
shortId: Joi.string(),
destination: Joi.string().required()

});

export default shortUrlSchema;
