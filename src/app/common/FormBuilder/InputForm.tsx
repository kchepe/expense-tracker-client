import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextField, { TextFieldProps } from "../TextField";
import Box from "../Box";
import Text from "../Text";

interface InputFormProps extends TextFieldProps {
  name: string;
}

const InputForm: FC<InputFormProps> = ({ name, ...inputProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Box>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, ...inputField } }) => (
          <TextField outlined {...inputField} {...inputProps} />
        )}
      />
      {errors[name] && (
        <Text variant="error">{errors[name]?.message?.toString()}</Text>
      )}
    </Box>
  );
};

export default InputForm;
