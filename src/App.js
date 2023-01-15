import './App.css';
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values =>  {
      console.log(values);
      alert('Login Successful');     
    },
    validate: values => {
      let errors = {};
      if(!values.email) {
        errors.emailError = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.emailError = 'Username should be an email';
      }
      if(!values.password) errors.pswError = 'Field required';
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id='emailField' name='email' type='text' onChange={formik.handleChange} value={formik.values.email} 
        placeholder='Enter your email'/>
        {formik.errors.emailError ? <div style={{color: 'red'}}>{formik.errors.emailError}</div> : null}
        <div>Password</div>
        <input id='pswField' name='password' type='text' onChange={formik.handleChange} value={formik.values.password}
        placeholder='Enter your password'/>
        {formik.errors.pswError ? <div style={{color: 'red'}}>{formik.errors.pswError}</div> : null}
        <div><button id='submitBtn' type='submit' onSubmit={formik.handleSubmit}>Submit</button></div>
      </form>      
    </div>
  );
}

export default App;

//TO DO:  Need to name the errors per the assignment