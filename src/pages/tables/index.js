

// @mui material components
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "core/LayoutContainers/DashboardLayout";
import DashboardNavbar from "core/Navbars/DashboardNavbar";
import Footer from "core/Footer";
import Table from "core/Tables/Table";
import SoftButton from "components/SoftButton";
import { Icon } from "@mui/material";
// Data
import schoolNewsData from "pages/tables/data/schoolNewsData";

function Tables() {
  const { columns, rows } = schoolNewsData;
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
          <SoftBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="end">
  <SoftTypography variant="h6" fontWeight="medium">
    News Publication
  </SoftTypography>
  <div style={{ display: 'flex', alignItems: 'center' }}>
  <Link to="/addnew">
        <SoftButton variant="gradient" color="dark" style={{ marginRight: '8px' }}>
          Add
        </SoftButton>
      </Link>

    <SoftButton variant="gradient" color="dark" style={{ marginRight: '8px' }}>
      Publish
    </SoftButton>

    <SoftButton variant="gradient" color="error" style={{ marginRight: '8px' }}>
      Archive
    </SoftButton>

    <SoftButton variant="gradient" color="error">
      Delete
    </SoftButton>
  </div>
</SoftBox>


            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </SoftBox>
          </Card>
        </SoftBox>
       
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
