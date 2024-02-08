/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import Icon from "@mui/material/Icon";
import SoftButton from "components/SoftButton";


function Author({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const schoolNewsData = {
  columns: [
        {  align: "center"}, // Add checkbox column

    { name: "srno", align: "center" },
    { name: "introtext", align: "center" },
    { name: "postedby", align: "center" },
    { name: "lastupdated", align: "center" },
    { name: "fb", align: "center" },
    { name: "tw", align: "center" },
    { name: "web", align: "center" },
    { name: "instagram", align: "center" },
    { name: "archivedate", align: "center" },
    { name: "scheduledate", align: "center" },
    { name: "createdon", align: "center" },
    { name: "lastmodified", align: "center" },
    { name: "category", align: "center" },
    { name: "publish", align: "center" },
    { name: "edit", align: "center" },


  ],

  rows: [
    {
        srno:   <SoftTypography variant="caption" color="secondary" fontWeight="medium">
       1
      </SoftTypography>,
      introtext: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
      Test News Letter
     </SoftTypography>,
      postedby: (
        <SoftTypography
          component="a"
          href="mailto:uniqueesuppot@gmail.com"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
         uniueesupport@gmail.com
        </SoftTypography>
      ),
      lastupdated: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
        <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
          computer
        </Icon>
      </SoftTypography>
      ),
      fb: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    -
       </SoftTypography>
      ),
      tw: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    -
       </SoftTypography>
      ),
      web: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        -
           </SoftTypography>
      ),
      instagram: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        -
           </SoftTypography>
      ),
      archivedate: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
   
       </SoftTypography>
      ),
      scheduledate: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         
        </SoftTypography>
      ),
      createdon: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        14/09/20
      </SoftTypography>
      ),
      lastmodified: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20
        </SoftTypography>
      ),
      category: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        None
           </SoftTypography>
      ),
      publish: (
        <SoftButton variant="text" color="dark">
       &nbsp;Published
      </SoftButton>
      ),
      edit: (
        <SoftButton variant="text" color="dark">
        <Icon>edit</Icon>&nbsp;edit
      </SoftButton>
      ),
    },
    {
        srno:   <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        2
       </SoftTypography>,
       introtext: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
       Test News Letter
      </SoftTypography>,
       postedby: (
         <SoftTypography
           component="a"
           href="mailto:uniqueesuppot@gmail.com"
           variant="caption"
           color="secondary"
           fontWeight="medium"
         >
          uniueesupport@gmail.com
         </SoftTypography>
       ),
       lastupdated: (
         <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           smartphone
         </Icon>
       </SoftTypography>
       ),
       fb: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       tw: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       web: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
        <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
          check_circle
        </Icon>
      </SoftTypography>
       ),
       instagram: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         -
            </SoftTypography>
       ),
       archivedate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    
        </SoftTypography>
       ),
       scheduledate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          
         </SoftTypography>
       ),
       createdon: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         14/09/20
       </SoftTypography>
       ),
       lastmodified: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
           14/09/20
         </SoftTypography>
       ),
       category: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         None
            </SoftTypography>
       ),
       publish: (
         <SoftButton variant="text" color="dark">
        &nbsp;Published
       </SoftButton>
       ),
       edit: (
         <SoftButton variant="text" color="dark">
         <Icon>edit</Icon>&nbsp;edit
       </SoftButton>
      ),
    },
    {
        srno:   <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        3
       </SoftTypography>,
       introtext: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
       Test News Letter
      </SoftTypography>,
       postedby: (
         <SoftTypography
           component="a"
           href="mailto:uniqueesuppot@gmail.com"
           variant="caption"
           color="secondary"
           fontWeight="medium"
         >
          uniueesupport@gmail.com
         </SoftTypography>
       ),
       lastupdated: (
         <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           smartphone
         </Icon>
       </SoftTypography>
       ),
       fb: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       tw: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       web: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
        <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
          check_circle
        </Icon>
      </SoftTypography>
       ),
       instagram: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         -
            </SoftTypography>
       ),
       archivedate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    
        </SoftTypography>
       ),
       scheduledate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          
         </SoftTypography>
       ),
       createdon: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         14/09/20
       </SoftTypography>
       ),
       lastmodified: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
           14/09/20
         </SoftTypography>
       ),
       category: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         None
            </SoftTypography>
       ),
       publish: (
         <SoftButton variant="text" color="dark">
        &nbsp;Published
       </SoftButton>
       ),
       edit: (
         <SoftButton variant="text" color="dark">
         <Icon>edit</Icon>&nbsp;edit
       </SoftButton>
      ),
    },

    {
        srno:   <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        4
       </SoftTypography>,
       introtext: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
       Test News Letter
      </SoftTypography>,
       postedby: (
         <SoftTypography
           component="a"
           href="mailto:uniqueesuppot@gmail.com"
           variant="caption"
           color="secondary"
           fontWeight="medium"
         >
          uniueesupport@gmail.com
         </SoftTypography>
       ),
       lastupdated: (
         <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           smartphone
         </Icon>
       </SoftTypography>
       ),
       fb: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       tw: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       web: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
        <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
          check_circle
        </Icon>
      </SoftTypography>
       ),
       instagram: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         -
            </SoftTypography>
       ),
       archivedate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    
        </SoftTypography>
       ),
       scheduledate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          
         </SoftTypography>
       ),
       createdon: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         14/09/20
       </SoftTypography>
       ),
       lastmodified: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
           14/09/20
         </SoftTypography>
       ),
       category: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         None
            </SoftTypography>
       ),
       publish: (
         <SoftButton variant="text" color="dark">
        &nbsp;Published
       </SoftButton>
       ),
       edit: (
         <SoftButton variant="text" color="dark">
         <Icon>edit</Icon>&nbsp;edit
       </SoftButton>
      ),
    },

    {
        srno:   <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        5
       </SoftTypography>,
       introtext: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
       Test News Letter
      </SoftTypography>,
       postedby: (
         <SoftTypography
           component="a"
           href="mailto:uniqueesuppot@gmail.com"
           variant="caption"
           color="secondary"
           fontWeight="medium"
         >
          uniueesupport@gmail.com
         </SoftTypography>
       ),
       lastupdated: (
         <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           smartphone
         </Icon>
       </SoftTypography>
       ),
       fb: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       tw: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       web: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
        <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
          check_circle
        </Icon>
      </SoftTypography>
       ),
       instagram: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         -
            </SoftTypography>
       ),
       archivedate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    
        </SoftTypography>
       ),
       scheduledate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          
         </SoftTypography>
       ),
       createdon: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         14/09/20
       </SoftTypography>
       ),
       lastmodified: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
           14/09/20
         </SoftTypography>
       ),
       category: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         None
            </SoftTypography>
       ),
       publish: (
         <SoftButton variant="text" color="dark">
        &nbsp;Published
       </SoftButton>
       ),
       edit: (
         <SoftButton variant="text" color="dark">
         <Icon>edit</Icon>&nbsp;edit
       </SoftButton>
      ),
    },
    {
        srno:   <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        6
       </SoftTypography>,
       introtext: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
       Test News Letter
      </SoftTypography>,
       postedby: (
         <SoftTypography
           component="a"
           href="mailto:uniqueesuppot@gmail.com"
           variant="caption"
           color="secondary"
           fontWeight="medium"
         >
          uniueesupport@gmail.com
         </SoftTypography>
       ),
       lastupdated: (
         <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           smartphone
         </Icon>
       </SoftTypography>
       ),
       fb: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       tw: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       web: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
        <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
          check_circle
        </Icon>
      </SoftTypography>
       ),
       instagram: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         -
            </SoftTypography>
       ),
       archivedate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    
        </SoftTypography>
       ),
       scheduledate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          
         </SoftTypography>
       ),
       createdon: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         14/09/20
       </SoftTypography>
       ),
       lastmodified: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
           14/09/20
         </SoftTypography>
       ),
       category: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         None
            </SoftTypography>
       ),
       publish: (
         <SoftButton variant="text" color="dark">
        &nbsp;Published
       </SoftButton>
       ),
       edit: (
         <SoftButton variant="text" color="dark">
         <Icon>edit</Icon>&nbsp;edit
       </SoftButton>
      ),
    },
    {
        srno:   <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        7
       </SoftTypography>,
       introtext: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
       Test News Letter
      </SoftTypography>,
       postedby: (
         <SoftTypography
           component="a"
           href="mailto:uniqueesuppot@gmail.com"
           variant="caption"
           color="secondary"
           fontWeight="medium"
         >
          uniueesupport@gmail.com
         </SoftTypography>
       ),
       lastupdated: (
         <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           smartphone
         </Icon>
       </SoftTypography>
       ),
       fb: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       tw: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       web: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
        <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
          check_circle
        </Icon>
      </SoftTypography>
       ),
       instagram: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         -
            </SoftTypography>
       ),
       archivedate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    
        </SoftTypography>
       ),
       scheduledate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          
         </SoftTypography>
       ),
       createdon: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         14/09/20
       </SoftTypography>
       ),
       lastmodified: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
           14/09/20
         </SoftTypography>
       ),
       category: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         None
            </SoftTypography>
       ),
       publish: (
         <SoftButton variant="text" color="dark">
        &nbsp;Published
       </SoftButton>
       ),
       edit: (
         <SoftButton variant="text" color="dark">
         <Icon>edit</Icon>&nbsp;edit
       </SoftButton>
      ),
    },
    {
        srno:   <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        8
       </SoftTypography>,
       introtext: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
       Test News Letter
      </SoftTypography>,
       postedby: (
         <SoftTypography
           component="a"
           href="mailto:uniqueesuppot@gmail.com"
           variant="caption"
           color="secondary"
           fontWeight="medium"
         >
          uniueesupport@gmail.com
         </SoftTypography>
       ),
       lastupdated: (
         <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           smartphone
         </Icon>
       </SoftTypography>
       ),
       fb: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       tw: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       web: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
        <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
          check_circle
        </Icon>
      </SoftTypography>
       ),
       instagram: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         -
            </SoftTypography>
       ),
       archivedate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    
        </SoftTypography>
       ),
       scheduledate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          
         </SoftTypography>
       ),
       createdon: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         14/09/20
       </SoftTypography>
       ),
       lastmodified: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
           14/09/20
         </SoftTypography>
       ),
       category: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         None
            </SoftTypography>
       ),
       publish: (
         <SoftButton variant="text" color="dark">
        &nbsp;Published
       </SoftButton>
       ),
       edit: (
         <SoftButton variant="text" color="dark">
         <Icon>edit</Icon>&nbsp;edit
       </SoftButton>
      ),
    },
    {
        srno:   <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        9
       </SoftTypography>,
       introtext: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
       Test News Letter
      </SoftTypography>,
       postedby: (
         <SoftTypography
           component="a"
           href="mailto:uniqueesuppot@gmail.com"
           variant="caption"
           color="secondary"
           fontWeight="medium"
         >
          uniueesupport@gmail.com
         </SoftTypography>
       ),
       lastupdated: (
         <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           smartphone
         </Icon>
       </SoftTypography>
       ),
       fb: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       tw: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       web: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
        <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
          check_circle
        </Icon>
      </SoftTypography>
       ),
       instagram: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         -
            </SoftTypography>
       ),
       archivedate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    
        </SoftTypography>
       ),
       scheduledate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          
         </SoftTypography>
       ),
       createdon: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         14/09/20
       </SoftTypography>
       ),
       lastmodified: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
           14/09/20
         </SoftTypography>
       ),
       category: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         None
            </SoftTypography>
       ),
       publish: (
         <SoftButton variant="text" color="dark">
        &nbsp;Published
       </SoftButton>
       ),
       edit: (
         <SoftButton variant="text" color="dark">
         <Icon>edit</Icon>&nbsp;edit
       </SoftButton>
      ),
    },
    {
        srno:   <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        10
       </SoftTypography>,
       introtext: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
       Test News Letter
      </SoftTypography>,
       postedby: (
         <SoftTypography
           component="a"
           href="mailto:uniqueesuppot@gmail.com"
           variant="caption"
           color="secondary"
           fontWeight="medium"
         >
          uniueesupport@gmail.com
         </SoftTypography>
       ),
       lastupdated: (
         <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           smartphone
         </Icon>
       </SoftTypography>
       ),
       fb: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       tw: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       web: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
        <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
          check_circle
        </Icon>
      </SoftTypography>
       ),
       instagram: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         -
            </SoftTypography>
       ),
       archivedate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    
        </SoftTypography>
       ),
       scheduledate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          
         </SoftTypography>
       ),
       createdon: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         14/09/20
       </SoftTypography>
       ),
       lastmodified: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
           14/09/20
         </SoftTypography>
       ),
       category: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         None
            </SoftTypography>
       ),
       publish: (
         <SoftButton variant="text" color="dark">
        &nbsp;Published
       </SoftButton>
       ),
       edit: (
         <SoftButton variant="text" color="dark">
         <Icon>edit</Icon>&nbsp;edit
       </SoftButton>
      ),
    },
    {
        srno:   <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        11
       </SoftTypography>,
       introtext: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
       Test News Letter
      </SoftTypography>,
       postedby: (
         <SoftTypography
           component="a"
           href="mailto:uniqueesuppot@gmail.com"
           variant="caption"
           color="secondary"
           fontWeight="medium"
         >
          uniueesupport@gmail.com
         </SoftTypography>
       ),
       lastupdated: (
         <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           smartphone
         </Icon>
       </SoftTypography>
       ),
       fb: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       tw: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       web: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
        <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
          check_circle
        </Icon>
      </SoftTypography>
       ),
       instagram: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         -
            </SoftTypography>
       ),
       archivedate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    
        </SoftTypography>
       ),
       scheduledate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          
         </SoftTypography>
       ),
       createdon: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         14/09/20
       </SoftTypography>
       ),
       lastmodified: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
           14/09/20
         </SoftTypography>
       ),
       category: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         None
            </SoftTypography>
       ),
       publish: (
         <SoftButton variant="text" color="dark">
        &nbsp;Published
       </SoftButton>
       ),
       edit: (
         <SoftButton variant="text" color="dark">
         <Icon>edit</Icon>&nbsp;edit
       </SoftButton>
      ),
    },
    {
        srno:   <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        12
       </SoftTypography>,
       introtext: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
       Test News Letter
      </SoftTypography>,
       postedby: (
         <SoftTypography
           component="a"
           href="mailto:uniqueesuppot@gmail.com"
           variant="caption"
           color="secondary"
           fontWeight="medium"
         >
          uniueesupport@gmail.com
         </SoftTypography>
       ),
       lastupdated: (
         <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           smartphone
         </Icon>
       </SoftTypography>
       ),
       fb: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       tw: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       web: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
        <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
          check_circle
        </Icon>
      </SoftTypography>
       ),
       instagram: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         -
            </SoftTypography>
       ),
       archivedate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    
        </SoftTypography>
       ),
       scheduledate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          
         </SoftTypography>
       ),
       createdon: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         14/09/20
       </SoftTypography>
       ),
       lastmodified: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
           14/09/20
         </SoftTypography>
       ),
       category: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         None
            </SoftTypography>
       ),
       publish: (
         <SoftButton variant="text" color="dark">
        &nbsp;Published
       </SoftButton>
       ),
       edit: (
         <SoftButton variant="text" color="dark">
         <Icon>edit</Icon>&nbsp;edit
       </SoftButton>
      ),
    },
    {
        srno:   <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        13
       </SoftTypography>,
       introtext: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
       Test News Letter
      </SoftTypography>,
       postedby: (
         <SoftTypography
           component="a"
           href="mailto:uniqueesuppot@gmail.com"
           variant="caption"
           color="secondary"
           fontWeight="medium"
         >
          uniueesupport@gmail.com
         </SoftTypography>
       ),
       lastupdated: (
         <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           smartphone
         </Icon>
       </SoftTypography>
       ),
       fb: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       tw: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
         <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
           check_circle
         </Icon>
       </SoftTypography>
       ),
       web: (
        <SoftTypography display="inline" variant="body2" verticalAlign="middle">
        <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
          check_circle
        </Icon>
      </SoftTypography>
       ),
       instagram: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         -
            </SoftTypography>
       ),
       archivedate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    
        </SoftTypography>
       ),
       scheduledate: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          
         </SoftTypography>
       ),
       createdon: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         14/09/20
       </SoftTypography>
       ),
       lastmodified: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
           14/09/20
         </SoftTypography>
       ),
       category: (
         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         None
            </SoftTypography>
       ),
       publish: (
         <SoftButton variant="text" color="dark">
        &nbsp;Published
       </SoftButton>
       ),
       edit: (
         <SoftButton variant="text" color="dark">
         <Icon>edit</Icon>&nbsp;edit
       </SoftButton>
      ),
    },
   
  ],
};

export default schoolNewsData;
