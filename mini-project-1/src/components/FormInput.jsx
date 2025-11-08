import React, { useCallback } from "react";

const InputField = React.memo(function InputField({
  onChange,
  value,
  name,
  id,
  label,
  type = "text",
  required = "false",
}) {
  // child tidak perlu mengirim event ke parent; kirim (name, value) langsung.
  const handleChange = (e) => onChange(name, e.target.value);

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-semibold mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
        required={required}
        aria-label={label}
        className="px-4 py-1.5 border border-amber-200 rounded-lg"
      />
    </div>
  );
});

const FormInput = ({ onChange, onSubmit, formData }) => {
  // stabilkan handler dengan useCallback agar InputField yang di-memo tidak rerender tanpa perlu
  const handleChange = useCallback(
    (fieldName, value) => {
      onChange(fieldName, value);
    },
    [onChange]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-1/2 h-72 flex flex-col gap-3 border rounded-lg border-amber-100 px-4 py-1.5">
        <InputField
          id="nama"
          name="nama"
          label="Nama" //menambahkan aksebilitas
          placeholder="Masukkan Nama Anda"
          onChange={handleChange}
          value={formData.nama}
          required
        />
        <InputField
          id="job"
          name="job"
          label="Job"
          placeholder="Masukkan Pekerjaan Anda"
          onChange={handleChange}
          value={formData.job}
          required
        />
        <button
          className="max-w-24 text-white bg-amber-600 rounded-lg px-3 py-1 hover:bg-rose-100 hover:text-black transition-colors duration-200 ease-in-out cursor-pointer font-semibold"
          type="submit">
          Proses
        </button>
      </form>
    </>
  );
};

export default React.memo(FormInput);
