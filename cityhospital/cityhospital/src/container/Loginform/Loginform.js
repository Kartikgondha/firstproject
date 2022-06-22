import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import "./Loginform.css";


function Loginform(props) {


    const [useType, setuseType] = useState('Login');
    const [password, setPassword] = useState(false);

    let Logicschema, initialval;

    if(useType === 'Login'){
       Logicschema = {
        email: yup.string().email().required("please enter email"),
        password: yup.string().required("please enter password"),

    };
    initialval= {
        email: '',
        password: '',
    }

    }else if(useType === 'Signup'){
        Logicschema = {
            email: yup.string().email().required("please enter email"),
            password: yup.string().required("please enter password"),
            name: yup.string().required("please enter name"),
    
     };
     initialval= {
        email: '',
        password: '',
        name: '',
    }

    }
   let schema = yup.object().shape(Logicschema);


    const formikobj = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
       validationSchema:schema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const {errors, handleChange, handleSubmit, handleBlur, touched} = formikobj;

    return (
        <div className='background'>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            useType === 'Login' && password === false ?
                                <h2>Login</h2>
                                : password === true ?
                                    <h2>Forgot password</h2> :
                                    <h2>Signup</h2>
                        }
                        <Formik values={formikobj}>
                            <Form onSubmit={handleSubmit} action method="post" role="form" className="php-email-form">
                                {
                                    useType === 'Signup' ?

                                        <div className="row">
                                            <div className="col-md-4 form-group">
                                                <input type="text"
                                                    name="name"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    />
                                                    <p>{errors.name && touched.name ? errors.name : ''}</p>
                                                <div className="validate" />
                                            </div>
                                        </div> : null
                                }
                                <div className="row">
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="email"
                                            className="form-control"
                                            name="email" id="email"
                                            placeholder="Your Email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
    
                                            />
        
                                         <p>{errors.email && touched.email ? errors.email : ''}</p>
                                        <div className="validate" />
                                    </div>

                                </div>
                                {
                                    password === true ? null :
                                        <div className="row">
                                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                                <input type="password"
                                                    className="form-control"
                                                    name="password" id="password"
                                                    placeholder="Your password"
                                                    data-msg="Please enter a valid email" 
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    />
                                                    <p>{errors.password && touched.password ? errors.password : ''}</p>
                                                <div className="validate" />
                                            </div>
                                        </div>
                                }

                                {
                                    useType === 'Login' && password === false ?
                                        <>
                                            <a onClick={() => setuseType('Signup')} className="linkcolor">Creat Have An Account ?</a><br />
                                            <a onClick={() => setPassword(true)} className="linkcolor">Forgot password ?</a></>
                                        : password === true ?
                                            <a onClick={() => setPassword(false)} className="linkcolor">Remember Your Password ?</a> :
                                            <a onClick={() => setuseType('Login')} className="linkcolor">Already Have An Account ?</a>

                                }




                                <div className='row'>
                                    {
                                        password ?
                                            <div className="text-center"><button type="submit">Forget</button></div>
                                            :
                                            useType === 'Login' ?
                                                <div className="text-center"><button type="submit">Login</button></div>
                                                :
                                                <div className="text-center"><button type="submit">Signup</button></div>
                                    }
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </section>
        </div>


    );
}

export default Loginform;