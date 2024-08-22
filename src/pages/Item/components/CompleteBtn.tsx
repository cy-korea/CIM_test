import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FC } from "react";
import styled from "styled-components";
import { updateItem } from "../../../api/axios";

const Button = styled.button`
  all: unset;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #685ae2;
  text-align: center;
  font-size: 10px;
  font-weight: 900;
  cursor: pointer;
  margin-right: 5px;
`;

export const CompleteBtn: FC<{
  itemData: { id: number; name: string; count: number };
}> = ({ itemData }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (item: { id: number; count: number }) =>
      updateItem(item.id, item.count),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["item"],
      });
    },
  });

  const clickHandler = () => {
    if (itemData.count > 99) return window.location.reload();
    mutation.mutate({ id: itemData.id, count: itemData.count });
  };

  return <Button onClick={clickHandler}>✏️</Button>;
};
