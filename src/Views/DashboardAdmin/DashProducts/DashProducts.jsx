import React from "react";
import { Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Stock",
    dataIndex: "count",
    key: "count",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Desactivar producto </a>
        <a>Activar producto</a>
      </Space>
    ),
  },
];

const DashUser = () => {
  const data = useSelector((state) => state.allProduct);
  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
      title={() => "Productos"}
    />
  );
};

export default DashUser;
