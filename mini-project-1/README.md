# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

what i learn:
props, children, components, useState, eventHandling

Parent menyimpan dua state:
formData → menampung nilai sementara (input yang sedang diketik user).
submittedData → menampung hasil akhir setelah form disubmit.

Parent juga punya dua fungsi:
handleChange → memperbarui formData setiap kali user mengetik.
handleSubmit → menyalin isi formData ke submittedData.

Kedua state dan fungsi itu dikirim ke Child lewat props.

Child bertugas menjalankan dua hal:
Memanggil handleChange saat terjadi onChange agar parent tahu nilai input terbaru.
Memanggil handleSubmit saat form disubmit untuk menyimpan hasil akhir ke parent.
