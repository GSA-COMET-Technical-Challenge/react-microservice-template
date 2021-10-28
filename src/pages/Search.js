import React from "react";


import Form from "../components/Form";
import { formData } from "../components/formData";

const SearchPage = () => {

    return (
        <div className="App">
          <Form formData={formData} />
        </div>
      );
}

export default SearchPage