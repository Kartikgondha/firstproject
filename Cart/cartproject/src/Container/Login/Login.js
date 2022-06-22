import React, { useState } from 'react';
import { Input, Label, FormGroup, Button, Form } from 'reactstrap'
import * as yup from 'yup';
import { Formik, useFormik } from 'formik';
import "./Login.css"

function Login(props) {
  const [usetype, SetUseType] = useState('Login');
  const [password, SetPassword] = useState(false);

  let LogicSchema, initialVal;

  if (usetype === 'Login') {
    LogicSchema = {
      email: yup.string().email().required("please enter Email"),
      password: yup.string().required("Please enter Password"),
    };

    initialVal = {
      password: '',
      email: '',
    }

  } else if (usetype === 'Signup') {
    LogicSchema = {
      email: yup.string().email().required("please enter Email"),
      password: yup.string().required("Please enter Password"),
      name: yup.string().required("please enter Name"),
    };

    initialVal = {

      password: '',
      email: '',
      name: '',

    }
  }

  let schema = yup.object().shape(LogicSchema);

  const formik = useFormik({
    initialValues: {
      lastName: '',
      email: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { errors, handleChange, handleSubmit, handleBlur, touched } = formik
  return (
    <>

      <div className='kartik_main'>
        {
          password ?
            <h1 className='kartik_h1'>
              Forgot Password
            </h1> :
            usetype === 'Login'
              ?
              <h1 className='kartik_h1'>
                Login
              </h1>
              :
              <h1 className='kartik_h1'>
                Signup
              </h1>
        }
      </div>
      <Formik values={formik}>
        <Form onSubmit={handleSubmit}>

          {
            password ?

              <FormGroup>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p>{errors.email && touched.email ? errors.email : '' }</p>
              </FormGroup> :

              usetype === 'Login'
                ?

                <>
                  <FormGroup>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Email"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                     <p>{errors.email && touched.email ? errors.email : '' }</p>
                  </FormGroup>


                  <FormGroup>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p>{errors.password && touched.password ? errors.password : ''}</p>
                  </FormGroup>
                </>

                :
                <>
                  <FormGroup>
                    <Input
                      id="exampleName"
                      name="name"
                      placeholder="Name"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p>{errors.name && touched.name ? errors.name : ''}</p>
                  </FormGroup>

                  <FormGroup>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Email"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                     <p>{errors.email && touched.email ? errors.email : '' }</p>
                  </FormGroup>


                  <FormGroup>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p>{errors.password && touched.password ? errors.password : ''}</p>
                  </FormGroup>
                </>

          }


          {
            password ?
              <Button className='kartik_btn'>
                Forgot Password
              </Button> :
              usetype === 'Login'
                ?
                <Button className='kartik_btn'>
                  Login
                </Button>
                :
                <Button className='kartik_btn'>
                  Signup
                </Button>
          }

          <div className='kartik_link'>
            {
              password ?
                <a className='creat_kartik' onClick={() => SetPassword(false)}>Remember Your Password ?</a>
                :
                usetype === 'Login' || SetPassword === (false) ?
                  <>
                    <a className='creat_kartik' onClick={() => SetUseType('Signup')}>Create an Account ?</a>
                    <a className='forggot_kartik' onClick={() => SetPassword(true)}>Forgot Password ?</a>
                  </>
                  :
                  <a className='creat_kartik' onClick={() => SetUseType('Login')}>Already an Account?</a>
            }

          </div>
        </Form>
      </Formik>


    </>
  );
}

export default Login;