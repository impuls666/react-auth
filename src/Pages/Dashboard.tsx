import Breadcrumb from "../Components/Breeadcrumb";
import DefaultLayout from "../layout/DefaultLayout";
import TableOne from "../Components/TableOne";
import "../satoshi.css";
import { useEffect, useState } from "react";
import { useAuthHeader } from "react-auth-kit";
import axios from "axios";

interface Restaurant {
  _id: string;
  name: string;
}

const Dashboard = () => {
  const authHeader = useAuthHeader();

  const [tableData, setTableData] = useState<Restaurant[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'your-api-endpoint' with the actual endpoint of your API
        const response = await axios.post(
          "https://eu-central-1.aws.data.mongodb-api.com/app/data-bhbuf/endpoint/data/v1/action/find",
          {
            collection: "restaurants",
            database: "sample_restaurants",
            dataSource: "Cluster0",
            projection: { _id: 1, name: 1 },
            limit: 10,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: authHeader(),
            },
          }
        );

        const fetchedData: Restaurant[] = response.data;
        setTableData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [authHeader]);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />
      <div className="flex flex-col gap-10">
        {tableData !== null && <TableOne data={tableData} />}
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
