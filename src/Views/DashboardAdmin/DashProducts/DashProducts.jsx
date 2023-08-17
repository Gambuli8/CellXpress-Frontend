import React from "react";
import { Space, Table, Tag, Checkbox } from "antd";
import { getProduct, putProduct } from "../../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

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
          {/* <Checkbox name="saraza" value={data._id} onChange={()=> handleChange(record._id, record.isDeactivated)}>Desactivar Producto</Checkbox> */}
          <Checkbox
            name={`checkbox_${record._id}`}
            checked={record.isDeactivated}
            onChange={handleChange(record)}
          >
            Desactivar Producto
          </Checkbox>
        </Space>
      ),
    },
  ];
  const data = useSelector((state) => state.allProduct);

  console.log("55555", data);

  const [isChecked, setIsChecked] = useState(false);

  // const handleCheckboxChange = (event) => {
  //   setIsChecked(event.target.checked);
  // };

  const [inputBanProduct, setInputBanProduct] = useState({
    _id: "",
    isDeactivated: null,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const handleChange = (record) => (event) => {
    const { checked } = event.target;
    dispatch(
      putProduct({
        id: record._id,
        isDeactivated: checked,
        title: record.title,
      })
    );
  };
  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
      rowKey="_id"
      title={() => "Productos"}
    />
  );
};

export default DashProduct;
