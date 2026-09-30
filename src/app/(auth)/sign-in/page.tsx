"use client";

import { signIn } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";

import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";

export default function SignInPage() {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // const data: Record<string, string> = Object.fromEntries(formData.entries());

    // const { data: resData, error } = await signUp.email({
    //   name: data.name,
    //   email: data.email,
    //   password: data.password,
    //   callbackURL: "/",
    // });

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data: resData, error } = await signIn.email({
      email,
      password,
      rememberMe: true,
      callbackURL: "/",
    });

    console.log({
      email,
      password,
    });

    if (error) {
      console.error("Signin failed:", error);
      alert(error.message);
      return;
    }

    console.log("Signin successful:", resData);
  };

  return (
    <Form
      className="flex w-96 flex-col mx-auto mt-10 gap-4 border-2 border-blue-900 rounded-2xl p-7"
      onSubmit={onSubmit}
    >
      <Fieldset.Legend className="text-center mx-auto mb-7 border-b w-50 pb-5 border-b-blue-900">
        Welcome To ACME
      </Fieldset.Legend>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>

      <TextField
        className="relative"
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
      >
        <Label>Password</Label>
        <Input
          placeholder="Enter your password"
          type={isVisible ? "text" : "password"}
        />
        <p className="absolute right-2 top-6.5">
          <Button
            isIconOnly
            aria-label={isVisible ? "Hide password" : "Show password"}
            size="sm"
            variant="ghost"
            onPress={() => setIsVisible(!isVisible)}
          >
            {isVisible ? (
              <Eye className="size-4" />
            ) : (
              <EyeSlash className="size-4" />
            )}
          </Button>
        </p>
        <Description className="opacity-50 text-[10px]">
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>
        <FieldError />
      </TextField>

      <div className="flex gap-2">
        <Button type="submit">Submit</Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
  );
}
