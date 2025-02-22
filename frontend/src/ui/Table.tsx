import { ReactNode } from "react";

type TablePropsType = { children: ReactNode };

function Table({ children }: TablePropsType) {
  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>{children}</table>
    </div>
  );
}

export default Table;

function TableHeader({ children }: TablePropsType) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function TableBody({ children }: TablePropsType) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }: TablePropsType) {
  return <tr>{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
