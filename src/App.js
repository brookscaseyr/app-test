import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import { MoreResources, DisplayFormikState } from './helper';
const App = () => (
// function App = () => (
 <div className="app">
   <h1>
     Basic{' '}
     <a href="https://github.com/jaredpalmer/formik" target="_blank" rel="noopener">
       Formik
     </a>{' '}
     Demo
   </h1>
   <Formik
     initialValues={{
       email: '',
       fullName: '',
       chiefComplaint: 'Select',
       hpi: ''
     }}
     onSubmit={(values, { setSubmitting }) => {
       setTimeout(() => {
         alert(JSON.stringify(values, null, 2));
         setSubmitting(false);
       }, 500);
     }}
     validationSchema={Yup.object().shape({
       email: Yup.string()
         .email()
         .required('Required'),
       name: Yup.string()
         .required('Required'),
     })}
   >
     {props => {
       const {
         values,
         touched,
         errors,
         dirty,
         isSubmitting,
         handleChange,
         handleBlur,
         handleSubmit,
         handleReset,
       } = props;
       return (
         <form onSubmit={handleSubmit}>
           <label htmlFor="email" style={{ display: 'block' }}>
             Email
           </label>
           <input
             id="email"
             placeholder="Enter your email"
             type="text"
             value={values.email}
             onChange={handleChange}
             onBlur={handleBlur}
             className={
               errors.email && touched.email ? 'text-input error' : 'text-input'
             }
           />
           {errors.email && touched.email && (
             <div className="input-feedback">{errors.email}</div>
           )}
           <label htmlFor="fullName" style={{display: 'block'}}>
             Full Name
           </label>
           <input
             id="fullName"
             placeholder="Enter your full name"
             type="text"
             value={values.fullName}
             onChange={handleChange}
             onBlur={handleBlur}
             className={
               errors.fullName && touched.fullName ? 'text-input error' : 'text-input'
             }
           />
           {errors.fullName && touched.fullName && (
             <div className="input-feedback">{errors.fullName}</div>
           )}
           <label htmlFor="chiefComplaint" style={{display: 'block'}}>
             Chief Complaint
           </label>
           <select
              name="chiefComplaint"
              value={values.chiefComplaint}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{display: 'block'}}
              className={errors.chiefComplaint && touched.chiefComplaint ? 'text-input error' : 'text-input'
             }
           >
              <option value="" label="Select" />
              <option value="Chief Complaint 1" label="Chief Complaint 1" />
              <option value="Chief Complaint 2" label="Chief Complaint 2" />
              <option value="Chief Complaint 3" label="Chief Complaint 3" />
           </select>

           <label htmlFor="hpi" style={{display: 'block'}}>
              History of Present Illness
           </label>
           <input
             id="hpi"
             placeholder="History of present illness"
             type="text"
             value={values.hpi}
             onChange={handleChange}
             onBlur={handleBlur}
             className={
               errors.hpi && touched.hpi ? 'text-input error': 'text-input'
             }
          />
          {errors.hpi && touched.hpi && (
            <div className="input-feedback">{errors.hpi}</div>
          )}

           <br></br>
           <button
             type="button"
             className="outline"
             onClick={handleReset}
             disabled={!dirty || isSubmitting}
           >
             Reset
           </button>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
           <DisplayFormikState {...props} />
         </form>
       );
     }}
   </Formik>
   <MoreResources />
 </div>
);
/*
function App() {
 return (
   <div className="App">
     <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <p>
         Edit <code>src/App.js</code> and save to reload.
       </p>
       <a
         className="App-link"
         href="https://reactjs.org"
         target="_blank"
         rel="noopener noreferrer"
       >
         Learn React
       </a>
     </header>
   </div>
 );
}
*/
export default App;
