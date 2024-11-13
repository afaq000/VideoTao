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
import { useEffect, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import DecorativeBackground from "@/components/DecorativeBackground";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibilityToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (values: { email: string; password: string }) => {
    console.log("Logging in with:", values);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  return (
    <>
      <DecorativeBackground />

      <div className="w-full absolute top-7  flex flex-col items-center min-h-screen shadow-lg bg-gray-100">
        <Card className="w-full md:w-96 shadow-lg bg-white ">
          <CardHeader>
            <h2 className="text-xl font-medium">Login</h2>
            <div className="border-b pt-5" />
          </CardHeader>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({
              values,
              handleChange,
              handleBlur,
              errors,
              touched,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <CardContent>
                  <div className="space-y-6 pt-4">
                    <div>
                      <Label htmlFor="email" className="text-xs">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your email"
                        className={`w-full mt-2 border ${
                          errors.email && touched.email
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>

                    <div>
                      <div className="w-full flex justify-between">
                        {" "}
                        <Label htmlFor="password" className="text-xs">
                          Password
                        </Label>{" "}
                      </div>
                      <div className="relative">
                        <Input
                          id="password"
                          type={passwordVisible ? "text" : "password"}
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter your password"
                          className={`w-full mt-2 pr-10 border ${
                            errors.password && touched.password
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
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
                  <div className=" w-full flex justify-between items-center -mt-2">
                    <Link href="/signup">
                      <p className="text-gray-400 hover:underline text-xxs">
                        Need Account ?
                      </p>
                    </Link>
                    <Link href="/signup">
                      <p className="text-gray-400 hover:underline text-xxs">
                        Forgot Your Password
                      </p>
                    </Link>

                    <Button
                      variant="default"
                      type="submit"
                      className="bg-black text-white text-xs"
                    >
                      Login
                    </Button>
                  </div>
                </CardFooter>
              </form>
            )}
          </Formik>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
