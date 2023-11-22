import Breadcrumb from "../Components/Breeadcrumb";
import DefaultLayout from "../layout/DefaultLayout";
import TableOne from "../Components/TableOne";
import "../satoshi.css";

const Dashboard = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Tables" />
        <div className="flex flex-col gap-10">
          <TableOne />
        </div>
      </DefaultLayout>
    </>
  );
};

export default Dashboard;
