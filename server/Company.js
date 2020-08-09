const compArr = [];

const Company = (payload = {}, action = "", index = null) => {
  switch (action) {
    case "ADD":
      compArr.push({
        company_id: compArr.length + 1,
        company_name: payload.company_name,
        company_address: payload.company_address,
        company_revenue: payload.company_revenue,
        company_phone: "+" + payload.company_phone_code + payload.company_phone,
        office: [],
      });

      return "Company Created";

    case "STORE":
      return compArr;

    case "DEL":
      let arrIndex = compArr.findIndex((s) => s.company_id == index);
      compArr.splice(arrIndex, 1);
      return "Company deleted";

    case "DEL_OFFICE":
      let compIndex = compArr.findIndex(
        (s) => s.company_name === payload.company
      );
      let offIndex = compArr[compIndex].office.findIndex(
        (s) => s.office_id == index
      );
      compArr[compIndex].office.splice(offIndex, 1);
      return "Office deleted";

    case "GETBYID":
      let arrGetByIdIndex = compArr.findIndex((s) => s.company_id == index);
      return compArr.filter( s => s.company_id == index);

    case "ADD_OFFICE":
      let arrIndexOffice = compArr.findIndex(
        (s) => s.company_name == payload.office_company
      );
      compArr[arrIndexOffice].office.push({
        office_id: compArr[arrIndexOffice].office.length + 1,
        office_name: payload.office_name,
        latitude: payload.latitude,
        longitude: payload.longitude,
        office_date: payload.office_date,
      });

      console.log(compArr);

      return "Office Created";

    default:
      return compArr;
  }
};

module.exports = Company;
