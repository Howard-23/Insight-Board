type TableColumn<T> = {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

type TableProps<T extends Record<string, unknown>> = {
  columns: TableColumn<T>[];
  rows: T[];
  rowKey: (row: T) => string;
  caption?: string;
};

export function Table<T extends Record<string, unknown>>({ columns, rows, rowKey, caption }: TableProps<T>) {
  return (
    <div className="table-wrap">
      <table className="table">
        {caption ? <caption style={{ textAlign: "left", padding: "0 0 12px", color: "var(--muted)" }}>{caption}</caption> : null}
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={String(column.key)} scope="col">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={rowKey(row)}>
              {columns.map((column) => {
                const value = row[column.key];
                return (
                  <td key={String(column.key)}>
                    {column.render ? column.render(value, row) : String(value)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
