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
            <h2 className="text-lg font-medium font-sans">Login</h2>
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
                      <Label
                        htmlFor="email"
                        className="text-xs font-medium text-gray-700"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full mt-2 border py-1 ${
                          touched.email && errors.email
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:border-focus-blue focus:border-1 `}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-xs text-red-500"
                      />
                    </div>

                    <div>
                      <div>
                        <Label
                          htmlFor="password"
                          className="text-xs font-medium text-gray-700"
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
                            {passwordVisible ? <IoEyeOff /> : <IoEye />}
                          </button>
                        </div>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-xs text-red-500 mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <div className=" w-full flex justify-between items-center -mt-2 gap-3">
                    <Link href="/signup">
                      <p className="text-gray-400 hover:bg-gray-50 hover:py-2 hover:px-1 hover:rounded-md  text-xxs">
                        Need an account?
                      </p>
                    </Link>
                    <Link href="/signup">
                      <p className="text-gray-400 hover:bg-gray-50 hover:py-2 hover:px-1 hover:rounded-md text-xxs">
                        Forgot your password?
                      </p>
                    </Link>

                    <Button
                      variant="active"
                      type="submit"
                      className="bg-lightBlack rounded-md px-4 py-1 text-white text-xs"
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
