import styled from "styled-components";
import { getItem } from "../../../api/axios";
import { useQuery } from "@tanstack/react-query";
import { DeleteBtn } from "./DeleteBtn";
import { useEffect, useState } from "react";
import { CompleteBtn } from "./CompleteBtn";

const ItemWrap = styled.table`
  margin-bottom: 30px;
  border: 1px solid black;
  width: 40%;

  > caption {
    font-size: 32px;
    margin-bottom: 20px;
  }

  th {
    padding: 3px;
    font-size: 14px;
    font-weight: 600;
  }

  tbody {
    text-align: center;
  }
`;

const Items = styled.tr`
  border: 1px solid black;

  td {
    font-size: 14px;
    padding: 3px;
  }
`;

const Index = styled.td`
  border: 1px solid black;
`;

const Item = styled.td`
  border: 1px solid black;
  text-align: start;
`;

const Count = styled.td``;

type ItemType = {
  id: number;
  name: string;
  count: number;
};

export const ItemList = () => {
  const { data } = useQuery({
    queryKey: ["item"],
    queryFn: getItem,
  });

  const [itemArr, setItemArr] = useState<ItemType[]>([]);

  useEffect(() => {
    setItemArr(data);
  }, [data]);

  const changeHandler = (id: number, count: number) => {
    setItemArr((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: count } : item
      )
    );
  };

  return (
    <ItemWrap>
      <caption>남은 자제</caption>
      <thead>
        <tr>
          <th>NUM</th>
          <th>ITEM</th>
          <th>COUNT</th>
        </tr>
      </thead>
      <tbody>
        {data ? (
          <>
            {itemArr?.map((el: ItemType, index: number) => (
              <Items key={el.id}>
                <Index>{index + 1}</Index>
                <Item>{el.name}</Item>
                <Count>
                  <input
                    type="number"
                    value={el.count}
                    min={0}
                    max={99}
                    onChange={(e) =>
                      changeHandler(el.id, Number(e.target.value))
                    }
                  />
                </Count>
                <td>
                  <CompleteBtn itemData={el} />
                  <DeleteBtn itemId={el.id} />
                </td>
              </Items>
            ))}
          </>
        ) : (
          <>
            <tr>
              <td>Not Connected to DB</td>
            </tr>
          </>
        )}
      </tbody>
    </ItemWrap>
  );
};
