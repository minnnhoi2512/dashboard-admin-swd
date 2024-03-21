import { Image, Typography } from "antd";

import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <div className=" h-16 flex justify-between items-center px-4 sm:px-20 bg-slate-400 ">
      <Image
        width={50}
        height={50}
        src="https://png.pngtree.com/png-clipart/20230409/original/pngtree-admin-and-customer-service-job-vacancies-png-image_9041264.png"
        alt="logo"
        className="rounded-full "
      />

      <Typography.Title>Admin Dashboard</Typography.Title>

      <Link to="/">
        <button>Logout</button>
      </Link>
    </div>
  );
}
export default AppHeader;
