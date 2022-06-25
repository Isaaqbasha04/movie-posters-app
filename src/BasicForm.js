import {useFormik} from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email:yup
    .string()
    .min(5, "Need a bigger email ")
    .required("why not fill this email?"),
  password:yup.string()
  .min(8, "Need bigger password")
  .max(12, "Too much password")
  .required("why not fill this password"),

});



export function BasicForm() {

  const {handleSubmit, values , handleChange, handleBlur, touched, errors} = 
   useFormik({
    initalValues:{email : "Anusha", password:"123"} ,
    validationSchema: formValidationSchema,
    onSubmit:(values) =>{
      console.log("onSubmit", values);
    }
  });
  return (
    <form onSubmit={handleSubmit}>
      <input 
       placeholder="Enter email"
       name="email" 
       value={values.email}
       onChange={handleChange}
       onBlur={handleBlur}
       />
       {touched.email && errors.email ? errors.email : ""}

      <input  
      type="password" 
      placeholder="Enter password" 
      name="password"
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
      />
      {touched.password && errors.password ? errors.password: ""}
      <button type="submit">Submit </button>
      <p>{JSON.stringify(values)}</p>
      <p>{JSON.stringify(touched)}</p>
      <p>Touched : {JSON.stringify(touched)}</p>
    </form>
  );

}
