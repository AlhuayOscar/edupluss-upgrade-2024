const z = require("zod");

const activitySchema = z.object({
    id: z.string({
        required_error: "El id es un valor requerido"
    }),
    title: z.string({
        invalid_type_error: "El nombre debe ser una cadena de carácteres."
    }),
    hasTest: z.boolean({
        invalid_type_error: "hasTest debe ser un valor booleano."
    }),
    formURL: z.string({
        invalid_type_error: "La URL del formulario debe ser una cadena de carácteres."
    }),
    excelURL: z.string({
        invalid_type_error: "La URL del excel debe ser una cadena de carácteres."
    }),
})

const validateActivity = (input) => {
    return activitySchema.partial().safeParse(input);
}

const validateUpdateActivity = (input) => {
    return activitySchema.partial().safeParse(input);
}

module.exports = {
    validateActivity,
    validateUpdateActivity
}

