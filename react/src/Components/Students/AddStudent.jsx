import React, { useState } from 'react';
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./Students.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { IconButton, Tooltip } from '@mui/material';
import 'rsuite/styles/index.less'; // Import RSuite styles
import { DatePicker } from 'rsuite';
// import { useForm } from 'react-hook-form'; // Import useForm
// import { useForm } from "react-hook-form";
// import Dropdown from "react-bootstrap/Dropdown";

import { useNavigate } from "react-router-dom";
import axios from "axios";
// import React, { useState } from 'react';

  const EditStudent = () => {

  
  const navigate = useNavigate();

  //==============================================================
    const backtostudent = () => {
      navigate('/Students'); // Specify the path you want to navigate to
    };
  // ==========================Clone Service Div====================================
  const [formDataList, setFormDataList] = useState([
    { service_type: '', startDate: '', endDate: '', weeklyMandate: '', yearlyMandate: '' , isClone: false}
  ]);

  // Function to handle changes in form inputs (e.g., Start Date, End Date)
  const handleInputChange = (index, field, value) => {
    const updatedFormDataList = [...formDataList];
    updatedFormDataList[index][field] = value;
    setFormDataList(updatedFormDataList);
  };

  // Function to handle the service type change (Male or Fe-Male)
  const handleServiceTypeChange = (index, type) => {
    const updatedFormDataList = [...formDataList];
    updatedFormDataList[index] = {
      ...updatedFormDataList[index], // Preserve the other fields
      service_type: type,            // Update the service_type value
    };
    setFormDataList(updatedFormDataList);
  };

  // Function to add a new service (clone the form)
  const addService = () => {
    setFormDataList([
      ...formDataList,
      { service_type: '', startDate: '', endDate: '', weeklyMandate: '', yearlyMandate: '' ,  isClone: true}
    ]);
  };

  // Function to remove a service (form)
const removeService = (index) => {
  const updatedFormDataList = formDataList.filter((_, i) => i !== index);
  setFormDataList(updatedFormDataList);
};
  // ===================================================================
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const [resolutionInvoice, setResolutionInvoice] = useState(false);

  const handleCheckboxChange = (e) => {
    setResolutionInvoice(e.target.checked);
  };
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [grade, setGrade] = useState('');
    const [school_name, setSchoolName] = useState('');
    const [home_address, setHomeaddress] = useState('');
    const [doe_rate, setDOE] = useState('');
    const [iep_doc, setIEP] = useState('');
    const [disability, setDisability] = useState('');
    const [nyc_id, setNYC] = useState('');
    const [notesPerHour, setNotesPerHour] = useState('');
    const [case_v, setCase] = useState('');
    const [status, setStatus] = useState("active");  // Set 'active' as the default value
    const resolutionInvoiceValue = resolutionInvoice ? 'yes' : 'no';


    // ------------------Parent---------
    const [parent_name, setParent] = useState('');
    const [parent_email, setParentEmail] = useState('');
    const [parent_type, setParentType] = useState('');
    const [parent_phnumber, setParentPH] = useState('');
  // ---------------------Parent END------------------------



    const handleParentname = (event) => {
      setParent(event.target.value);
    };


    const handleParentEmail = (event) => {
      setParentEmail(event.target.value);
    };

    const handleParentPHnumber = (event) => {
      setParentPH(event.target.value);
    };

  const handleParentTypeChange = (selectedParent) => {
    setParentType(selectedParent);
  };


    const handleRadioChange = (event) => {
      setStatus(event.target.value);
    };
    

    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
      if (e.target.value) {
        setFirstNameError('');  // Clear the error as soon as the user types something
      }
    };

    const handleLastNameChange = (event) => {
      setLastName(event.target.value);
      if (event.target.value) {
        setLastNameError(''); // Clear the error as soon as the user types something
      }
    };
    const handleSchoolNameChange = (event) => {
      setSchoolName(event.target.value);
      if (event.target.value) {
        setSchoolNameError('');  // Clear the error as soon as the user types something
      }
    };

    const handleHomeAddress = (event) => {
      setHomeaddress(event.target.value);
      if (event.target.value) {
        setHomeNameError('');  // Clear the error as soon as the user types something
      }
    };



    const handelDoe_rate = (event) => {
    const value = event.target.value;
    
    // Allow only numeric input (whole numbers)
    if (/^\d+$/.test(value) || value === "") {
      setDOE(value); // Update state if input is valid
    }

    if (event.target.value) {
      setDOEError('');  // Clear the error as soon as the user types something
    }
  };

    const handelNycID = (event) => {
      const value = event.target.value;
      // Allow only numeric input (whole numbers)
    if (/^\d+$/.test(value) || value === "") {
      setNYC(value); // Update state if input is valid
    }
    };
    const handlenotesPerHour = (event) => {
      const value = event.target.value;
      // Allow only numeric input (whole numbers)
  if (/^\d+$/.test(value) || value === "") {
    setNotesPerHour(value); // Update state if input is valid
  }
    };
    const handleCase = (event) => {
      setCase(event.target.value);
    };
    const handleGradeChange = (selectedGrade) => {
      setGrade(selectedGrade);
      // setSchoolNameError(''); 
      // if (event.target.value) {
        setLastNameError(''); // Clear the error as soon as the user types something
      // }
    };

    const handelDisability = (selectedDisability) => {
      setDisability(selectedDisability);
      setLastNameError('');
    };
    // Handle grade change
    const handelIEP = (selectedIEP) => {
      setIEP(selectedIEP);

    };
  // ===================Validation===============================

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [SchoolNameError, setSchoolNameError] = useState('');
  const [HomeNameError, setHomeNameError] = useState('');
  const [DOEError, setDOEError] = useState('');
  const [GradeError, setGradeError] = useState('');
  const validateForm = () => {
    // Validate first name
    if (!first_name) {
      setFirstNameError('First name is required');
    } else {
      setFirstNameError('');
    }

    // Validate last name
    if (!last_name) {
      setLastNameError('Last name is required');
    } else {
      setLastNameError('');
    }

    if (!school_name) {
      setSchoolNameError('School name is required');
    } else {
      setSchoolNameError('');
    }

    if (!home_address) {
      setHomeNameError('Home name is required');
    } else {
      setHomeNameError('');
    }


    if (!doe_rate) {
      setDOEError('DOE Rate is required');
    } else {
      setDOEError('');
    }
    if (!grade) {
      setGradeError('Grade Rate is required');
    } else {
      setGradeError('');
    }
    if (!first_name || !last_name || !school_name || !home_address || !doe_rate || !grade) {
      return false;
    }
    
    return true;
  };

  // const [message, setMessage] = useState('');

    // ===================================================================
   
  
    const handleAddStudent   = async (event) => {
      console.log("handleAddStudent triggered");
      event.preventDefault();
      if (!validateForm()) return; 

     
      const formData = {
        first_name,
        last_name,
        grade,
        school_name,
        home_address,
        doe_rate,
        iep_doc,
        disability,
        nyc_id,
        notesPerHour,
        case_v,
        resolutionInvoice,
        status ,
        parent_name,
        parent_email,
        parent_phnumber,
        parent_type,
        // Add formDataList here to send the dynamic fields
        services: formDataList, // This includes all the dynamically added service forms
      };
      console.log('Form data:', formData);

      try {
        const response = await axios.post('/api/addstudent', JSON.stringify(formData), {
          headers: {
            'Content-Type': 'application/json',
          },
        });


       toast.success("Student successfully Saved!", {
        position: "top-right", 
        autoClose: 5000,
      });

      // Navigate to Students page after 5 seconds
      setTimeout(() => {
        navigate('/Students');
      }, 5000);

        console.log('Data sent successfully:', response.data);  
      } 
      
      catch (error) {
      toast.error("An error occurred. Please try again.", {
        position: "top-right", // Correct syntax
        autoClose: 5000,
      });
        console.error('There was an error sending data:', error.response?.data || error.message);
      }
    }

  
    return (
    <div className="dashboard-container">
            <div className="row dashboard-list">
              <div className="heading-text personal-info-text">
                <h3 style={{ marginLeft: '15px' }}>Basic Information</h3>
                <div className="" id="" onClick={backtostudent}>
                <i className="fa fa-backward fc-back-icon" aria-hidden="true"></i>
                </div>
              </div>
            </div>

        <div className="row dashboard-list personal-profile">
            <div className="stu-pro-field-div">
              <div className="col-md-6 student-profile-field widthcss">
                <label>First Name:</label>
                <input
                  type="text"  
                  name="firstName"
                  className="stu-pro-input-field"
                  placeholder="Enter First Name" value={first_name} onChange={handleFirstNameChange}/>
                  {firstNameError && <span>{firstNameError}</span>}
              </div>

              <div className="col-md-6 student-profile-field widthcss">
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  className="stu-pro-input-field"
                  placeholder="Enter Last Name"  value={last_name} onChange={handleLastNameChange}
                />
                {lastNameError && <span>{lastNameError}</span>}
              </div>
            </div>

          <div className="stu-pro-field-div">
              <div className="col-md-6 student-profile-field widthcss">
                <label>School Name:</label>
                <input
                  type="text"
                  name="schoolName"
                  className="stu-pro-input-field"
                  placeholder="Enter a School Name"  value={school_name} onChange={handleSchoolNameChange}
                />
                {SchoolNameError && <span>{SchoolNameError}</span>}
              </div>
            
            <div className="col-md-6 student-profile-field widthcss">
                <label>Grade:</label>
              <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle stu-pro-input-field"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      {grade || "Choose Grade"}
                    </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleGradeChange("A")}>
                      A
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleGradeChange("AA")}>
                      AA
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleGradeChange("AB")}>
                      AB
                    </button>
                  </li>
                </ul>
              </div>
              {GradeError && <span>{GradeError}</span>}
          </div>
      </div>

          <div className="stu-pro-field-div">
            <div className="col-md-6 student-profile-field widthcss">
              <label>Home Address:</label>
              <textarea
                name="homeAddress"
                rows="6"
                cols="50"
                className="text-field stu-pro-input-field"
                placeholder="Enter home address"  value={home_address} onChange={handleHomeAddress}
              ></textarea>
              {HomeNameError && <span>{HomeNameError}</span>}
            </div>

            <div className="col-md-6 student-profile-field widthcss">
              <label>DOE Rate:</label>
              <input
                type="text"
                name="doeRate"
                className="stu-pro-input-field"
                placeholder="Enter Rate"  value={doe_rate} onChange={handelDoe_rate}
              />
              {DOEError && <span>{DOEError}</span>}
            </div>
          </div>

          <div className="stu-pro-field-div">
            <div className="col-md-6 student-profile-field widthcss">
                <label>Choose IEP:</label>
              <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle stu-pro-input-field"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      {iep_doc || "Choose IEP Document"}
                    </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handelIEP("A")}>
                      A
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handelIEP("AA")}>
                      AA
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handelIEP("AB")}>
                      AB
                    </button>
                  </li>
                </ul>
              </div>
            </div>

        

    
            <div className="col-md-6 student-profile-field widthcss">
                <label>Classification Disability:</label>
              <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle stu-pro-input-field"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      {disability || "Choose"}
                    </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handelDisability("A")}>
                      A
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handelDisability("AA")}>
                      AA
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handelDisability("AB")}>
                      AB
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    

          <div className="stu-pro-field-div">
            <div className="col-md-6 student-profile-field widthcss">
              <label>NYC ID:</label>
              <input
                type="text"
                name="nycId"
                className="stu-pro-input-field"
                placeholder="Enter NYC ID"  value={nyc_id} onChange={handelNycID}
              />
            </div>

            <div className="col-md-6 student-profile-field widthcss">
              <label>Case:</label>
              <input
                type="text"
                name="case"
                className="stu-pro-input-field"
                placeholder="Enter Case"  value={case_v} onChange={handleCase}
              />
            </div>
          </div>

          <div className="stu-pro-field-div">
            <div className="col-md-6 student-profile-field widthcss">
              <label>No Notes Per Hr:</label>
              <input
                type="text"
                name="notesPerHour"
                className="stu-pro-input-field"
                placeholder="Enter No Notes Per Hr" value={notesPerHour} onChange={handlenotesPerHour}
              />
            </div>

            <div className="col-md-6 student-profile-field widthcss">
              <label>Resolution Invoice:</label>
              <input
                type="checkbox"
                name="resolutionInvoice"
                checked={resolutionInvoice}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>

        <div className="stu-pro-field-div">
          <div className="col-md-6 student-profile-field widthcss">
            <label>Status:</label>
            <div className="radio-btn">
              <div className="radio">
                <input
                  type="radio"
                  id="inactive"
                  name="status"
                  value="inactive"
                  onChange={handleRadioChange}  // Update onChange handler
                />
                <label>Inactive</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  id="active"
                  name="status"
                  value="active"
                  onChange={handleRadioChange} 
                  checked={status === 'active'} // Update onChange handler
                />
                <label>Active</label>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="row dashboard-list">
          <div className="heading-text parent-info-text">
            <h3 style={{ marginLeft: '15px' }}>Parent Information</h3>
          </div>
        </div>

        <div className="row dashboard-list personal-profile">
          <div className="stu-pro-field-div">
            <div className="col-md-6 student-profile-field widthcss">
              <label>Parent Name:</label>
              <input
                type="text"
                name="parentName"
                className="stu-pro-input-field"
                placeholder="Enter Parent Name"  value={parent_name} onChange={handleParentname}
              />
            </div>

            <div className="col-md-6 student-profile-field widthcss">
              <label>Parent Email:</label>
              <input
                type="text"
                name="parentEmail"
                className="stu-pro-input-field"
                placeholder="Enter Parent E-mail"   value={parent_email} onChange={handleParentEmail}
              />
            </div>
          </div>

          <div className="stu-pro-field-div">
          <div className="col-md-6 student-profile-field widthcss">
                <label>Parent Type:</label>
              <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle stu-pro-input-field"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      {parent_type || "Choose Parent Type"}
                    </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleParentTypeChange("Male")}>
                      Male
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleParentTypeChange("Fe-Male")}>
                      Fe-Male
                    </button>
                  </li>
                
                </ul>
              </div>
            </div>

            <div className="col-md-6 student-profile-field widthcss">
              <label>Phone No:</label>
              <input
                type="text"
                name="phoneNumber"
                className="stu-pro-input-field"
                placeholder="Enter parent phone no." value={parent_phnumber} onChange={handleParentPHnumber}
              />
            </div>
          </div>
        </div>
        {/* --------------------------------Services---------------------------------- */}
          <div className="row dashboard-list personal-profile">
            {formDataList.map((formData, index) => (
              <div key={index} id="profileContainer" className="stu-profile-div">
                <div className="stu-pro-field-div">
                {  formData.isClone && (
                      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-1rem', marginTop: '-7rem' }}>
                      <Tooltip title="Remove Service" arrow>
                        <IconButton
                          onClick={() => removeService(index)} // Call removeService when clicked
                          style={{
                            background: 'none',
                            padding: '0',
                            cursor: 'pointer',
                          }}
                        >
                          <FontAwesomeIcon icon={faSquareMinus} />
                        </IconButton>
                      </Tooltip>
                    </div>
                    )
                  }
                  <div className="col-md-6 student-profile-field widthcss">
                    <label>Service Type:</label>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle stu-pro-input-field"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        {formData.service_type || "Choose Service Type"}
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => handleServiceTypeChange(index, "Service A")}>
                            Service A
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => handleServiceTypeChange(index, "Service B")}>
                            Servive B
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-6 student-profile-field widthcss">
                    <label>Start Date:</label>
                    <DatePicker
                      className=""
                      value={formData.startDate}
                      placeholder="Enter Start Date"
                      onChange={(value) => handleInputChange(index, 'startDate', value)}
                      style={{ width: '100%'}}  // Optional: Set width to match the input field's size
                    />
                  </div>
                </div>
                
                <div className="stu-pro-field-div">
                  <div className="col-md-6 student-profile-field widthcss">
                    <label>End Date:</label>
                    <DatePicker
                      className=""
                      value={formData.endDate}
                      placeholder="Enter End Date"
                      onChange={(value) => handleInputChange(index, 'endDate', value)}
                      style={{ width: '100%', height: '45px' }}  // Added height and width
                    />
                  </div>

                  <div className="col-md-6 student-profile-field widthcss">
                    <label>Weekly Mandate:</label>
                    <input
                      type="text"
                      name="weeklyMandate"
                      className="stu-pro-input-field"
                      value={formData.weeklyMandate}
                      placeholder="Enter Weekly Mandate"
                      onChange={(e) => handleInputChange(index, 'weeklyMandate', e.target.value)}
                    />
                  </div>
                </div>

                <div className="stu-pro-field-div">
                  <div className="col-md-6 student-profile-field widthcss">
                    <label>Yearly Mandate:</label>
                    <input
                      type="text"
                      name="yearlyMandate"
                      className="stu-pro-input-field"
                      value={formData.yearlyMandate}
                      placeholder="Enter yearly mandate"
                      onChange={(e) => handleInputChange(index, 'yearlyMandate', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div>
              <button id="addServiceBtn" className="add-service-btn" onClick={addService}>Add Service</button>
            </div>
          </div>

        {/* ----------------------End of Add Service ----------- */}
      <div>
      <button  type="button" id = "handleAddStudent" className="save-student-btn" onClick={handleAddStudent}>Save Student</button>
      <ToastContainer />
    </div>
  </div>
    );
  };

export default EditStudent;

