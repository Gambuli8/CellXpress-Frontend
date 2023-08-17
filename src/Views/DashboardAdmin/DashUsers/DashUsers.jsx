import React from "react";
import { Space, Table, Tag } from "antd";
import { useSelector } from "react-redux";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Role",
    dataIndex: "admin",
    key: "role",
    render: (admin) => (
      <Tag color={admin ? "red" : "blue"}>{admin ? "Admin" : "User"}</Tag>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Desbanear</a>
        <a>Banear</a>
      </Space>
    ),
  },
];

const DashUser = () => {
  const data = useSelector((state) => state.allUsers);
  console.log("dataasas", data);
  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
      title={() => "Usuarios"}
    />
  );
};

export default DashUser;
