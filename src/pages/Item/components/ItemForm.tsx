import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { postItem } from "../../../api/axios";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 900;
`;

const Text = styled.p`
  font-size: 14px;
  margin-bottom: 3px;
`;

const Input = styled.input`
  width: 150px;
  margin-bottom: 3px;
`;

type Inputs = {
  name: string;
  count: number;
};

export const ItemForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const mutation: UseMutationResult<{ redirectUrl?: string }, Error, Inputs> =
    useMutation({
      mutationFn: postItem,
      onSuccess: (data) => {
        if (data.redirectUrl) {
          window.location.href = data.redirectUrl;
        }
      },
      onError: (error) => {
        console.error("Error: ", error);
      },
    });

  const submitHandler: SubmitHandler<Inputs> = (data) => {
    const { name, count } = data;
    const newItem = {
      name: name,
      count: count,
    };
    mutation.mutate(newItem);
  };

  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <Label>자제 등록</Label>
      <Text>자제명</Text>
      <Input type="text" autoComplete="off" {...register("name")} />
      <Text>개수</Text>
      <Input type="number" {...register("count", { min: 0, max: 99 })} />

      <Input type="submit" value="등록" />
    </Form>
  );
};
