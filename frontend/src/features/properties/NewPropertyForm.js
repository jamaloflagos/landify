import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";

const ImageUploader = () => {
  const [files, setFiles] = useState([]);
  const [propertyData, setPropertyData] = useState({
    name: "",
    type: "",
    city: "",
    location: "",
    price: "",
    details: "",
    status: "",
    facility: {}
  })

  const handleDataChange = (name, value, field = "") => {
    if (name === "facility") {
      setPropertyData(prevData => ({...prevData, [name]: {...prevData.facility, [field]: value}}))
    } else {
      setPropertyData(prevData => ({...prevData, [name]: value}))
    }
  }

  console.log('====================================');
  console.log(propertyData);
  console.log('====================================');

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/png": [], "image/jpeg": [], "image/gif": [] },
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
    },
  });

  return (
    <>
      <section>
        <header>
          <h1>Property Image</h1>
        </header>
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-300 rounded-xl p-6 w-full max-w-3xl mx-auto flex flex-col items-center text-center cursor-pointer hover:border-orange-500 transition-all"
        >
          <input {...getInputProps()} />
          <Upload className="text-orange-500 w-10 h-10" />
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Drop your images here</span>, or{" "}
            <span className="text-orange-500 font-semibold">
              click to browse
            </span>
          </p>
          <p className="text-gray-400 text-sm">
            1600 × 1200 (4:3) recommended. PNG, JPG, and GIF files are allowed.
          </p>

          {files.length > 0 && (
            <div className="mt-4">
              <p className="text-green-600 font-semibold">Files selected:</p>
              <ul className="text-gray-700">
                {files.map((file) => (
                  <li key={file.path}>{file.path}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      <form>
        <h1>Property Informations</h1>
        <div>
          <label htmlFor="name">Property Name</label>
          <input type="text" name="name" id="name" value={propertyData.name} onChange={(e) => handleDataChange(e.target.name, e.target.value)} />
        </div>
        <div>
          <label htmlFor="type">Property Type</label>
          <select id="type" name="type" value={propertyData.type} onChange={(e) => handleDataChange(e.target.name, e.target.value)}>
            <option value="">Select</option>
            <option value="Villa">Villa</option>
          </select>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="text" name="price" id="price" value={propertyData.value} onChange={(e) => handleDataChange(e.target.name, e.target.value)} />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input type="text" name="location" id="location" value={propertyData.location} onChange={(e) => handleDataChange(e.target.name, e.target.value)} />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" value={propertyData.city} onChange={(e) => handleDataChange(e.target.name, e.target.value)} />
        </div>
        <div>
          <label htmlFor="status">Current Status</label>
          <select name="status" id="status" value={propertyData.status} onChange={(e) => handleDataChange(e.target.name, e.target.value)} >
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>
        </div>
        <div>
          <label htmlFor="feet">Square Feet</label>
          <input type="text" name="facility" id="feet" value={propertyData.facility.square_feet} onChange={(e) => handleDataChange(e.target.name, e.target.value, 'square_feet')} />
        </div>
        <div>
          <label htmlFor="bedroom">Bedroom</label>
          <input type="number" name="facility" id="bedroom" value={propertyData.facility.bedroom} onChange={(e) => handleDataChange(e.target.name, e.target.value, 'bedroom')} />
        </div>
        <div>
          <label htmlFor="bathroom">Bathroom</label>
          <input type="number" name="facility" id="bathroom" value={propertyData.facility.bathroom} onChange={(e) => handleDataChange(e.target.name, e.target.value, 'bathroom')} />
        </div>
        <div>
          <label htmlFor="parking_space">Parking Space</label>
          <select name="facility" id="parking_space" value={propertyData.facility.parking_space} onChange={(e) => handleDataChange(e.target.name, e.target.value, 'parking_space')}>
            <option value="Available">Avaliable</option>
            <option value="Not Available">Not Avaliable</option>
          </select>
        </div>
        <div>
          <label htmlFor="details">Property Details</label>
          <textarea name="details" id="details" value={propertyData.details} onChange={(e) => handleDataChange(e.target.name, e.target.value)} ></textarea>
        </div>
      </form>
    </>
  );
};

export default ImageUploader;
