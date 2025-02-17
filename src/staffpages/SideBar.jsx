import { Menu } from "antd";
import {
  AppstoreOutlined,
  OrderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="h-screen w-[15%] bg-white shadow-md sticky top-0 left-0">
      <div className="flex items-center justify-center py-4 w-full h-32">
        <Link to="/staff/all-products">
          <img
            src="/assets/images/logo.png"
            alt="Logo"
            className="h-42 w-fit"
          />
        </Link>
      </div>
      <Menu mode="inline" defaultSelectedKeys={["1"]} className="border-r-0">
        <Menu.Item key="3" icon={<OrderedListOutlined />}>
          <Link to="/staff/order-list">Danh sách đơn hàng</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          <Link to="/staff/management-user">Khách hàng</Link>
        </Menu.Item>

        <Menu.Item key="5" icon={<AppstoreOutlined />}>
          <Link to="/staff/management-product">Quản lý sản phẩm</Link>
        </Menu.Item>

        <Menu.Item key="6" icon={<AppstoreOutlined />}>
          <Link to="/staff/management-order">Quản lý đơn hàng</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideBar;
