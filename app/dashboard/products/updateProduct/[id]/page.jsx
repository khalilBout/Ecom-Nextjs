import React from "react";

const page = ({ params }) => {
  const id = params.id;
  return <div>page update {id}</div>;
};

export default page;
