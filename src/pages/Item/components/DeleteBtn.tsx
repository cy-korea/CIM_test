import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FC } from "react";
import styled from "styled-components";
import { deleteItem } from "../../../api/axios";

const Button = styled.button`
  all: unset;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #fa4949;
  text-align: center;
  font-size: 10px;
  font-weight: 900;
  cursor: pointer;
`;

export const DeleteBtn: FC<{ itemId: number }> = ({ itemId }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["item"],
      });
    },
    onError: (error) => {
      console.error("Error: ", error);
    },
  });

  const clickHandler = () => {
    mutation.mutate(itemId);
  };

  return <Button onClick={clickHandler}>X</Button>;
};
