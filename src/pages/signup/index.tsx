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
import { IoEye, IoEyeOff } from "react-icons/io5";
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

  const handleSignUp = (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    console.log("Signing up with:", values);
  };

  return (
    <>
      <DecorativeBackground />

      <div className="w-full absolute top-7  flex flex-col items-center min-h-screen shadow-lg bg-gray-100">
        <Card className="w-full md:w-96 shadow-lg bg-white ">
          <CardHeader>
            <h2 className="text-xl font-medium">Create your free account</h2>
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
            <Form>
              <CardContent>
                <div className="space-y-2">
                  <div className="">
                    <Label htmlFor="name" className="text-xs">
                      Name
                    </Label>
                    <Field
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your User Name"
                      className="w-full mt-2 border border-gray-300 placeholder:text-gray-400"
                      as={Input}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-xs">
                      Email
                    </Label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full mt-2 border border-gray-300 placeholder:text-gray-400"
                      as={Input}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password" className="text-xs">
                      Password
                    </Label>
                    <div className="relative">
                      <Field
                        id="password"
                        name="password"
                        type={passwordVisible ? "text" : "password"}
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
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <div className=" w-full flex justify-between items-center -mt-2">
                  <Link href="/login">
                    <p className="text-gray-400 hover:underline text-xxs">
                      Already have an account?
                    </p>
                  </Link>

                  <Button
                    variant="default"
                    type="submit"
                    className="bg-black text-white text-xs"
                  >
                    Register
                  </Button>
                </div>
              </CardFooter>
            </Form>
          </Formik>
        </Card>
      </div>
    </>
  );
};

export default SignUpPage;
