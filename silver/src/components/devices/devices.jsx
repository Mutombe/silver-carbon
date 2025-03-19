import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createDevice,   getDeviceById,
    updateDevice,
    fetchFuelTypes,
    fetchTechnologyTypes,
    clearError,
    clearSuccess, } from "@/redux/slices/deviceSlice";

const DeviceForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { currentDevice, fuelTypes, technologyTypes, loading, error, success } =
    useSelector((state) => state.device);

  const [isEditing, setIsEditing] = useState(false);
  const [files, setFiles] = useState({
    production_facility_registration: null,
    declaration_of_ownership: null,
    metering_evidence: null,
    single_line_diagram: null,
    project_photos: null,
  });

  const [mapView, setMapView] = useState("map"); // 'map' or 'satellite'

  useEffect(() => {
    // Fetch fuel and technology types
    dispatch(fetchFuelTypes());
    dispatch(fetchTechnologyTypes());

    // If we have an ID parameter, we're in edit mode
    if (id) {
      setIsEditing(true);
      dispatch(getDeviceById(id));
    }

    // Clear any previous success/error messages when component mounts
    return () => {
      dispatch(clearError());
      dispatch(clearSuccess());
    };
  }, [dispatch, id]);

  useEffect(() => {
    // Redirect to devices list after successful submission
    if (success) {
      setTimeout(() => {
        navigate("/devices");
      }, 3000);
    }
  }, [success, navigate]);

  const initialValues = {
    device_name: currentDevice?.device_name || "",
    default_account_code: currentDevice?.default_account_code || "",
    issuer_organisation: currentDevice?.issuer_organisation || "",
    device_fuel: currentDevice?.device_fuel || "",
    device_technology: currentDevice?.device_technology || "",
    capacity: currentDevice?.capacity || "",
    commissioning_date: currentDevice?.commissioning_date
      ? new Date(currentDevice.commissioning_date).toISOString().split("T")[0]
      : "",
    requested_effective_registration_date:
      currentDevice?.requested_effective_registration_date
        ? new Date(currentDevice.requested_effective_registration_date)
            .toISOString()
            .split("T")[0]
        : "",
    other_labelling_scheme: currentDevice?.other_labelling_scheme || "",
    address: currentDevice?.address || "",
    state_province: currentDevice?.state_province || "",
    postcode: currentDevice?.postcode || "",
    country: currentDevice?.country || "",
    latitude: currentDevice?.latitude || "",
    longitude: currentDevice?.longitude || "",
    additional_notes: currentDevice?.additional_notes || "",
  };

  const validationSchema = Yup.object({
    device_name: Yup.string().required("Device name is required"),
    issuer_organisation: Yup.string().required(
      "Issuer organisation is required"
    ),
    device_fuel: Yup.string().required("Device fuel is required"),
    device_technology: Yup.string().required("Device technology is required"),
    capacity: Yup.number()
      .positive("Capacity must be positive")
      .required("Capacity is required"),
    commissioning_date: Yup.date().required("Commissioning date is required"),
    requested_effective_registration_date: Yup.date()
      .required("Requested effective registration date is required")
      .min(
        Yup.ref("commissioning_date"),
        "Effective registration date must be after commissioning date"
      ),
    address: Yup.string().required("Address is required"),
    state_province: Yup.string().required("State/Province is required"),
    postcode: Yup.string().required("Postcode is required"),
    country: Yup.string().required("Country is required"),
    latitude: Yup.number()
      .min(-90, "Latitude must be between -90 and 90")
      .max(90, "Latitude must be between -90 and 90")
      .required("Latitude is required"),
    longitude: Yup.number()
      .min(-180, "Longitude must be between -180 and 180")
      .max(180, "Longitude must be between -180 and 180")
      .required("Longitude is required"),
  });

  const handleFileChange = (event, fieldName) => {
    setFiles({
      ...files,
      [fieldName]: event.currentTarget.files[0],
    });
  };

  const handleSubmit = (values) => {
    // Combine form values with file uploads
    const deviceData = {
      ...values,
      ...files,
    };

    if (isEditing) {
      dispatch(updateDevice({ id, deviceData }));
    } else {
      dispatch(createDevice(deviceData));
    }
  };

  const handleMapPointSelect = (event, setFieldValue) => {
    // This would typically integrate with a mapping API
    // For now, we'll simulate selecting a point
    // In a real implementation, this would get coordinates from a map click event
    setFieldValue("latitude", 52.440541);
    setFieldValue("longitude", -0.724122);
  };

  const [documentChecklist, setDocumentChecklist] = useState({
    sf02_completed: false,
    sf02_name_matches: false,
    sf02_capacity_matches: false,
    sf02_date_matches: false,
    sf02_generators_match: false,
    sf02_meters_provided: false,
  });

  const handleChecklistChange = (field) => {
    setDocumentChecklist({
      ...documentChecklist,
      [field]: !documentChecklist[field],
    });
  };

  const allSF02ChecklistComplete = Object.values(documentChecklist).every(
    (value) => value === true
  );

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-2xl font-bold mb-6">
        {isEditing ? "Edit Device" : "Register New Device"}
      </h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {typeof error === "object" ? JSON.stringify(error) : error}
        </div>
      )}

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Device successfully {isEditing ? "updated" : "registered"}.
          Redirecting to devices list...
        </div>
      )}

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className="space-y-6">
            {/* Basic Device Information */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Basic Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="device_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Device Name *
                  </label>
                  <Field
                    type="text"
                    name="device_name"
                    id="device_name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter the name of the device"
                  />
                  <ErrorMessage
                    name="device_name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="default_account_code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Default Account Code
                  </label>
                  <Field
                    type="text"
                    name="default_account_code"
                    id="default_account_code"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="If you are planning to deposit issue requests into a trade account owned by your organisation"
                  />
                  <ErrorMessage
                    name="default_account_code"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="issuer_organisation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Issuer Organisation *
                  </label>
                  <Field
                    as="select"
                    name="issuer_organisation"
                    id="issuer_organisation"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Issuer Organisation</option>
                    <option value="The Green Certificate Company (Central Issuer)">
                      The Green Certificate Company (Central Issuer)
                    </option>
                    {/* Add more options as needed */}
                  </Field>
                  <ErrorMessage
                    name="issuer_organisation"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Technical Information */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Technical Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="device_fuel"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Device Fuel *
                  </label>
                  <Field
                    as="select"
                    name="device_fuel"
                    id="device_fuel"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Fuel Type</option>
                    {Object.entries(fuelTypes).map(([key, value]) => (
                      <option
                        key={key}
                        value={key}
                      >{`${key} - ${value}`}</option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="device_fuel"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="device_technology"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Device Technology *
                  </label>
                  <Field
                    as="select"
                    name="device_technology"
                    id="device_technology"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Technology Type</option>
                    {Object.entries(technologyTypes).map(([key, value]) => (
                      <option
                        key={key}
                        value={key}
                      >{`${key} - ${value}`}</option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="device_technology"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="capacity"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Capacity (MW) *
                  </label>
                  <div className="flex">
                    <Field
                      type="number"
                      step="0.000001"
                      name="capacity"
                      id="capacity"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter the device's capacity in megawatts (MW)"
                    />
                    <span className="inline-flex items-center ml-2 text-gray-500">
                      MW
                    </span>
                  </div>
                  <ErrorMessage
                    name="capacity"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="other_labelling_scheme"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Other Labelling Scheme
                  </label>
                  <Field
                    type="text"
                    name="other_labelling_scheme"
                    id="other_labelling_scheme"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="If this device qualifies for another labelling scheme"
                  />
                  <ErrorMessage
                    name="other_labelling_scheme"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                  <div className="mt-2 text-sm text-gray-500 bg-blue-50 p-2 rounded">
                    More information on labelling schemes is provided in the
                    SD-03 Labelling Schemes, available from the Evident website,
                    at
                    <a
                      href="https://evident.global/documents"
                      className="text-blue-500 hover:underline ml-1"
                    >
                      https://evident.global/documents
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Registration Dates</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="commissioning_date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Commissioning Date *
                  </label>
                  <Field
                    type="date"
                    name="commissioning_date"
                    id="commissioning_date"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    Select the date the device was commissioned. This date must
                    be in the past.
                  </div>
                  <ErrorMessage
                    name="commissioning_date"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="requested_effective_registration_date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Requested Effective Registration Date *
                  </label>
                  <Field
                    type="date"
                    name="requested_effective_registration_date"
                    id="requested_effective_registration_date"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    Select the date you wish this device registration to be
                    effective from. This date must be in the past and after the
                    commissioning date.
                  </div>
                  <ErrorMessage
                    name="requested_effective_registration_date"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />

                  <div className="mt-2 text-sm text-gray-500 bg-blue-50 p-2 rounded">
                    <p>
                      This date must align with both the date you have filled on
                      the registration form (SF-02) and the dates listed on the
                      SF-02C.
                    </p>
                    <p className="mt-1">
                      This date is restricted by the Residual Mix Deadline
                      (RMD), which limits the earliest possible date of
                      registration in line with issuance deadlines.
                    </p>
                    <p className="mt-1">
                      More information on the RMD can be found here
                      <a
                        href="https://www.trackingstandard.org/conclusions-of-the-rolling-rmd-consultation"
                        className="text-blue-500 hover:underline ml-1"
                      >
                        https://www.trackingstandard.org/conclusions-of-the-rolling-rmd-consultation
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Device Location</h2>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address *
                  </label>
                  <Field
                    type="text"
                    name="address"
                    id="address"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    Enter the address for the device. This should correspond to
                    the physical location of the device. It should not be the
                    address of the device owner, unless that is the same address
                    as the device.
                  </div>
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="state_province"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State/Province *
                  </label>
                  <Field
                    type="text"
                    name="state_province"
                    id="state_province"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    Enter the state/province for the device. This should
                    correspond to the physical location of the device. It should
                    not be the state/province of the device owner, unless that
                    is the same address as the device.
                  </div>
                  <ErrorMessage
                    name="state_province"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="postcode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Postcode *
                  </label>
                  <Field
                    type="text"
                    name="postcode"
                    id="postcode"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    Enter the postcode for the device. This should correspond to
                    the physical location of the device. It should not be the
                    postcode of the device owner, unless that is the same
                    address as the device.
                  </div>
                  <ErrorMessage
                    name="postcode"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country *
                  </label>
                  <Field
                    as="select"
                    name="country"
                    id="country"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">
                      Select the country where the device is located
                    </option>
                    <option value="GB">
                      GB - United Kingdom of Great Britain and Northern Ireland
                    </option>
                    {/* Add more countries as needed */}
                  </Field>
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />

                  <div className="mt-2 text-sm text-gray-500 bg-blue-50 p-2 rounded">
                    For the most up to date country specific guidance, please
                    refer to the SD-01 Authorised Issuing Regions document
                    available at
                    <a
                      href="https://evident.global/documents"
                      className="text-blue-500 hover:underline ml-1"
                    >
                      https://evident.global/documents
                    </a>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Latitude and Longitude *
                  </label>
                  <div className="text-sm text-gray-500 mb-2">
                    Enter the latitude and longitude of the device in decimal
                    format. Alternatively, drag the pointer on the map to the
                    device's location.
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="latitude"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Latitude *
                      </label>
                      <Field
                        type="number"
                        step="0.000001"
                        name="latitude"
                        id="latitude"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <ErrorMessage
                        name="latitude"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="longitude"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Longitude *
                      </label>
                      <Field
                        type="number"
                        step="0.000001"
                        name="longitude"
                        id="longitude"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <ErrorMessage
                        name="longitude"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  {/* Map View */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="flex items-center bg-gray-100 p-2 border-b">
                      <button
                        type="button"
                        className={`px-4 py-1 rounded ${
                          mapView === "map"
                            ? "bg-white shadow"
                            : "bg-transparent"
                        }`}
                        onClick={() => setMapView("map")}
                      >
                        Map
                      </button>
                      <button
                        type="button"
                        className={`px-4 py-1 rounded ml-2 ${
                          mapView === "satellite"
                            ? "bg-white shadow"
                            : "bg-transparent"
                        }`}
                        onClick={() => setMapView("satellite")}
                      >
                        Satellite
                      </button>
                      <div className="ml-auto">
                        <button
                          type="button"
                          className="p-1 bg-white rounded border"
                          onClick={() => {
                            // This would normally trigger full-screen mode
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5-5-5m5 5v-4m0 4h-4"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="relative bg-blue-100 h-64 w-full">
                      {/* This would be replaced with an actual map component */}
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage:
                            "url(https://maps.googleapis.com/maps/api/staticmap?center=0,0&zoom=1&size=800x400&key=YOUR_API_KEY)",
                        }}
                      >
                        <div className="flex items-center justify-center h-full">
                          <button
                            type="button"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={(e) =>
                              handleMapPointSelect(e, setFieldValue)
                            }
                          >
                            Click to simulate map selection
                          </button>
                        </div>
                      </div>

                      {/* Map Controls (simplified) */}
                      <div className="absolute top-2 right-2 flex flex-col">
                        <button className="bg-white p-1 rounded shadow mb-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </button>
                        <button className="bg-white p-1 rounded shadow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="bg-gray-100 p-2 text-xs text-gray-500 flex justify-between items-center">
                      <div>Keyboard shortcuts</div>
                      <div>Map data ©2024</div>
                      <div>Terms</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Uploads */}
            <div className="bg-blue-50 shadow-md rounded-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2 className="text-xl font-semibold">Document Uploads</h2>
              </div>

              <p className="text-sm text-gray-700 mb-4">
                A minimum of 5 document uploads are required to submit your
                facility. You can save your progress if you do not have all
                these files available.
              </p>

              <p className="text-sm text-gray-700 mb-4">
                Each upload section outlines important requirements for the
                document to be considered valid for the Evident Registry. The
                checkboxes will help to guide you through the requirements for
                each document and must be completed to be able to upload files.
              </p>

              <p className="text-sm text-gray-700 mb-6">
                If you require any help with the document uploads, please save
                your progress, and email the GCC team at helpdesk@gcc.re.
              </p>

              {/* SF-02 Production Facility Registration */}
              <div className="bg-white rounded-lg mb-4 overflow-hidden">
                <div className="bg-gray-100 px-4 py-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                  <h3 className="font-medium">
                    Form SF-02 - Production Facility Registration *
                  </h3>
                  <span className="ml-auto px-2 py-1 bg-red-500 text-white text-xs rounded">
                    Required
                  </span>
                </div>

                <div className="p-4">
                  <p className="text-gray-500 text-sm mb-4">
                    There are currently no files associated with this.
                  </p>

                  <p className="text-gray-700 text-sm mb-3">
                    Please provide a completed copy of the form SF-02. A
                    checklist for key elements is provided below.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="sf02_completed"
                        className="mt-1"
                        checked={documentChecklist.sf02_completed}
                        onChange={() => handleChecklistChange("sf02_completed")}
                      />
                      <label
                        htmlFor="sf02_completed"
                        className="ml-2 text-sm text-gray-700"
                      >
                        The SF-02 has been fully completed, signed, and dated.
                      </label>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="sf02_name_matches"
                        className="mt-1"
                        checked={documentChecklist.sf02_name_matches}
                        onChange={() =>
                          handleChecklistChange("sf02_name_matches")
                        }
                      />
                      <label
                        htmlFor="sf02_name_matches"
                        className="ml-2 text-sm text-gray-700"
                      >
                        The official name of the facility used on form SF-02
                        matches the name provided on the Registry and other
                        supporting documents.
                      </label>
                    </div>

                    {/* SF-02C Owner's Declaration */}
                    <div className="bg-white rounded-lg mb-4 overflow-hidden">
                      <div className="bg-gray-100 px-4 py-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                        <h3 className="font-medium">
                          SF-02C Owner's Declaration or Proof of Ownership *
                        </h3>
                        <span className="ml-auto px-2 py-1 bg-green-500 text-white text-xs rounded">
                          Complete
                        </span>
                      </div>

                      <div className="p-4">
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload signed ownership declaration
                          </label>
                          <input
                            type="file"
                            onChange={(e) =>
                              handleFileChange(e, "declaration_of_ownership")
                            }
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            accept=".pdf,.doc,.docx"
                          />
                          <p className="text-sm text-gray-500 mt-2">
                            Must include notarized signature and match ownership
                            information from SF-02
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Metering Evidence */}
                    <div className="bg-white rounded-lg mb-4 overflow-hidden">
                      <div className="bg-gray-100 px-4 py-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                        <h3 className="font-medium">Metering Evidence *</h3>
                        <span className="ml-auto px-2 py-1 bg-red-500 text-white text-xs rounded">
                          Required
                        </span>
                      </div>

                      <div className="p-4">
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload meter certification documents
                          </label>
                          <input
                            type="file"
                            onChange={(e) =>
                              handleFileChange(e, "metering_evidence")
                            }
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            accept=".pdf,.doc,.docx"
                          />
                          <p className="text-sm text-gray-500 mt-2">
                            Must include calibration certificates and serial
                            numbers matching SF-02
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Single Line Diagram */}
                    <div className="bg-white rounded-lg mb-4 overflow-hidden">
                      <div className="bg-gray-100 px-4 py-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                        <h3 className="font-medium">Single Line Diagram *</h3>
                        <span className="ml-auto px-2 py-1 bg-red-500 text-white text-xs rounded">
                          Required
                        </span>
                      </div>

                      <div className="p-4">
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload electrical single line diagram
                          </label>
                          <input
                            type="file"
                            onChange={(e) =>
                              handleFileChange(e, "single_line_diagram")
                            }
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            accept=".pdf,.dwg,.dxf"
                          />
                          <p className="text-sm text-gray-500 mt-2">
                            Diagram must show AC capacity matching registered
                            capacity
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Project Photos */}
                    <div className="bg-white rounded-lg mb-4 overflow-hidden">
                      <div className="bg-gray-100 px-4 py-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                        <h3 className="font-medium">Project Photos *</h3>
                        <span className="ml-auto px-2 py-1 bg-red-500 text-white text-xs rounded">
                          Required
                        </span>
                      </div>

                      <div className="p-4">
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload site photos (minimum 3)
                          </label>
                          <input
                            type="file"
                            onChange={(e) =>
                              handleFileChange(e, "project_photos")
                            }
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            accept=".jpg,.jpeg,.png"
                            multiple
                          />
                          <p className="text-sm text-gray-500 mt-2">
                            Include timestamps and geographic landmarks. Max 5
                            files (25MB total)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Additional Documents */}
                    <div className="bg-white rounded-lg overflow-hidden">
                      <div className="bg-gray-100 px-4 py-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                        <h3 className="font-medium">
                          Additional documents and notes
                        </h3>
                        <span className="ml-auto px-2 py-1 bg-gray-500 text-white text-xs rounded">
                          Optional
                        </span>
                      </div>

                      <div className="p-4">
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload supporting documents
                          </label>
                          <input
                            type="file"
                            onChange={(e) =>
                              handleFileChange(e, "additional_notes")
                            }
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            multiple
                          />
                          <p className="text-sm text-gray-500 mt-2">
                            Upload any additional supporting documentation (max
                            10 files)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Submission */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!allSF02ChecklistComplete || loading}
                  className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${
                    !allSF02ChecklistComplete || loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : isEditing ? (
                    "Update Device"
                  ) : (
                    "Register Device"
                  )}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DeviceForm;
