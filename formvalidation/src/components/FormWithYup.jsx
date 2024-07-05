import React, { useState } from 'react';
import * as Yup from 'yup'

const FormWithYup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        password: '',
        confirmPassword: '',
        age: '',
        gender: '',
        interest: [],
        birthDate: '',
    });

    const [errors, setErrors] = useState({});

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('last name is required'),
        email: Yup.string().required('Enter you email').email('Enter valid email address'),
        phoneNo: Yup.string().required('enter you age').matches(/^\d{10}$/, "phoneNo should be 10 digit long"),
        password: Yup.string().required('password is required')
        .min(8,'password must be 8 characters long')
        .matches(/[!@#$%^&*()_|/.,><?]/,'password must contain at least one symbol')
        .matches(/[0-9]/,'password must contain one number')
        .matches(/[A-Z]/,'password must contain uppercase letter')
        .matches(/[a-z]/,'password must contain lowercase letter'),
        confirmPassword: Yup.string().required('confirm password is required').oneOf([Yup.ref('password')],"password must match"),
        age: Yup.number()
        .min(18, "Age must be 18 years")
        .max(100, "Age should not be greater than 100")
        .required('Age is required')
        .typeError("Age must be number"),
        gender: Yup.string().required('Gender is required'),
        interest: Yup.array()
        .min(1, "Select at least one interest")
        .required('interest is required'),
        birthDate: Yup.date().required('birth date is required')
    })


   
    const handleSubmit =  async (e) => {
        e.preventDefault();

        try{
            await validationSchema.validate(formData,{abortEarly:false})
            console.log("Form Submitted",formData);
        }
        catch(error)
        {
        const newError = {};
        error.inner.forEach((err)=>{
            newError[err.path] = err.message
        })

        setErrors(newError)
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckChange = (e) => {
        const { name, checked } = e.target;
        let updatedInterest = [...formData.interest];
        if (checked) {
            updatedInterest.push(name);
        } else {
            updatedInterest = updatedInterest.filter((i) => i !== name);
        }
        setFormData({
            ...formData,
            interest: updatedInterest,
        });
    };

    return (
        <form className='formdata' onSubmit={handleSubmit}>
            <div>
                <label>FirstName:</label>
                <input
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder='Enter Your First Name'
                />
                {errors.firstName && (
                    <div className='error'>{errors.firstName}</div>
                )}
            </div>
            <div>
                <label>Lastname:</label>
                <input
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder='Enter Your last Name'
                />
                {errors.lastName && (
                    <div className='error'>{errors.lastName}</div>
                )}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter Your email'
                />
                {errors.email && <div className='error'>{errors.email}</div>}
            </div>
            <div>
                <label>PhoneNo:</label>
                <input
                    type='text'
                    name='phoneNo'
                    value={formData.phoneNo}
                    onChange={handleChange}
                    placeholder='Enter Your PhoneNo'
                />
                {errors.phoneNo && (
                    <div className='error'>{errors.phoneNo}</div>
                )}
            </div>
            <div>
                <label>Password:</label>
                <input
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Enter Your password'
                />
                {errors.password && (
                    <div className='error'>{errors.password}</div>
                )}
            </div>
            <div>
                <label>Confirm Password:</label>
                <input
                    type='password'
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder='Enter Your confirmPassword'
                />
                {errors.confirmPassword && (
                    <div className='error'>{errors.confirmPassword}</div>
                )}
            </div>
            <div>
                <label>Age:</label>
                <input
                    type='number'
                    name='age'
                    value={formData.age}
                    onChange={handleChange}
                    placeholder='Enter Your Age'
                />
                {errors.age && <div className='error'>{errors.age}</div>}
            </div>
            <div>
                <label>Gender:</label>
                <select
                    name='gender'
                    value={formData.gender}
                    onChange={handleChange}>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                </select>
                {errors.gender && (
                    <div className='error'>{errors.gender}</div>
                )}
            </div>
            <div>
                <label>Interest:</label>
                <label>
                    <input
                        type='checkbox'
                        name='coding'
                        checked={formData.interest.includes('coding')}
                        onChange={handleCheckChange}
                    />
                    Coding
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='sports'
                        checked={formData.interest.includes('sports')}
                        onChange={handleCheckChange}
                    />
                    Sports
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='reading'
                        checked={formData.interest.includes('reading')}
                        onChange={handleCheckChange}
                    />
                    Reading
                </label>
                {errors.interest && (
                    <div className='error'>{errors.interest}</div>
                )}
            </div>
            <div>
                <label>Date of Birth</label>
                <input
                    type='date'
                    name='birthDate'
                    value={formData.birthDate}
                    onChange={handleChange}
                    placeholder='Enter Your Birth Date'
                />
                {errors.birthDate && (
                    <div className='error'>{errors.birthDate}</div>
                )}
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default FormWithYup;
