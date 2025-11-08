import { useCallback, useState } from "react";
import Navbar from "../../components/Navbar";
import FormInput from "../../components/FormInput";

function Result({ data }) {
  return (
    <div className=" w-1/2 h-72 flex flex-col gap-3 border rounded-lg border-amber-100 px-4 py-1.5">
      <div>
        <h2 className="font-semibold">Nama Anda :</h2>
        <h2>{data.nama}</h2>
      </div>
      <div>
        <h2 className="font-semibold">Jumlah Karakter Nama anda:</h2>
        <h2>{data.nama.split("").length}</h2>
      </div>
      <div>
        <h2 className="font-semibold">Pekerjaan Anda :</h2>
        <h2>{data.job}</h2>
      </div>
    </div>
  );
}

const Form = () => {
  // State untuk menampung nilai handleChange - sementara
  const [formData, setFormData] = useState({
    nama: "",
    job: "",
  });

  //State untuk menampung nilai hasil
  const [submittedData, setSubmittedData] = useState({
    nama: "",
    job: "",
  });

  //Fungsi untuk mengupdate nilai di formData berdasarkan nilai yang diinput oleh user di komponen child
  const handleChange = useCallback(
    (field, value) => {
      setFormData({
        ...formData,
        [field]: value,
      });
    },
    [formData]
  );

  //fungsi utk memindahkan nilai di state sementara ke state hasil akhir
  const handleSubmit = () => {
    setSubmittedData(formData);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Navbar />
      <h1 className="font-bold text-2xl text-center my-7">Form Diri</h1>
      <div className="flex gap-20 justify-center ">
        <FormInput
          onSubmit={handleSubmit}
          onChange={handleChange}
          formData={formData}
          className="w-1/2 h-72 flex flex-col gap-3 border rounded-lg border-amber-100 px-4 py-1.5"></FormInput>
        <Result data={submittedData} />
        <button
          onDoubleClick={() => alert("mantap")}
          className="max-w-24 text-white bg-amber-600 rounded-lg px-3 py-1 hover:bg-rose-100 hover:text-black transition-colors duration-200 ease-in-out cursor-pointer font-semibold">
          Klik dua kali
        </button>
      </div>
    </div>
  );
};

export default Form;
