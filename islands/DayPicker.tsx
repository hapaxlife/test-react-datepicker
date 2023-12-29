import DatePicker, { registerLocale } from "react-datepicker";
import { useState } from "preact/compat";
import { format } from "date-fns"
import fr from "date-fns/locale/fr"; // the locale you want
registerLocale("fr-FR", fr); // register it with the name you want

// const MyCastedDatePicker = DatePicker as any

export function Example() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setStartDate(e);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
    <form class="space-y-4 md:space-y-6">
    <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mon email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="nom@compagnie.com"
                  />
                </div>
               
 <DatePicker
      dateFormat="dd/MM/yyyy"
      locale="fr-FR"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
    />
   
    <DatePicker placeholderText="Click to select a date" 
    className="peer block w-full p-3 text-gray-600 bg-gray-100 border border-r-0 focus:border-red-400 focus:bg-white focus:outline-none focus:ring-0 appearance-none rounded-tr-none rounded-br-none rounded transition-colors duration-300"
    />

    <button  onClick={handleClick}
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        {format(startDate, "dd-MM-yyyy")}
      </button>
      {isOpen && (
        <DatePicker selected={startDate} onChange={handleChange} inline />
      )}
    </form>
    
    </>
   
  );
}
