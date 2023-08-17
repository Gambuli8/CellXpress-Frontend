import React from "react";
import { Space, Table, Tag, Checkbox } from "antd";
import {getProduct, putProduct} from "../../../Redux/Actions"
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";




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
            
            // checked={record.isDeactivated}
            onChange={()=> setInputBanProduct({_id:record._id , isDeactivated:!record.isDeactivated})}
           
            onClick={handleChange}
          >
            Desactivar Producto
          </Checkbox>
        </Space>
      ),
    },
  ]
  const data = useSelector((state) => state.allProduct);

  const [inputBanProduct,setInputBanProduct]=useState({
    _id:"",
    isDeactivated:null
  });
  console.log("holaquehace",inputBanProduct)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getProduct());
  },[getProduct]);
  
  const handleChange =()=>{
    // console.log(isDeactivated)
    dispatch(putProduct(inputBanProduct)); 
     
    }
      
  const handleBannerProduct =(event)=>{
    event.preventDefault();
    
    
    
  }
  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
      title={() => "Productos"}
    />
  );
  }

export default DashProduct;
