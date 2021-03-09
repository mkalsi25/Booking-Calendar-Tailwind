import React from "react";

export default function BookingCalendar({ result, load }) {
  return (
    <div className="h-screen bg-gray-50 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-7 gap-2 p-2 col-start-1 row-start-1 relative z-0 overflow-y-auto">
      {result[0].availability.map((avails, key) => {
        return (
          <>
            {new Date(avails.date).getMonth() === load && (
              <div
                key={key}
                className={
                  avails.bookable
                    ? "h-28 sm:h-44 bg-gradient-to-tr from-yellow-600 to-red-900 text-white flex items-stretch justify-center border border-white transform duration-200 ease-in-out scale-100 hover:scale-105"
                    : "h-28 sm:h-44 bg-gray-400 flex items-stretch justify-center border border-gray-300 text-white"
                }
              >
                <div className="self-start relative h-10 w-10 flex items-center justify-center -left-2 top-2 p-4 border-r border-b">
                  <span className="text-xl font-medium text-center">
                    {new Date(avails.date).getDate()}
                  </span>
                </div>
                <div className="self-end">
                  {avails.bookable === true && (
                    <p className="text-mobile md:text-xs font-medium text-white uppercase tracking-widest text-center">
                      Booking Available
                    </p>
                  )}
                  <div className="text-4xl sm:text-6xl font-bold text-white opacity-30 text-center">
                    {new Date(avails.date).getUTCFullYear()}
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}
