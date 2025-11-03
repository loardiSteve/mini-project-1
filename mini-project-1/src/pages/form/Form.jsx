import { useState } from "react";
import Navbar from "../../components/Navbar";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    job: "",
  });
  const [submittedData, setSubmittedData] = useState({
    name: "",
    job: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      name: formData.name,
      job: formData.job,
    });
    setFormData({
      name: "",
      job: "",
    });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Navbar />
      <h1 className="font-bold text-2xl text-center my-7">Form Diri</h1>
      <div className="flex gap-20 justify-center ">
        <form
          onSubmit={handleSubmit}
          className="w-1/2 h-72 flex flex-col gap-3 border rounded-lg border-amber-100 px-4 py-1.5">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Masukkan Nama Anda"
              onChange={handleChange}
              value={formData.name}
              className="px-4 py-1.5 border border-amber-200 rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="job" className="font-semibold mb-2">
              Pekerjaan
            </label>
            <input
              type="text"
              name="job"
              placeholder="Masukkan Pekerjaan Anda"
              onChange={handleChange}
              value={formData.job}
              className="px-4 py-1.5 border border-amber-200 rounded-lg"
            />
          </div>
          <button
            className="max-w-24 text-white bg-amber-600 rounded-lg px-3 py-1 hover:bg-rose-100 hover:text-black transition-colors duration-200 ease-in-out cursor-pointer font-semibold"
            type="submit">
            Proses
          </button>
        </form>

        <div className=" w-1/2 h-72 flex flex-col gap-3 border rounded-lg border-amber-100 px-4 py-1.5">
          <div>
            <h2 className="font-semibold">Nama Anda :</h2>
            <h2>{submittedData.name}</h2>
          </div>
          <div>
            <h2 className="font-semibold">Pekerjaan Anda :</h2>
            <h2>{submittedData.job}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
