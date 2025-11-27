import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../../components/Navbar";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]); // source of truth
  const [query, setQuery] = useState(""); // controlled input
  const [debouncedQuery, setDebouncedQuery] = useState(""); // debounce output
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debounceRef = useRef(null); // holds timeout id
  const controllerRef = useRef(null); // holds current AbortController (for network)
  const fetchIdRef = useRef(0); // monotonic id (defense-in-depth)

  const handleChange = (value) => {
    setQuery(value);
  };

  useEffect(() => {
    const controller = new AbortController();
    controllerRef.current = controller;
    let didCancel = false;

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/products.json", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("gagal mengambil data");
        const data = await res.json();
        if (didCancel) return;
        setAllProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        if (err?.name === "AbortError") return;
        if (!didCancel) setError(err?.message ?? String(err));
      } finally {
        if (!didCancel) setLoading(false);
      }
    };

    load();

    return () => {
      didCancel = true;
      controller.abort();
    };
  }, []);

  useEffect(() => {
    // clear previous timer
    clearTimeout(debounceRef.current);

    // quick path: empty query -> reset debouncedQuery quickly
    if (!query.trim()) {
      setDebouncedQuery("");
      return () => {}; // nothing to clear (but keep pattern)
    }

    // schedule debounce
    debounceRef.current = setTimeout(() => {
      setDebouncedQuery(query);
    }, 2000);

    return () => clearTimeout(debounceRef.current);
  }, [query]);

  const filtered = useMemo(() => {
    if (!debouncedQuery) return allProducts;
    const q = debouncedQuery.trim().toLowerCase();
    return allProducts.filter((p) =>
      (p.name ?? "").toString().toLowerCase().includes(q)
    );
  }, [allProducts, debouncedQuery]);

  const handleSearchButton = () => {
    setDebouncedQuery(query);
  };

  if (loading) return <p>loading...</p>;
  if (error) return <p>error : {error}</p>;

  return (
    <div className="max-w-5xl mx-auto">
      <Navbar />
      <Search
        data={allProducts}
        onChange={handleChange}
        onSearch={handleSearchButton}
        inputUserValue={query}
      />
      <div className="w-fit mx-auto mt-4">
        {query ? <p>kata pencarian : {query}</p> : null}
      </div>
      <div className=" py-6">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <div key={item.id}>
              <h1>{item.name}</h1>
            </div>
          ))
        ) : (
          <p>data tidak ditemukan</p>
        )}
      </div>
    </div>
  );
};

const Search = ({ onChange, onSearch, inputUserValue }) => {
  const handleChange = (e) => {
    // console.log(e.target.value);
    onChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputUserValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center gap-2 max-w-3xl mx-auto mt-5">
      <input
        type="text"
        value={inputUserValue}
        placeholder="masukkan kata kunci"
        className="w-3/4 px-2 py-0.5 border border-amber-300 rounded-lg"
        onChange={handleChange}
      />
      <button
        className="px-3 py-0.5 rounded-2xl bg-amber-300 hover:bg-amber-700 cursor-pointer"
        type="submit">
        Search
      </button>
    </form>
  );
};

export default Products;
