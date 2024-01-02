import React from "react";

const page = () => {
  const list = [1, 2, 3, 4];
  const list2 = [2, 3];
  let newList = [];
  list.forEach((item) => {
    const isInAr = list2.includes(item);
    if (isInAr === false) {
      newList.push(item);
    }
  });
  console.log("new List", newList);

  return <div>page</div>;
};

export default page;
