import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input'; 
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Formik, Field, Form, ErrorMessage } from 'formik'; 
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignUpPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  const handlePasswordVisibilityToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignUp = (values: { name: string; email: string; password: string }) => {
    console.log('Signing up with:', values);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <CardHeader>
        <h2 className="text-2xl font-extrabold text-center">Get Started</h2>
        <h2 className="text-xs text-center text-gray-400">Create New Account</h2>
      </CardHeader>

      <Card className="w-full md:w-96 shadow-lg">

        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={validationSchema}
          onSubmit={handleSignUp}
        >
          <Form>
            <CardContent>
              <div className="space-y-2">

                <div className="mt-5">
                  <Label htmlFor="name">User Name</Label>
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your User Name"
                    className="w-full mt-2 border border-gray-300 placeholder:text-gray-400"
                    as={Input}  
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-xs" />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full mt-2 border border-gray-300 placeholder:text-gray-400"
                    as={Input} 
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Field
                      id="password"
                      name="password"
                      type={passwordVisible ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="w-full mt-2 pr-10 border-gray-300 placeholder:text-gray-400"
                      as={Input} 
                    />
                    <button
                      type="button"
                      onClick={handlePasswordVisibilityToggle}
                      className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                    >
                      {passwordVisible ? <IoEyeOff /> : <IoEye />}
                    </button>
                  </div>
                  <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    className="w-full mt-2 pr-10 border-gray-300 placeholder:text-gray-400"
                    as={Input}  
                  />
                  <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs" />
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <Button type="submit" variant={"default"} className="w-full mt-4">
                Create Account
              </Button>
            </CardFooter>
          </Form>
        </Formik>

        <div className='flex justify-center pb-3'>
          <Link href="/login">
            <p className='text-blue-600 hover:underline'>
              Already have an account?
            </p>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
