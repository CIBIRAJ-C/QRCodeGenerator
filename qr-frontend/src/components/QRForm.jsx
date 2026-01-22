import { useState } from "react";
import axios from "axios";
import  "./QRForm.css";

function QRForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    id: ""
  });

  const [qrImage, setQrImage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
    const API_URL = import.meta.env.VITE_BACKEND_URL;
  const generateQR = async () => {
    const res = await axios.post(
      `${API_URL}/api/qr/generate`,
      formData
    );
    setQrImage(res.data);
  };

  return (
    <div className="qr-container">
      <div className="qr-card">
        <h2>QR Code Generator</h2>

        <input
          className="qr-input"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          className="qr-input"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="qr-input"
          name="id"
          placeholder="ID"
          onChange={handleChange}
        />

        <button className="qr-button" onClick={generateQR}>
          Generate QR
        </button>

        {qrImage && (
          <div className="qr-result">
            <h3>Your QR Code</h3>
            <img
              src={`data:image/png;base64,${qrImage}`}
              alt="QR Code"
            />
          </div>
        )}
      </div>
    </div>
  );
}
;
export default QRForm;
