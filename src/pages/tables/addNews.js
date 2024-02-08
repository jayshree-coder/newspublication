import { useState } from "react";
import DashboardLayout from "core/LayoutContainers/DashboardLayout";
import DashboardNavbar from "core/Navbars/DashboardNavbar";
import Footer from "core/Footer";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import { FormControl, MenuItem,InputLabel } from "@mui/material"; // Removed duplicate InputLabel import

import Card from "@mui/material/Card";
import { CloudUpload } from "@mui/icons-material";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Select from 'react-select'

function AddNews() {
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [pdfFiles, setPdfFiles] = useState([]);
  const [value, setValue] = useState('');

 

  const handleGalleryFileUpload = (event) => {
    const fileList = Array.from(event.target.files);
    setGalleryFiles(fileList);
  };

  const handlePdfFileUpload = (event) => {
    const fileList = Array.from(event.target.files);
    setPdfFiles(fileList);
  };
  const options = [
    { value: 'category1', label: 'category1' },
    { value: 'category2', label: 'category2' },
    { value: 'category3', label: 'category3' }
  ]
  
  const renderUploadedFiles = (files) => {
    return files.map((file, index) => (
      <SoftTypography key={index} variant="body2">
        {file.name}
      </SoftTypography>
    ));
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <SoftBox p={2}>
          <form>
            <SoftBox mb={2}>
              <FormControl fullWidth>
                <InputLabel id="category-label">Category</InputLabel>
                <Select options={options} />

                
               
              </FormControl>
            </SoftBox>
            <SoftBox mb={2}>
              <FormControl fullWidth>
                <InputLabel id="message-label">Message</InputLabel>
                <ReactQuill theme="snow" value={value} onChange={setValue} />
              </FormControl>
            </SoftBox>
            <SoftBox mb={2}>
             
              <label htmlFor="gallery-upload" style={{ cursor: "pointer" }}>
                <CloudUpload />
                &nbsp; Upload Gallery Images
              </label>
              <input
                id="gallery-upload"
                type="file"
                multiple
                style={{ display: "none" }}
                onChange={handleGalleryFileUpload}
              />
              {renderUploadedFiles(galleryFiles)}
            </SoftBox>
            <SoftBox mb={2}>
           
              <label htmlFor="pdf-upload" style={{ cursor: "pointer" }}>
                <CloudUpload />
                &nbsp; Upload PDF
              </label>
              <input
                id="pdf-upload"
                type="file"
                accept=".pdf"
                style={{ display: "none" }}
                onChange={handlePdfFileUpload}
              />
              {renderUploadedFiles(pdfFiles)}
            </SoftBox>
            <SoftBox mt={4}>
              <SoftButton
                type="submit"
                variant="gradient"
                color="info"
                fullWidth
              >
                Submit
              </SoftButton>
            </SoftBox>
          </form>
        </SoftBox>
      </Card>
      <Footer />
    </DashboardLayout>
  );
}

export default AddNews;
