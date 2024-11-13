import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
// import { IoEye, IoEyeOff } from "react-icons/io5";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import DecorativeBackground from "@/components/DecorativeBackground";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUpPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibilityToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignUp = (values: unknown) => {
    console.log("Signing up with:", values);
  };

  return (
    <>
      <DecorativeBackground />

      <div className="w-full absolute top-7 flex flex-col items-center min-h-screen shadow-lg bg-gray-100">
        <Card className="w-full md:w-96 shadow-lg bg-white">
          <CardHeader>
            <h2 className="text-lg font-medium !font-sans text-littleBlack">
              Create your free account
            </h2>
            <div className="border-b pt-2" />
          </CardHeader>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSignUp}
          >
            {({   values,
              handleChange,
              handleBlur,
              errors,
              touched, }) => (
              <Form>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <Label htmlFor="name" className="!text-xxs font-medium text-gray-700 font-sans">
                        Name
                      </Label>
                      <Field
                        id="name"
                        name="name"
                        type="text"
                        className={`w-full mt-2 border py-1 ${
                          touched.name && errors.name
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:border-focus-blue focus:border-1`}
                        as={Input}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="!text-xxs font-medium text-gray-700 font-sans">
                        Email
                      </Label>
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        className={`w-full mt-2 border py-1 ${
                          touched.email && errors.email
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:border-focus-blue focus:border-1`}
                        as={Input}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>

                    <div>
                        <Label
                          htmlFor="password"
                          className="!text-xxs font-medium text-gray-700 font-sans"
                        >
                          Password
                        </Label>
                        <div className="relative flex items-center mt-2">
                          <Input
                            id="password"
                            type={passwordVisible ? "text" : "password"}
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full pr-10 border ${
                              touched.password && errors.password
                                ? "border-red-500"
                                : "border-gray-300"
                            } focus:border-focus-blue focus:ring-0`}
                          />
                          <button
                            type="button"
                            onClick={handlePasswordVisibilityToggle}
                            className="absolute right-2 text-gray-500"
                            style={{
                              top: "50%",
                              transform: "translateY(-50%)",
                            }}
                          >
                            {/* {passwordVisible ? <IoEyeOff /> : <IoEye />} */}
                          </button>
                        </div>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-xs text-red-500 mt-1"
                        />
                      </div>

                  
                  </div>
                </CardContent>

                <CardFooter>
                  <div className="w-full flex justify-between items-center -mt-2">
                    <Link href="/login">
                      <p className="text-gray-400 font-sans hover:bg-gray-50 hover:py-2 hover:px-1 hover:rounded-md text-xxs">
                        Already have an account?
                      </p>
                    </Link>

                    <Button
                      variant="default"
                      type="submit"
                      className="bg-black text-white !text-xxs"
                    >
                      Register
                    </Button>
                  </div>
                </CardFooter>
              </Form>
            )}
          </Formik>
        </Card>
      </div>
    </>
  );
};

export default SignUpPage;
