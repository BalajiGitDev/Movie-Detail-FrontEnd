import { useFormik } from "formik";
import * as yup from "yup";

const movieValidationSchema = yup.object({
    email: yup.string().min(8, "8 Characters and above").required(),
    password: yup.string().min(4).required(),
})

export function Login() {
    const formik = useFormik({
        initialValues: {
            email: "abc@gmail.com",
            password: "abc123",
        },
        validationSchema: movieValidationSchema,
        onSubmit: (values) => {
            console.log("Form Values:", values);
        }
    });

    return (
        <form className="login-form" onSubmit={formik.handleSubmit}>
            <input value={formik.values.email}
                type="email" placeholder="Email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
            {formik.touched.email && formik.errors.email ? formik.errors.email : null}
            <input value={formik.values.password}
                type="text" placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
            {formik.touched.password && formik.errors.password ? formik.errors.password : null}
            <button type="submit">Submit</button>
        </form>
    );
}
