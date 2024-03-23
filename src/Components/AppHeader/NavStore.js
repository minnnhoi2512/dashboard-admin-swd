import { Image, Typography } from "antd";

import { Link } from "react-router-dom";

function NavStore() {
  return (
    <div className=" h-16 flex justify-between items-center px-4 sm:px-20 bg-black">
      <Image
        width={50}
        height={50}
        src="https://th.bing.com/th/id/OIF.F354qienQQDCRiqcCHcXfA?rs=1&pid=ImgDetMain"
        alt="logo"
        className="rounded-full bg-neutral-500"
      />

      <Typography.Title>
        <div className="text-center text-white">Store Dashboard </div>
      </Typography.Title>

      <Link to="/">
        <button className="bg-neutral-400 rounded-md w-[80px] h-[30px]">
          Đăng xuất
        </button>
      </Link>
    </div>
  );
}
export default NavStore;
