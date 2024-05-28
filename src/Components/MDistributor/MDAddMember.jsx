import React, { useState } from 'react'
import { addMemberProvider } from '../../Slices/settingsSlice';
import { useDispatch, useSelector } from "react-redux";
import { Field, useFormik } from 'formik'
import *as yup from "yup"
import SubHeading from '../commonComps/SubHeading';
const MDAddMember = () => {
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
        name: yup.string().required("please enter name atleast 4 character"),
        email: yup.string().required().email(),
        password: yup
            .string()
            .min(6, "Minimum 6 Character Required")
            .max(20, "Max 20 Character Required")
            .required("Please Enter Your Password "),
            mobile:yup.string().required("plese enter 10 digit number"),
            adhaar_card:yup.string().required("plese enter valid number"),
            type:yup.string().required("please select your type"),
            pan_card:yup.string().required("plese enter valid number"),
            gst_no:yup.string().required("plese enter valid number"),
            status:yup.string().required("plese enter valid number"),
    }),
    // onSubmit: (values) => {
    //     console.log(values,"values yup");
    //     // e.preventDefault();
    //     dispatch(addMemberProvider(values));
    // }
})
 return (
        <div className="w-full mx-auto">
           <SubHeading title="Add Teams" />
        <div className="bg-white m-10">
          <SubHeading heading="Add Team Details" />
          <form onSubmit={formik.handleSubmit} autoComplete='off' className="w-full">
          <div className="grid grid-cols-3 gap-4 m-10">
              <div>
                  <label htmlFor="name" className="form-label text-lg">Client Name</label>
                  <input 
                      id="name"
                      name="name"
                      type="text"
                      placeholder='Enter Client Name'
                      value={formik.values.name}
                      onChange={formik.handleChange
                      }
                      onBlur={formik.handleBlur}
                      className={`form-control block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 h-[48px] ${formik.touched.password && formik.errors.password ? "is-invalid" : ""}`}
                      />
                    <div className="invalid-feedback text-red-400">{formik.touched.name && formik.errors.name}</div>
                      </div>
                    <div>
                      <label for="email" className="form-label text-lg">Email</label>
                        <input
                          type="text"
                          placeholder="Enter Your Email"
                          name="email"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          className={`form-control block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 h-[48px] ${formik.touched.email && formik.errors.email ? "is-invalid" : ""}`}
                        />
                            <div className="invalid-feedback text-red-400">{formik.touched.email && formik.errors.email}</div>
                              </div>
                                    <div className="mb-3">
                                    <label htmlFor="password" className="form-label text-lg">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder='Enter Password'
                                        className={`form-control block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 h-[48px] ${formik.touched.password && formik.errors.password ? "is-invalid" : ""}`}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                    />
                                    <div className="invalid-feedback text-red-400">{formik.touched.password && formik.errors.password}</div>
                                </div>
              {/* <div>
                  <label htmlFor="userPlan" className="block text-sm font-medium text-gray-700">User Plan</label>
                  <select
                      id="userPlan"
                      name="userPlan"
                      type="text"
                      placeholder='Enter User Plan'
                      value={userPlan}
                      onChange={(e)=>{
                          setformik({
                            ...formData,
                            userPlan: e.target.value,
                          })
                      }}
                      className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                           >
                    <option>Select Plan</option>
                    <option>Distributor</option>
                    <option>Master Distributor</option>
                    <option>Operator wise</option>
                    <option>Retailer</option>
                    <option>State head</option>
                  </select>
              </div> */}
              <div>
                  <label htmlFor="type" className="form-label text-lg">User Type</label>
                  <select
                      id="type"
                      name="type"
                      type="text"
                      placeholder='Enter User Type'
                      value={formik.values.type}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`form-control block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 h-[48px]${formik.touched.type && formik.errors.type ? "is-invalid" : ""}`}
                      > Please select type
                    <option>Api User</option>
                    <option>Distributor</option>
                    <option>Master Distributor</option>
                    <option>Retailer</option>
                  </select>
                  <div className="invalid-feedback text-red-400">{formik.touched.type && formik.errors.type}</div>
                  </div>
              {/* <div>
                  <label htmlFor="teamMember" className="block text-sm font-medium text-gray-700">Team Member</label>
                  <select
                      id="teamMember"
                      name="teamMember"
                      aria-placeholder='Select Team Member'
                      type="text"
                      value={teamMember}
                      onChange={(e)=>{
                          setFormData({
                            ...formData,
                            teamMember: e.target.value,
                          })
                      }}
                      className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                    <option>Select Team Member</option>
                  </select>
                    </div>*/}
              {/* <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder='Enter Email'
                      
                      value={formik.values.email}
                     
                      
                      onChange={formik.handleChange
                      }
                      onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.pin && formik.touched.pin
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                         />
              </div>  */}
              <div>
                  <label htmlFor="mobile" className="form-label text-lg">Mobile Number</label>
                  <input
                      id="mobile"
                      name="mobile"
                      placeholder='Enter Mobile '
                      type="text"
                      value={formik.values.mobile}
                      onChange={formik.handleChange
                      }
                      onBlur={formik.handleBlur}
                      className={`form-control block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 h-[48px]${formik.touched.mobile && formik.errors.mobile ? "is-invalid" : ""}`}
                  />
              <div className="invalid-feedback text-red-400">{formik.touched.mobile && formik.errors.mobile}</div>
              </div>

              {/* <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                      placeholder='Enter Password'
                      name="password"
                      type="password"
                      
                      value={formik.values.password}
                      
                      
                      onChange={formik.handleChange
                      }
                      onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.pin && formik.touched.pin
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                      />
              </div> */}
              {/* <div>
                  <label htmlFor="userPin" className="block text-sm font-medium text-gray-700">User Pin</label>
                  <input
                      id="userPin"
                      name="userPin"
                      type="text"
                      placeholder='Enter User Pin'
                      value={userPin}
                      onChange={(e)=>{
                          setFormData({
                            ...formData,
                            userPin: e.target.value,
                          })
                      }}
                      className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
              </div>
              <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder='Enter Address'
                      value={address}
                      onChange={(e)=>{
                          setFormData({
                            ...formData,
                            address: e.target.value,
                          })
                      }}
                      className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
              </div> */}
              {/* <div>
                  <label htmlFor="shopName" className="block text-sm font-medium text-gray-700">Shop Name</label>
                  <input
                      id="shopName"
                      name="shopName"
                      type="text"
                      placeholder='Enter Shop Name'
                      value={shopName}
                      onChange={(e)=>{
                          setFormData({
                            ...formData,
                            shopName: e.target.value,
                          })
                      }}
                      className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
              </div> */}
              <div>
                  <label htmlFor="gst_no" className="form-label text-lg">GST No</label>
                  <input
                      id="gst_no"
                      name="gst_no"
                      type="text"
                      placeholder='Enter gst_no'
                      value={formik.values.gst_no}
                      onChange={formik.handleChange
                      }
                      onBlur={formik.handleBlur}
                      className={`form-control block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 h-[48px] ${formik.touched.gst_no && formik.errors.gst_no ? "is-invalid" : ""}`}
                  />
              <div className="invalid-feedback text-red-400">{formik.touched.gst_no && formik.errors.gst_no}</div>
              </div>
              <div>
                  <label htmlFor="pancard" className="form-label text-lg">Pancard</label>
                  <input
                      id="pan_card"
                      name="pan_card"
                      type="text"
                      placeholder='Enter pan_card Number'
                      value={formik.values.pan_card}
                      onChange={formik.handleChange
                      }
                      onBlur={formik.handleBlur}
                      className={`form-control block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 h-[48px] ${formik.touched.pan_card && formik.errors.pan_card ? "is-invalid" : ""}`}
                  />
              <div className="invalid-feedback text-red-400">{formik.touched.pan_card && formik.errors.pan_card}</div>
              </div>

              <div>
                  <label htmlFor="adharCard" className="form-label text-lg">Adhar Card</label>
                  <input
                      id="adhaar_card"
                      name="adhaar_card"
                      type="text"
                      placeholder='Enter Adhar Card Number'
                      value={formik.values.adhaar_card}
                      onChange={formik.handleChange
                      }
                      onBlur={formik.handleBlur}
                      className={`form-control block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 h-[48px] ${formik.touched.adhaar_card && formik.errors.adhaar_card ? "is-invalid" : ""}`}
                  />
              <div className="invalid-feedback text-red-400">{formik.touched.adhaar_card && formik.errors.adhaar_card}</div>
              </div>

              {/* <div>
                  <label htmlFor="approvedBy" className="block text-sm font-medium text-gray-700">Approved By</label>
                  <select
                      id="approved_by"
                      name="approved_by"
                      type="text"
                      value={approved_by}
                      onChange={(e)=>{
                          setFormData({
                            ...formData,
                            approved_by: e.target.value,
                          })
                      }}
                      className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option>Approve Now</option>
                      <option>Not Yet</option>
                    </select>
              </div> */}
              <div>
                  <label htmlFor="status" className="form-label text-lg">Status</label>
                  <select
                      id="status"
                      name="status"
                      type="text"
                      value={formik.values.status}
                      onChange={formik.handleChange
                      }
                      onBlur={formik.handleBlur}
                      className={`form-control block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 h-[48px] ${formik.touched.status && formik.errors.status ? "is-invalid" : ""}`}
                    >
                    <option>Active</option>
                    <option>Block</option>
                  </select>
              </div>
          </div>
          <div className="flex mb-10 ms-10">
          <SubHeading button="Add Member" />
          <div className='ms-5'>
          <SubHeading button="Cancel" />
          </div>
          </div>
         
      </form>
      </div>
  </div>
  )
}

export default MDAddMember