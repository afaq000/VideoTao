// src/pages/LoginPage.tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibilityToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-center">Login</h2>
          <h2 className="text-xs text-gray-400 text-center">Get Start</h2>
        </CardHeader>
      <Card className="w-full md:w-96 shadow-lg mt-3">
        

        <CardContent>
          <div className="space-y-2 pt-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full mt-2 border border-gray-300"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={passwordVisible ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full mt-2 pr-10 border-gray-300"
                />
                <button
                  type="button"
                  onClick={handlePasswordVisibilityToggle}
                  className="absolute inset-y-0 right-2 flex items-center bg-none text-gray-500"
                >
                  {passwordVisible ? <IoEyeOff /> : <IoEye />}
                </button>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button variant={"default"} onClick={handleLogin} className="w-full mt-4">Login</Button>
        </CardFooter>
         
        <div className='flex justify-end -mt-2 px-4'>
        <Link href={"/signup"}>
        <p className='text-blue-600 hover:underline text-xxs'>
            Forget Password</p></Link>
        </div>

        <div className='flex justify-center pb-3'>
        <Link href={"/signup"}>
        <p className='text-blue-600 hover:underline'>
            Creat Account</p></Link>
        </div>

      </Card>

      
    </div>
  );
};

export default LoginPage;
