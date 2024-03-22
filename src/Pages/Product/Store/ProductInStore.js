import {
  Avatar,
  Button,
  Space,
  Table,
  Typography,
  Popconfirm,
  Modal,
  Form,
  Input,
  DatePicker,
} from "antd";
import { useEffect, useState } from "react";
import { getStore,getListProductInStore } from "../../../API";
import moment from "moment";
function ProductInStore() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
 
  // console.log(storeId);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // Xử lý lưu thông tin sản phẩm vào cửa hàng
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setIsModalVisible(false);
        // Gọi API hoặc thực hiện các thao tác lưu dữ liệu tại đây
        // Ví dụ:
        // addProductInStore(values).then(() => {
        //   message.success("Thêm sản phẩm thành công");
        // Cập nhật lại danh sách sản phẩm sau khi thêm
        //   setLoading(true);
        //   getStore()
        //     .then((res) => {
        //       setDataSource(res.data);
        //     })
        //     .finally(() => {
        //       setLoading(false);
        //     });
        // });
      })
      .catch((error) => {
        // Xử lý khi có lỗi nhập liệu
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [form] = Form.useForm();

  useEffect(() => {
    const storeId = localStorage.getItem("storeId");
    setLoading(true);
    getListProductInStore(storeId).then((res) => {
      // console.log(res.status)
      if(res.status === 200 ) {
        setDataSource(res.data);
      }else  {
        setDataSource(null)
      }
      setLoading(false);
    });
  }, []);
  /// note : cái dataIndex : để fetch data , cái này dung api của ProductInStorebyID
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4} className=" text-center  ">
        Sản phẩm của cửa hàng
      </Typography.Title>
      <div className="ml-10">
        <Button type="primary" onClick={showModal} className="bg-blue-700">
          Thêm sản phẩm
        </Button>
        <Modal
          title="Thêm sản phẩm"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Thêm"
          cancelText="Hủy"
        >
          <Form form={form}>
            <Form.Item
              name="name"
              label="Tên sản phẩm"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên sản phẩm",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="image"
              label="Ảnh sản phẩm"
              rules={[
                {
                  required: true,
                  message: "Vui lòng thêm ảnh",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="address" label="Địa chỉ">
              <Input />
            </Form.Item>
            <Form.Item name="origin" label="Nguồn gốc">
              <Input />
            </Form.Item>
            <Form.Item name="mfgDate" label="Ngày sản xuất">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item name="expDate" label="Hạn sử dụng">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item name="categoryName" label="Mục sản phẩm">
              <Input />
            </Form.Item>
            <Form.Item name="quantity" label="Số lượng">
              <Input />
            </Form.Item>
            <Form.Item name="status" label="Trạng thái">
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>

      <div className="flex justify-center ">
        <Table
          style={{ width: 1200 }}
          loading={loading}
          columns={[
            {
              title: "No",
              dataIndex: "ProductInStoreId",
            },
            {
              title: "StoreName",
              dataIndex: "StoreName",
            },
            {
              title: "Địa chỉ",
              dataIndex: "Address",
            },
            {
              title: "Sản phẩm",
              dataIndex: "Name",
            },
            {
              title: "Hình ảnh",
              dataIndex: "Image",
              render: (Image) => {
                return <Avatar src={Image} />;
              },
            },
            {
              title: "Xuất xứ",
              dataIndex: "Origin",
            },
            {
              title: "Ngày sản xuất",
              dataIndex: "MfgDate",
              render: (MfgDate) => {
                const formattedDate = moment(MfgDate).format("YYYY-MM-DD");
                return <span>{formattedDate}</span>;
              },
            },
            {
              title: "Ngày hết hạn",
              dataIndex: "ExpDate",
              render: (ExpDate) => {
                const formattedDate = moment(ExpDate).format("YYYY-MM-DD");
                return <span>{formattedDate}</span>;
              },
            },
            {
              title: "Phân loại",
              dataIndex: "CategoryName",
            },
            {
              title: "Tồn kho",
              dataIndex: "Remaining",
            },
            {
              title: "Trạng thái",
              dataIndex: "Status",
              render: (status) => {
                if (status === 1) {
                  return <span style={{ color: "green" }}>Còn bán</span>;
                } else if (status === 0) {
                  return <span style={{ color: "red" }}>Ngưng bán</span>;
                } else {
                  return null;
                }
              },
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </div>
    </Space>
  );
}
export default ProductInStore;
