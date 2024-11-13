import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup'; 

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibilityToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (values: { email: string; password: string }) => {
    console.log('Logging in with:', values);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <CardHeader>
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        <h2 className="text-xs text-gray-400 text-center">Get Start</h2>
      </CardHeader>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ values, handleChange, handleBlur, errors, touched, handleSubmit }) => (
          <Card className="w-full md:w-96 shadow-lg mt-3">
            <form onSubmit={handleSubmit}>
              <CardContent>
                <div className="space-y-2 pt-4">

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your email"
                      className={`w-full mt-2 border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={passwordVisible ? 'text' : 'password'}
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your password"
                        className={`w-full mt-2 pr-10 border ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      <button
                        type="button"
                        onClick={handlePasswordVisibilityToggle}
                        className="absolute inset-y-0 right-2 flex items-center bg-none text-gray-500"
                      >
                        {passwordVisible ? <IoEyeOff /> : <IoEye />}
                      </button>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button variant={"default"} type="submit" className="w-full mt-4">
                  Login
                </Button>
              </CardFooter>

              <div className="flex justify-end -mt-2 px-4">
                <Link href={"/signup"}>
                  <p className="text-blue-600 hover:underline text-xxs">Forget Password</p>
                </Link>
              </div>

              <div className="flex justify-center pb-3">
                <Link href={"/signup"}>
                  <p className="text-blue-600 hover:underline">Create Account</p>
                </Link>
              </div>
            </form>
          </Card>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
