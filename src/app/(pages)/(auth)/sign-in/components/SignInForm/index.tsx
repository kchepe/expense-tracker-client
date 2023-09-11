"use client";

import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Button from "@/app/common/Button";
import InputForm from "@/app/common/FormBuilder/InputForm";
import PasswordInput from "@/app/common/FormBuilder/PasswordInput";
import useNotificationManager from "@/app/hooks/useNotificationManager";
import Box from "@/app/common/Box";
import Text from "@/app/common/Text";
import Mail from "@/app/icons/Mail";
import Alert from "@/app/common/Notifications/Alert";

const SignInForm: FC = () => {
  const { handleSubmit } = useFormContext();
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { showError, showNotification } = useNotificationManager();

  const handleLogin: SubmitHandler<FieldValues> = async (submitValues) => {
    setIsLoading(true);
    const response = await signIn("credentials", {
      ...submitValues,
      redirect: false,
    });
    if (response?.error) {
      switch (response.error) {
        case "fetch failed":
          showError();
          break;
        default:
          showNotification("Invalid username or password.", "error");
      }
      setIsLoading(false);
    } else {
      push("/");
    }
  };

  return (
    <Box className="flex flex-col gap-4">
      <Box className="flex flex-col items-center mb-5">
        <Text className="font-extrabold text-3xl text-primary">Welcome!</Text>
        <Text className="text-sm text-gray-500">Login your account</Text>
      </Box>
      <Box>
        <Alert />
      </Box>
      <Box>
        <InputForm
          name="email"
          label="Email Address"
          placeholder="Enter your email"
          startIcon={<Mail />}
        />
      </Box>
      <Box>
        <PasswordInput
          name="password"
          label="Password"
          placeholder="Enter your password"
        />
      </Box>
      <Box>
        <Button
          color="primary"
          fullWidth
          size="large"
          onClick={handleSubmit(handleLogin)}
          loading={isLoading}
        >
          Login
        </Button>
      </Box>
      <Box className="text-center">
        <Text>
          Don&#39;t have an account?{" "}
          <Link href="/register">
            <Text className="hover:underline font-bold cursor-pointer text-primary">
              Sign up
            </Text>
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default SignInForm;
