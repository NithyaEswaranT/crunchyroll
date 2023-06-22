import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
export default function App() {
   return (
      <div style = {{width:"700px"}}>
         <h2>
            {" "}
            Using the <i> Material UI </i> to show a linear progress bar in ReactJS
         </h2>
         <Box sx = {{ width: "100%" }}>
            <LinearProgress />
         </Box>
      </div>
   );
}