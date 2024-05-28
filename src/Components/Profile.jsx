import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from './commonComps/Heading';
import SubHeading from './commonComps/SubHeading';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile_no: '',
    adhar_no: '',
    pan_no: '',
    gst_no: '',
    profilePhoto: null
  });

  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePhoto') {
      setFormData({
        ...formData,
        profilePhoto: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    navigate(-1);
    setIsEditing(false);
    setFormData({
      name: '',
      email: '',
      mobile_no: '',
      adhar_no: '',
      pan_no: '',
      gst_no: '',
      profilePhoto: null
    });
  };

  return (
    <>
      <SubHeading title="Profile" />
      <div className="mt-10 bg-white rounded-lg mb-10 shadow-xl w-full mx-auto">
        {/* <SubHeading heading="Update Profile" /> */}
        <div className='flex justify-end  me-5 p-5'>
          <button
            type="button"
            onClick={handleEditClick}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isEditing ? 'bg-red-500' : 'bg-blue-500'}`}
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className=" grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-3">
            <div className='sm:col-span-1 p-5'>
              <ProfilePhotoInput
                profilePhoto={formData.profilePhoto}
                isEditing={isEditing}
                handleChange={handleChange}
              />
            </div>
            <div className='sm:col-span-1 p-5'>
              <FormInput
                label="Name"
                id="name"
                name="name"
                type="text"
                value={formData.name}
                handleChange={handleChange}
                isEditing={isEditing}
              />
              <FormInput
                label="Email"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                handleChange={handleChange}
                isEditing={isEditing}
              />
              <FormInput
                label="Mobile No"
                id="mobile_no"
                name="mobile_no"
                type="number"
                value={formData.mobile_no}
                handleChange={handleChange}
                isEditing={isEditing}
              />
            </div>
            <div className='sm:col-span-1 p-5'>
              <FormInput
                label="Adhar Card No"
                id="adhar_no"
                name="adhar_no"
                type="text"
                value={formData.adhar_no}
                handleChange={handleChange}
                isEditing={isEditing}
              />
              <FormInput
                label="Pan Card No"
                id="pan_no"
                name="pan_no"
                type="text"
                value={formData.pan_no}
                handleChange={handleChange}
                isEditing={isEditing}
              />
              <FormInput
                label="GST No"
                id="gst_no"
                name="gst_no"
                type="number"
                value={formData.gst_no}
                handleChange={handleChange}
                isEditing={isEditing}
              />
            </div>
          </div>
          <div className="flex justify-center p-5 gap-4">
            {/* <button
              type="submit"
              className="bg-gradient-to-r rounded-md from-blue-800 to-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline me-5"
              disabled={!isEditing}
            >
              Update
            </button> */}
            <SubHeading button="Update"
            isabled={!isEditing} />
            {/* <button
              type="button"
              className="bg-gradient-to-r rounded-md from-blue-800 to-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleCancel}
            >
              Cancel
            </button> */}
            <SubHeading button="Cancel"
            onClick={handleCancel} />
          </div>
        </form>
      </div>
    </>
  );
};

const ProfilePhotoInput = ({ profilePhoto, isEditing, handleChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2 ms-[15%]" htmlFor="profilePhoto">
      Profile Photo
    </label>
    <div className='block w-[230px] h-[230px] border border-gray-300 rounded-full cursor-pointer bg-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 flex items-center justify-center'>
      <input
        type="file"
        id="profilePhoto"
        name="profilePhoto"
        onChange={handleChange}
        className="opacity-0 absolute inset-0 w-[230px] h-[230px] cursor-pointer mt-[300px] ms-[100px]"
        disabled={!isEditing}
      />
      {profilePhoto ? (
        <img
          src={URL.createObjectURL(profilePhoto)}
          alt="Profile Preview"
          defaultValue={'Images\professional.webp'}
          className="rounded-full w-[230px] h-[230px] object-cover"
        />
      ) : (
        <span className='text-sm'>Upload</span>
      )}
    </div>
  </div>
);

const FormInput = ({ label, id, name, type, value, handleChange, isEditing }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[48px] px-2"
      placeholder={`Enter your ${label.toLowerCase()}`}
      disabled={!isEditing}
    />
  </div>
);

export default Profile;
