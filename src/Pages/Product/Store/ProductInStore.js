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
import { getStore } from "../../../API";

function ProductInStore() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    setLoading(true);
    getStore().then((res) => {
      setDataSource(res.data);
      setLoading(false);
    });
  }, []);
  /// note : cái dataIndex : để fetch data , cái này dung api của ProductInStorebyID
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4} className=" text-center  ">
        Cửa hàng
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
              title: "Tên sản phẩm",
              dataIndex: "Name",
            },
            {
              title: "Địa chỉ",
              dataIndex: "Address",
            },

            {
              title: "Ảnh sản phẩm",
              dataIndex: "Image",
              render: (Image) => {
                return <Avatar src={Image} />;
              },
            },
            {
              title: "Nguồn gốc",
              dataIndex: "Origin",
            },
            {
              title: "Ngày sản xuất ",
              dataIndex: "MfgDate",
            },
            {
              title: "Hạn sử dụng",
              dataIndex: "ExpDate",
            },
            {
              title: "Mục sản phẩm",
              dataIndex: " CategoryName",
            },
            {
              title: "Số lượng",
              dataIndex: " Quantity",
            },
            {
              title: "Trạng thái",
              dataIndex: " Status",
            },
            {
              title: "Action",
              dataIndex: "Action",
              render: (_, record) => (
                <Popconfirm
                  title="Bạn có chắc chắn muốn xóa?"
                  // onConfirm={() => handleDelete(record)} ty Hoi dung cái nay goi hàm HandleDelete
                  okText="Xóa"
                  cancelText="Hủy"
                >
                  <a>Xóa</a>
                </Popconfirm>
              ),
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
