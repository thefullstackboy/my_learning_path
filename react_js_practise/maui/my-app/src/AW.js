import React from "react";
import { Button } from "matte-ui";
import { Trash2 } from "matte-ui"


const FormPage = () => {
  return (
    () => {
      return (
        <div className="story__button">
          <Button variant="contained">Contained button</Button>
          <Button>Text button</Button>
          <Button variant="outlined">Outlined button</Button>
          <Button variant="contained" color="error">
            Accent color
          </Button>
          <Button variant="contained" size="large" color="primary">
            A large button
          </Button>
          <Button variant="outlined" color="success" icon={<Trash2 />}>
            Button with icon
          </Button>
        </div>
      );
    }
  );
};

export default FormPage;