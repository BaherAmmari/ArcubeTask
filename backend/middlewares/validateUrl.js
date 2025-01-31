const Joi = require("joi");

const validateUrl = (req, res, next) => {
  const schema = Joi.object({
    longUrl: Joi.string().uri().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: "URL invalide" });

  next();
};

module.exports = validateUrl;