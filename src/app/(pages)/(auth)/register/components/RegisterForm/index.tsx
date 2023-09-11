import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/app/common/Button";
import InputForm from "@/app/common/FormBuilder/InputForm";
import PasswordInput from "@/app/common/FormBuilder/PasswordInput";
import { ADD_USER } from "@/app/gql/mutations/user";
import useNotificationManager from "@/app/hooks/useNotificationManager";
import Box from "@/app/common/Box";
import Text from "@/app/common/Text";
import Mail from "@/app/icons/Mail";
import Person from "@/app/icons/Person";
import { useMutation } from "@apollo/client";
import { graphqlClient } from "@/app/lib/apolloClient";
import Alert from "@/app/common/Notifications/Alert";

const RegisterForm = () => {
  const { handleSubmit } = useFormContext();
  const { push } = useRouter();
  const { showError, showNotification } = useNotificationManager();
  const [loginLoading, setLoginLoading] = useState(false);

  const [createUser, { loading }] = useMutation(ADD_USER, {
    client: graphqlClient,
    onError: () => {
      showError();
    },
  });

  const handleSign = async (signinValue: {
    email: string;
    password: string;
  }) => {
    setLoginLoading(true);
    const response = await signIn("credentials", {
      ...signinValue,
      redirect: false,
    });
    if (response?.error) {
      push("/sign-in");
    } else {
      push("/");
    }
  };

  const handleSignup: SubmitHandler<FieldValues> = async (submitValues) => {
    const newSubmitValues = { ...submitValues };
    delete newSubmitValues.confirmPassword;
    const { data } = await createUser({
      variables: { newUser: newSubmitValues },
    });
    if (data?.signup) {
      if (data.signup.success) {
        handleSign({
          email: data.signup.data.email,
          password: submitValues.password,
        });
      } else {
        showNotification(data.signup.message, "error");
      }
    }
  };

  return (
    <Box className="grid grid-cols-12 gap-4">
      <Box className="flex flex-col items-center mb-5 col-span-full">
        <Text className="font-extrabold text-3xl text-primary">
          Create your account
        </Text>
        <Text className="text-sm text-gray-500">
          Enter the fields below to get started
        </Text>
      </Box>
      <Box className="col-span-full">
        <Alert />
      </Box>
      <Box className="col-span-full md:col-span-6">
        <InputForm
          name="firstName"
          label="Firstname"
          placeholder="Enter your firstname"
          startIcon={<Person />}
        />
      </Box>
      <Box className="col-span-full md:col-span-6">
        <InputForm
          name="lastName"
          label="Lastname"
          placeholder="Enter your lastname"
          startIcon={<Person />}
        />
      </Box>
      <Box className="col-span-full">
        <InputForm
          name="email"
          label="Email Address"
          placeholder="Enter your email"
          startIcon={<Mail />}
        />
      </Box>
      <Box className="col-span-full md:col-span-6">
        <PasswordInput
          name="password"
          label="Password"
          placeholder="Enter your password"
        />
      </Box>
      <Box className="col-span-full md:col-span-6">
        <PasswordInput
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
        />
      </Box>
      <Box className="col-span-full">
        <Button
          color="primary"
          fullWidth
          size="large"
          onClick={handleSubmit(handleSignup)}
          loading={loading || loginLoading}
        >
          Signup
        </Button>
      </Box>
      <Box className="col-span-full text-center">
        <Text>
          Already have an account?{" "}
          <Link href="/sign-in">
            <Text className="hover:underline font-bold cursor-pointer text-primary">
              Login
            </Text>
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default RegisterForm;
