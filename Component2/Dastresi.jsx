import { useEffect, useState } from "react";

export default function Dastresi() {
  const API = "https://amirvp77.github.io/dastresi-db/db.json";

  const [dastresi, setDastresi] = useState([]);

  const getDastresi = async () => {
    try {
      let res = await fetch(`${API}`);
      let data = await res.json();

      setDastresi(data.dastresi);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDastresi();
  }, []);

  return (
    <>
      <div className="mt-12 md:mt-16 lg:mt-20 w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-10 md:mb-12 lg:mb-16">
          چرا دسترسی رو برای خرید انتخاب کنیم؟
        </h1>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row justify-between text-center">
          {dastresi.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-full lg:w-1/4 px-3 md:px-5"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 object-contain mx-auto mb-5"
              />

              <h2 className="text-lg md:text-xl lg:text-xl font-bold text-gray-600 mb-4">
                {item.name}
              </h2>

              <p className="text-sm md:text-base lg:text-base leading-7 md:leading-8 lg:leading-8 text-gray-800">
                {item.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
