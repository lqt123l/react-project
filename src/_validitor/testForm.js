import Joi from '@hapi/joi';
const schema = Joi.object().keys({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    email:Joi.string().email({ minDomainSegments: 2 })
})

export default schema