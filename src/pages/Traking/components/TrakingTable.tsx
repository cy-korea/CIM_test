import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
`;

const Thead = styled.thead``;

const Tr = styled.tr``;

const Th = styled.th`
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  box-shadow: 0px 1px 0px 1px rgba(0, 0, 0, 0.4);
`;

const Tbody = styled.tbody`
  background-color: white;
`;

const Td = styled.td`
  padding: 4px;
  font-size: 13px;
  text-align: center;
  border: 1px solid black;
  color: #333;
`;

type Test = {
  time: string;
  ceid: 401 | 402;
  crst: 0 | 1 | 2;
  avail: 1 | 2;
  inter: 1 | 2;
  move: 1 | 2;
  run: 1 | 2;
  port: number;
  cell_id: string;
  reader_id: string;
  rrc: 0 | 1;
  judge: "G" | "N" | "S" | "L" | "R";
  reserved: string;
};

const today = new Date();
const year = today.getFullYear().toString().slice(-2);
const month = ("0" + (today.getMonth() + 1)).toString().slice(-2);
const day = ("0" + today.getDate()).toString().slice(-2);
const hours = ("0" + today.getHours()).toString().slice(-2);
const minutes = ("0" + today.getMinutes()).toString().slice(-2);
const seconds = ("0" + today.getSeconds()).toString().slice(-2);

const time = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

const defaultData: Test[] = [
  {
    time: time,
    ceid: 401,
    crst: 0,
    avail: 1,
    inter: 1,
    move: 1,
    run: 1,
    port: 5050,
    cell_id: "jason",
    reader_id: "jung",
    rrc: 0,
    judge: "G",
    reserved: "",
  },
  {
    time: time,
    ceid: 401,
    crst: 0,
    avail: 1,
    inter: 1,
    move: 1,
    run: 1,
    port: 3000,
    cell_id: "tuck",
    reader_id: "hong",
    rrc: 0,
    judge: "N",
    reserved: "",
  },
];

const columnHelper = createColumnHelper<Test>();

const columns = [
  columnHelper.accessor("time", {
    header: "TIME",
    cell: (info) => info.getValue(),
    size: 250,
  }),
  columnHelper.accessor("ceid", {
    header: "CEID",
    cell: (info) => info.getValue(),
    size: 80,
  }),
  columnHelper.accessor("crst", {
    header: "CRST",
    cell: (info) => info.getValue(),
    size: 60,
  }),
  columnHelper.accessor("avail", {
    header: "AVAIL",
    cell: (info) => info.getValue(),
    size: 60,
  }),
  columnHelper.accessor("inter", {
    header: "INTER",
    cell: (info) => info.getValue(),
    size: 60,
  }),
  columnHelper.accessor("move", {
    header: "MOVE",
    cell: (info) => info.getValue(),
    size: 60,
  }),
  columnHelper.accessor("run", {
    header: "RUN",
    cell: (info) => info.getValue(),
    size: 60,
  }),
  columnHelper.accessor("port", {
    header: "PORT",
    cell: (info) => info.getValue(),
    size: 100,
  }),
  columnHelper.accessor("cell_id", {
    header: "CELL ID",
    cell: (info) => info.getValue(),
    size: 250,
  }),
  columnHelper.accessor("reader_id", {
    header: "READER ID",
    cell: (info) => info.getValue(),
    size: 250,
  }),
  columnHelper.accessor("rrc", {
    header: "RRC",
    cell: (info) => info.getValue(),
    size: 60,
  }),
  columnHelper.accessor("judge", {
    header: "JUDGE",
    cell: (info) => info.getValue(),
    size: 60,
  }),
  columnHelper.accessor("reserved", {
    header: "RESERVED",
    cell: (info) => info.getValue(),
  }),
];

export const TrakingTabel = () => {
  const [data, setData] = useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <Thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <Tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Th key={header.id} style={{ width: header.getSize() + "px" }}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody>
        {table.getRowModel().rows.map((row) => (
          <Tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
