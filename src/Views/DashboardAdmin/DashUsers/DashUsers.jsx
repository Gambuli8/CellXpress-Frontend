import React, { useEffect } from "react";
import { Space, Table, Tag, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../Redux/Actions";

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
        <Checkbox>Banear</Checkbox>
      </Space>
    ),
  },
];

const DashUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

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
