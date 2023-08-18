import React  from "react";
import { Space, Table, Tag, Checkbox } from "antd";
import { getUsers , putUser} from "../../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import  { useEffect,useState } from "react";

const DashUser = () => {
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
        <Checkbox
        name={`checkbox_${record._id}`}
        checked={record.isActive}
        onChange={handleChange(record)}
        >
            El usuario tildado esta activo, destilda para desactivarlo
        </Checkbox>
      </Space>
    ),
  },
];

  const data = useSelector((state) => state.allUsers);

  console.log("dataasas", data);

  const [isChecked, setIsChecked] = useState(true);

 const [inputBanUser, setInputBanUser] = useState({
    _id: "",
    isActive: null,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);


const handleChange = (record) => (event) => {
  const { checked } = event.target;
  dispatch(
    putUser({
      id: record._id,
      isActive: checked,
      name: record.name,
    })
  );
};
return (
  <Table
  columns={columns}
  dataSource={data.map((user) => ({
    ...user,
    isActive: user.isActive || false // Set default value to false
  }))}
  bordered
  rowKey="_id"
  title={() => "Usuarios"}
  />
);
};

export default DashUser;


