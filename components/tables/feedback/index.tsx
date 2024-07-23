"use client"
import React from "react";
import {
    SortingState,
    ColumnFiltersState,
    PaginationState,
  } from "@tanstack/react-table";
  
import {DataTable} from './data-table'  
import {columns} from './columns'
import { useMembers } from "@/common/hooks/feedback/use-members";
const Feedback = () => {

    const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );

  const [globalFilter, setGlobalFilter] = React.useState<any>("");

  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 15,
    });

  React.useEffect(() => {
    setPagination((prev: PaginationState) => ({ ...prev, pageIndex: 0 }));
  }, [globalFilter]);

  const fetchDataOptions = {
    page: (Number(pageIndex) + 1).toString(),
    per_page: Number(pageSize).toString(),
    sorting:
      sorting?.length > 0
        ? JSON.stringify(
            sorting.map((item) => ({ [item.id]: item.desc ? "desc" : "asc" })),
          )
        : JSON.stringify({}),
    // columnFilters,
    search: globalFilter,
  };

    const {error, members, isLoading, meta} = useMembers(fetchDataOptions)


    return <>
        <DataTable
        columns={columns}
        data={members ?? []}
        pageCount={meta?.last_page || 1}
        setPagination={setPagination}
        setSorting={setSorting}
        sorting={sorting}
        setColumnFilters={setColumnFilters}
        columnFilters={columnFilters}
        pageIndex={pageIndex}
        pageSize={pageSize}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        isLoading={isLoading}
      />{" "}
    </>
}

export default Feedback;