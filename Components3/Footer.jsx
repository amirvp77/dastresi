export default function Footer() {
  return (
    <footer className="mt-6 md:mt-16 lg:mt-20 w-full bg-base-200 text-base-content">
      <div className="flex flex-col md:flex-row lg:flex-row h-auto md:h-auto lg:h-25 w-full items-center justify-between gap-4 md:gap-5 lg:gap-10 bg-gray-200 p-5 md:p-6 lg:p-10 text-gray-600 text-center md:text-right">
        <span>021-33902646</span>

        <span className="text-sm md:text-sm lg:text-base">
          شنبه تا چهارشنبه از ساعت 10 صبح الی ساعت 18، پنجشنبه‌ها از 10 صبح الی
          ساعت 16
        </span>

        <span className="text-sm md:text-sm lg:text-base">
          تهران - میدان امام خمینی - پاساژ لباف - همکف - پلاک 3 - فروشگاه بدیع
        </span>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer rounded-2xl w-20 md:w-20 lg:w-15 h-10 bg-amber-50 shrink-0"
        >
          برو بالا
        </button>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row h-auto lg:h-100 w-full justify-between gap-20 bg-white p-6 md:p-8 lg:p-10 items-center lg:items-center">
        <div className="w-full md:w-full lg:w-1/4 flex justify-center lg:justify-start">
          <img src="logo.png" alt="logo" className="w-32 md:w-36 lg:w-40" />
        </div>

        <div className="flex w-full md:w-full lg:w-2/4 flex-col gap-5 text-center md:text-right">
          <h2 className="text-lg md:text-xl font-bold">
            فروشگاه اینترنتی دسترسی
          </h2>

          <p className="text-sm leading-7 md:leading-8 text-gray-600">
            فروشگاه دسترسی فعالیت خود را از سال 1389 به صورت فروش فیزیکی کالا در
            حوزه لوازم جانبی کامپیوتر و موبایل در تهران شروع کرد و از سال 1398
            از طریق پیج اینستاگرام وارد فروش آنلاین شد و به خاطر ارائه کالای
            اصلی و مشاوره‌های دقیق در بازه بسیار کوتاهی توانست اعتماد بسیاری از
            مشتریانش را جلب کند و سرانجام در سال 1399 فروش از طریق سایت را هم به
            فعالیت‌های خود اضافه کرد تا اینکه بتواند با بررسی دقیق کالاها انتخاب
            صحیح شما را به ارمغان آورد. و امروز دسترسی فعالیت خود را در زمینه
            آداپتور موبایل، کابل شارژ، پاوربانک، ساعت هوشمند، هندزفری و هدست،
            لوازم گیمینگ، باتری و شارژر، لوازم شبکه، تجهیزات ذخیره‌سازی، گیرنده
            دیجیتال و هزاران گجت جذاب ادامه می‌دهد.
          </p>
        </div>

        <div className="flex w-full md:w-full lg:w-1/4 flex-col gap-5 text-center md:text-right">
          <h3 className="text-lg font-bold">دسترسی سریع</h3>

          <nav>
            <ul className="flex flex-col gap-3 text-sm text-gray-600">
              <li className="cursor-pointer hover:text-orange-500">
                باشگاه مشتریان
              </li>
              <li className="cursor-pointer hover:text-orange-500">
                سوالات متداول
              </li>
              <li className="cursor-pointer hover:text-orange-500">بلاگ</li>
              <li className="cursor-pointer hover:text-orange-500">
                شرایط و قوانین
              </li>
              <li className="cursor-pointer hover:text-orange-500">
                ارتباط ما
              </li>
              <li className="cursor-pointer hover:text-orange-500">
                درباره ما
              </li>
            </ul>
          </nav>
        </div>

        <div className="w-full md:w-full lg:w-1/4 flex justify-center lg:ml-30  lg:justify-end">
          <img src="3.png" alt="لوگو" className="w-22 md:w-26 lg:w-35 " />
        </div>
      </div>

      <div className="min-h-12.5 w-full bg-blue-700 p-3 text-white text-center text-xs md:text-sm">
        <p>
          تمامی حقوق این سایت محفوظ و متعلق به فروشگاه اینترنتی دسترسی می باشد
        </p>
      </div>
    </footer>
  );
}
