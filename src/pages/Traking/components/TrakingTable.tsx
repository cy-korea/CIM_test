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

const Tr = styled.tr`
  display: flex;
`;

const Th = styled.th`
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  box-shadow: 0px 1px 0px 1px rgba(0, 0, 0, 0.4);
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

const defaultData: Test[] = [
  {
    time: new Date().toISOString(),
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
    time: new Date().toISOString(),
    ceid: 401,
    crst: 0,
    avail: 1,
    inter: 1,
    move: 1,
    run: 1,
    port: 3000,
    cell_id: "ujin",
    reader_id: "baek",
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
    size: 300,
  }),
  columnHelper.accessor("ceid", {
    header: "CEID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("crst", {
    header: "CRST",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("avail", {
    header: "AVAIL",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("inter", {
    header: "INTER",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("move", {
    header: "MOVE",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("run", {
    header: "RUN",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("port", {
    header: "PORT",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("cell_id", {
    header: "CELL ID",
    cell: (info) => info.getValue(),
    size: 600,
  }),
  columnHelper.accessor("reader_id", {
    header: "READER ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("rrc", {
    header: "RRC",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("judge", {
    header: "JUDGE",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("reserved", {
    header: "RESERVED",
    cell: (info) => info.getValue(),
    size: 300,
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
              <Th key={header.id} style={{ flex: header.getSize() + "%" }}>
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
      <tbody></tbody>
    </Table>
  );
};
