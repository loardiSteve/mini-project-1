const FormInput = ({ onChange, onSubmit, formData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value); //kirim nilai input user ke parent
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-1/2 h-72 flex flex-col gap-3 border rounded-lg border-amber-100 px-4 py-1.5">
        <div className="flex flex-col">
          <label htmlFor="nama" className="font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            name="nama"
            placeholder="Masukkan Nama Anda"
            onChange={handleChange}
            value={formData.nama}
            required
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
            required
            className="px-4 py-1.5 border border-amber-200 rounded-lg"
          />
        </div>
        <button
          className="max-w-24 text-white bg-amber-600 rounded-lg px-3 py-1 hover:bg-rose-100 hover:text-black transition-colors duration-200 ease-in-out cursor-pointer font-semibold"
          type="submit">
          Proses
        </button>
      </form>
    </>
  );
};

export default FormInput;
