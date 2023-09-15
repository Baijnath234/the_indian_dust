import { useEffect, useState } from "react";
import { words } from "../data/data";

interface SearchProps {
  open: boolean;
  onClose: () => void;
}

const SearchModal = ({ open, onClose }: SearchProps) => {
  const [activeSearch, setActiveSearch] = useState([]);

  console.log(activeSearch, "active");

  const handleSearch = (e: any) => {
    const searchTerm = e.target.value;
    if (searchTerm === "") {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(
      words.filter((word) => word.includes(searchTerm)).slice(0, 8) as any
    );
  };

  return (
    <section>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-70">
            <div style={{float:'right', padding:'20px', fontSize:'30px', cursor:'pointer'}} onClick={onClose}>X</div>
          </div>
          <div className="relative w-full max-w-lg transform px-4 transition-all opacity-100 scale-100 z-10">
            <div
              className="overflow-hidden rounded-lg bg-white shadow-md"
              id="headlessui-dialog-panel-6"
              data-headlessui-state="open"
            >
              <div className="relative">
                <input
                  type="text"
                  className="block w-full appearance-none bg-transparent py-4 pl-4 pr-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6"
                  placeholder="Find anything..."
                  aria-label="Search components"
                  id="headlessui-combobox-input-7"
                  role="combobox"
                  aria-expanded="false"
                  aria-autocomplete="list"
                  data-headlessui-state
                  onChange={handleSearch}
                />
                <svg
                  className="pointer-events-none absolute right-4 top-4 h-6 w-6 fill-slate-400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
                </svg>

                {activeSearch.length > 0 && (
                  <div style={{ color: "black", padding: "10px", gap: "2px" }}>
                    {activeSearch.map((result, index: number) => (
                      <div
                        style={{ borderBottom: "1px solid lightgrey" }}
                        key={index}
                      >
                        {result}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SearchModal;
