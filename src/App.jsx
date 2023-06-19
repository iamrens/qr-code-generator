import { useState } from "react";
import qrCode from "qrcode";

function App() {
  const [ url, setUrl ] = useState("");
  const [ qrImage, setQrImage ] = useState("");

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const generateQr = async () => {
    try {
      if (!url.trim()) return;
      const generatedQRCode = await qrCode.toDataURL(url);
      setQrImage(generatedQRCode);
    } catch (error) {
      console.error('Failed to generate QR code', error);
    }
  };

  return (
    <div className="h-screen flex bg-neutral-900">
 
      <div className="w-[250px] flex flex-col text-center mx-auto">
        <h1 className="text-titleDark font-poppins font-bold text-[36px] mt-14">QR Code Generator</h1>
        <input 
          type="text" 
          value={url} 
          onChange={handleChange}
          placeholder="Your url here"
          className="mt-5 rounded-xl px-4 py-2 font-open font-bold outline-red-500" 
        />
        <button 
          onClick={generateQr}
          className="text-titleDark font-poppins font-semibold mt-2"
        >Generate QR Code</button>
        {qrImage && <img src={qrImage} alt="QR Code" className="mt-5" />}
      </div>

    </div>
  );
}

export default App;
