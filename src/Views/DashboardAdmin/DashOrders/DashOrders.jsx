import React from "react";
import { Space, Table, Tag, Dropdown, Typography, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { orderBuy } from "../../../Redux/Actions";
import { DownOutlined } from "@ant-design/icons";


const DashOrder = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(orderBuy());
  }, [orderBuy]);
  
  const data = useSelector((state) => state.orderBuy);
    console.log("orderData", data);

const columns = [
    {
      title: "Fecha de compra",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text, record) => <a href={`/admin/${record._id}`} >{text}</a>,
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Cantidad",
      dataIndex: "data[i].products",
      key: "data.products",
    },
    {
      title: "Estatus",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "success" ? "red" : "blue"}>
          {status === "success" ? "success" : "pending"}
        </Tag>
      ),
    },
  ];
  const items = [
    {
      key: "1",
      label: "Item 1",
    },
    {
      key: "2",
      label: "Item 2",
    },
    {
      key: "3",
      label: "Item 3",
    },
  ];

    
  // const productCuantity = data.products.map(order);

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => "Ordenes de compra"}
      />
    </>
  );
};

export default DashOrder;
