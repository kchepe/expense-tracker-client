import React, { FC, ReactElement } from "react";
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnyObject, ObjectSchema } from "yup";

interface IForm {
  schema?: ObjectSchema<{ [x: string]: unknown }, AnyObject, unknown, "">;
  initialValues: DefaultValues<FieldValues>;
  onSubmit?: SubmitHandler<FieldValues>;
  className?: string;
  children: ReactElement;
  resetFields?: boolean;
}

const Form: FC<IForm> = ({
  schema,
  initialValues,
  onSubmit,
  children,
  resetFields,
  ...props
}) => {
  const ctx = useForm({
    mode: "onTouched",
    resolver: schema ? yupResolver(schema) : undefined,
    defaultValues: initialValues,
  });

  const { handleSubmit, reset } = ctx;

  const handleValid: SubmitHandler<FieldValues> = async (values) => {
    await onSubmit?.(values);
    if (resetFields) {
      reset(initialValues);
    }
  };

  return (
    <FormProvider {...ctx}>
      <form onSubmit={handleSubmit(handleValid)} {...props}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
