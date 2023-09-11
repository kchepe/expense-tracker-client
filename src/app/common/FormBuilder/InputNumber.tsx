import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import NumberField, { NumberFieldProps } from "../NumberField";
import Box from "../Box";
import Text from "../Text";

interface InputNumberProps extends NumberFieldProps {
  name: string;
}

const InputNumber: FC<InputNumberProps> = ({ name, ...inputProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Box>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, ...numberField } }) => (
          <NumberField outlined {...numberField} {...inputProps} />
        )}
      />
      {errors[name] && (
        <Text variant="error">{errors[name]?.message?.toString()}</Text>
      )}
    </Box>
  );
};

export default InputNumber;
