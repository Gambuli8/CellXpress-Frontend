import React from "react";
import { Space, Table, Tag, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "../../../Redux/Actions";

const DashProduct = () => {
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
          <Checkbox checked={record.isDeactivated}>
            Desactivar Producto
          </Checkbox>
        </Space>
      ),
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  });

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

export default DashProduct;
