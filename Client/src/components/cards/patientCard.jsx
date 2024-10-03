import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../../config/axiosInstance';
import axios from 'axios';
import toast from 'react-hot-toast';

const PatientCard = () => {
    const [user, setUser] = useState({
        fullName: '',
        profilePic: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
        phoneNumber: '',
        email: '',
        gender: '',
        bloodGroup: '',
        address: '',
        age: ''
    });
    const [file, setFile] = useState(null);

    const fetchPatient = async () => {
        try {
            const response = await axiosInstance({
                url: `/patient/profile`,
                method: 'GET',
                withCredentials: true,
            });
            console.log(response.data)
            setUser(response?.data?.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPatient();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setUser(prevUser => ({
                ...prevUser,
                profilePic: imageUrl
            }));
        }
    };

    const handleSaveChanges = async () => {
        try {
            let cloudinaryUrl = user.profilePic;

            if (file) {
                const cloudinaryFormData = new FormData();
                cloudinaryFormData.append('file', file);
                cloudinaryFormData.append('upload_preset', 'my_kabeer');

                const cloudinaryResponse = await axios.post(
                    'https://api.cloudinary.com/v1_1/dyqir2fom/image/upload',
                    cloudinaryFormData
                );

                console.log('Cloudinary Response:', cloudinaryResponse.data);

                cloudinaryUrl = cloudinaryResponse.data.secure_url;
            }

            const formData = new FormData();
            formData.append('fullName', user.fullName);
            formData.append('phoneNumber', user.phoneNumber);
            formData.append('email', user.email);
            formData.append('gender', user.gender);
            formData.append('bloodGroup', user.bloodGroup);
            formData.append('address', user.address);
            formData.append('age', user.age);
            formData.append('profilePic', cloudinaryUrl);

            const response = await axiosInstance({
                url: `/patient/update/${user._id}`,
                method: 'PUT',
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true,
            });

            console.log('Update Response:', response.data);

            setUser(prevUser => ({
                ...prevUser,
                profilePic: cloudinaryUrl
            }));

            toast.success('Account updated successfully.');
        } catch (error) {
            console.error('Update Error:', error);
            toast.error('Failed to update patient data');
        }
    };



    return (
        <section>
            <div className='container bg-gray-200 mx-auto my-4 rounded-lg shadow-md'>
                <div className='patientCard flex flex-row justify-between items-center p-4 pr-12 pl-12'>
                    <h2 className='font-bold sm-text-md truncate text-orange-500'>My Account</h2>
                    <button
                        onClick={handleSaveChanges}
                        className='bg-[#223C6F] p-2 text-white rounded-md hover:bg-orange-500'
                    >
                        Save Changes
                    </button>
                </div>
                <div className='patientCard'>
                    <div className='md:w-4/5'>
                        <div className='p-6 flex flex-col lg:flex-row'>
                            <div className='flex flex-col items-center mb-6 lg:mb-0 lg:w-1/3'>
                                <span className='text-gray-500 mb-2'>Profile Photo</span>
                                <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center cursor-pointer overflow-hidden">
                                    <img
                                        src={user.profilePic}
                                        alt=""
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <label htmlFor="file-upload" className="custom-file-upload mt-4">
                                    Add Photo
                                </label>
                                <input
                                    id="file-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden-file-input"
                                />
                            </div>
                            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full lg:w-2/6">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-gray-500">Full Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={user.fullName}
                                        onChange={handleChange}
                                        className="input input-bordered w-full h-12 py-2 px-3 rounded-md border-gray-300 shadow-sm box-border"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-4/5'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-gray-500">Contact Number</span>
                            </label>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={user.phoneNumber || ''}
                                onChange={handleChange}
                                className="input input-bordered w-full h-12 py-2 px-3 rounded-md border-gray-300 shadow-sm box-border"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-gray-500">Email Address</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={user.email || ''}
                                onChange={handleChange}
                                className="input input-bordered w-full h-12 py-2 px-3 rounded-md border-gray-300 shadow-sm box-border"
                            />
                        </div>
                        <div className="form-control w-full relative">
                            <label className="label">
                                <span className="label-text text-gray-500">Gender</span>
                            </label>
                            <select
                                name="gender"
                                value={user.gender || ''}
                                onChange={handleChange}
                                className='w-full h-12 py-2 px-3 border-2 rounded-md border-gray-300 shadow-sm focus:outline-none appearance-none pl-3 pr-10'
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-control w-full relative">
                            <label className="label">
                                <span className="label-text text-gray-500">Age</span>
                            </label>
                            <input
                                type="text"
                                name="age"
                                value={user.age || ''}
                                onChange={handleChange}
                                className="input input-bordered w-full h-12 py-2 px-3 rounded-md border-gray-300 shadow-sm box-border"
                            />
                        </div>
                        <div className="form-control w-full relative">
                            <label className="label">
                                <span className="label-text text-gray-500">Blood Group</span>
                            </label>
                            <select
                                name="bloodGroup"
                                value={user.bloodGroup || ''}
                                onChange={handleChange}
                                className='w-full h-12 py-2 px-3 border-2 rounded-md border-gray-300 shadow-sm focus:outline-none appearance-none pl-3 pr-10'
                            >
                                <option value="">Select Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-gray-500">Address</span>
                            </label>
                            <input
                                type="text"
                                name="address"
                                value={user.address || ''}
                                onChange={handleChange}
                                className="input input-bordered w-full h-12 py-2 px-3 rounded-md border-gray-300 shadow-sm box-border"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PatientCard;
