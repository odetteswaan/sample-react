import React from "react";
import Radio from "@mui/material/Radio";
import { Box } from "@mui/material";

export default function CustomRadio() {
  return (
    <Radio
      icon={
        <Box
          sx={{
            width: 20,
            height: 20,
            border: "1px solid #D6D3D1", // Default border
            borderRadius: "50%", // Makes it circular
          }}
        />
      }
      checkedIcon={
        <Box
          sx={{
            width: 20,
            height: 20,
            border: "1px solid #D6D3D1", // Thicker border when checked
            borderRadius: "50%",
            backgroundColor: "white", // Background when selected
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 10,
              height: 10,
              backgroundColor: "black", // Inner dot color
              borderRadius: "50%",
            }}
          />
        </Box>
      }
      sx={{
        padding: 0, // Removes extra padding
      }}
    />
  );
}
