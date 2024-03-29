import React from "react";
import axios from "axios";
import { withPagination } from "../HOC/withPagination";
import { List } from "../components/list";
import { Pagination } from "../components/pagination";
import { H1 } from "../components/h1";
import { Content } from "../components/content";

const ListWithPagination = withPagination(Pagination, List, Pagination);

export const Users = props => {
  const fetchUsers = async query => {
    const {
      data: { count, results }
    } = await axios.get(`/people${query}`);

    return { data: results, count: Math.ceil(count / 10) };
  };

  return (
    <Content>
      <H1>Users</H1>

      <ListWithPagination {...props} fetchData={fetchUsers} />
    </Content>
  );
};
