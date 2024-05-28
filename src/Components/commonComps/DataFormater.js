export const serviceDataFormater = (data, hRow) => {
  console.log(data, hRow);
  let tData = [];
  for (let i = 0; i < data.length; i++) {
    let obj = {};
    obj[hRow[0]] = i + 1;
    obj[hRow[1]] = data[i]?.service_name;
    obj[hRow[2]] = data[i]?.isActive ? "Active" : "Not Active";
    tData.push(obj);
  }
  return tData;
};

export const dataFormater = (apiData) => {
  if (!apiData) {
    return [];
  }

  const { data, cols } = apiData;
  let tData = [];

  data.map((item, index) => {
    let obj = {};
    Object.values(item).map((value, j) => (obj[cols[j]] = value === true ? "Active" : false ? "Not Active" : value));
    tData.push(obj);
  });

  return tData;
};


