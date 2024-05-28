import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Heading from '../commonComps/Heading';
import SubHeading from '../commonComps/SubHeading';
import { addMemberProvider } from '../../Slices/settingsSlice';

const Addmember = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      adhaar_card: "",
      pan_card: "",
      gst_no: "",
      type: "",
      status: "Active",
    },
    validationSchema: yup.object({
      name: yup.string().min(4, "Minimum 4 characters required").required("Please enter your name"),
      email: yup.string().email("Invalid email address").required("Please enter your email"),
      password: yup
        .string()
        .min(6, "Minimum 6 characters required")
        .max(20, "Maximum 20 characters allowed")
        .required("Please enter your password"),
      mobile: yup.string().matches(/^\d{10}$/, "Please enter a valid 10 digit mobile number").required("Please enter your mobile number"),
      adhaar_card: yup.string().required("Please enter a valid Aadhaar card number"),
      pan_card: yup.string().required("Please enter a valid PAN card number"),
      gst_no: yup.string().required("Please enter a valid GST number"),
      type: yup.string().required("Please select a user type"),
      status: yup.string().required("Please select a status"),
    }),
    onSubmit: (values) => {
      console.log(values, "Form values");
      dispatch(addMemberProvider(values));
    },
  });

  return (
    <div className="w-full mx-auto">
      <SubHeading title="Add Teams" />
      <div className="bg-white m-10">
        <SubHeading heading="Add Team Details" />
        <form onSubmit={formik.handleSubmit} autoComplete="off" className="w-full">
          <div className="grid grid-cols-3 gap-4 m-10">
            <div>
              <label htmlFor="name" className="form-label text-lg">Client Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter Client Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-control block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 h-[48px] ${formik.touched.name && formik.errors.name ? "is-invalid" : ""}`}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="invalid-feedback text-red-400">{formik.errors.name}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="email" className="form-label text-lg">Email</label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter Your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-control block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 h-[48px] ${formik.touched.email && formik.errors.email ? "is-invalid" : ""}`}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="invalid-feedback text-red-400">{formik.errors.email}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="password" className="form-label text-lg">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-control block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 h-[48px] ${formik.touched.password && formik.errors.password ? "is-invalid" : ""}`}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="invalid-feedback text-red-400">{formik.errors.password}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="type" className="form-label text-lg">User Type</label>
              <select
                id="type"
                name="type"
                value={formik.values.type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-control block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 h-[48px] ${formik.touched.type && formik.errors.type ? "is-invalid" : ""}`}
              >
                <option value="" label="Please select type" />
                <option value="Api User">Api User</option>
                <option value="Distributor">Distributor</option>
                <option value="Master Distributor">Master Distributor</option>
                <option value="Retailer">Retailer</option>
              </select>
              {formik.touched.type && formik.errors.type ? (
                <div className="invalid-feedback text-red-400">{formik.errors.type}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="mobile" className="form-label text-lg">Mobile Number</label>
              <input
                id="mobile"
                name="mobile"
                type="text"
                placeholder="Enter Mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-control block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 h-[48px] ${formik.touched.mobile && formik.errors.mobile ? "is-invalid" : ""}`}
              />
              {formik.touched.mobile && formik.errors.mobile ? (
                <div className="invalid-feedback text-red-400">{formik.errors.mobile}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="gst_no" className="form-label text-lg">GST No</label>
              <input
                id="gst_no"
                name="gst_no"
                type="text"
                placeholder="Enter GST No"
                value={formik.values.gst_no}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-control block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 h-[48px] ${formik.touched.gst_no && formik.errors.gst_no ? "is-invalid" : ""}`}
              />
              {formik.touched.gst_no && formik.errors.gst_no ? (
                <div className="invalid-feedback text-red-400">{formik.errors.gst_no}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="pan_card" className="form-label text-lg">PAN Card</label>
              <input
                id="pan_card"
                name="pan_card"
                type="text"
                placeholder="Enter PAN Card Number"
                value={formik.values.pan_card}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-control block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 h-[48px] ${formik.touched.pan_card && formik.errors.pan_card ? "is-invalid" : ""}`}
              />
              {formik.touched.pan_card && formik.errors.pan_card ? (
                <div className="invalid-feedback text-red-400">{formik.errors.pan_card}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="adhaar_card" className="form-label text-lg">Aadhaar Card</label>
              <input
                id="adhaar_card"
                name="adhaar_card"
                type="text"
                placeholder="Enter Aadhaar Card Number"
                value={formik.values.adhaar_card}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-control block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 h-[48px] ${formik.touched.adhaar_card && formik.errors.adhaar_card ? "is-invalid" : ""}`}
              />
              {formik.touched.adhaar_card && formik.errors.adhaar_card ? (
                <div className="invalid-feedback text-red-400">{formik.errors.adhaar_card}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="status" className="form-label text-lg">Status</label>
              <select
                id="status"
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-control block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 h-[48px] ${formik.touched.status && formik.errors.status ? "is-invalid" : ""}`}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              {formik.touched.status && formik.errors.status ? (
                <div className="invalid-feedback text-red-400">{formik.errors.status}</div>
              ) : null}
            </div>
          </div>
          <div className="grid grid-cols-3 m-10">
            <div className='p-2'>
              <SubHeading
                button="Add Member"
                onClick={formik.handleSubmit}   >
                
              </SubHeading>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addmember;
