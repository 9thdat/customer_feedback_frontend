import {useState, useEffect, useRef} from "react";
import axios from "../api/axios";

export default function ListFeedback() {
    const [feedbacks, setFeedbacks] = useState([
        {
            name: "",
            email: "",
            message: "",
        }
    ]);
    const originalFeedbacks = useRef(feedbacks);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const searchRef = useRef({
        category: "Name",
        value: "",
    });

    useEffect(() => {
        document.title = "List Of Customer Feedback";

        fetchFeedbacks().then((res) => {
            setFeedbacks(res);
            originalFeedbacks.current = res;
        });
    }, []);

    const fetchFeedbacks = async () => {
        try{
        const res = await axios.get(`/getAllFeedback`);
        return res.data;
        }
        catch (err){
            console.log(err);
            return [];
        }
    }

    const handleChangeSearchCategory = () => {
        searchRef.current.category = searchRef.current.category === "Name" ? "Email" : "Name";
        toggleDropdown();
    }

    const handleSearch = () => {
        if (searchRef.current.value === "") {
            setFeedbacks(originalFeedbacks.current);
        } else {
            setFeedbacks(originalFeedbacks.current.filter((feedback) => {
                if (searchRef.current.category === "Name") {
                    return feedback.name.toLowerCase().includes(searchRef.current.value.toLowerCase());
                } else {
                    return feedback.email.toLowerCase().includes(searchRef.current.value.toLowerCase());
                }
            }));
        }
    }

    return (
        <div className={"px-20 py-20"}>
            <div className={"text-3xl text-center mb-10 "}>
                <header>LIST OF CUSTOMER FEEDBACKS</header>
            </div>

            <div>
                <div className="flex items-start">
                    <label htmlFor="search-dropdown"
                           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                        Your Email
                    </label>
                    <div className="relative">
                        <button
                            id="dropdown-button"
                            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                            type="button"
                            onClick={toggleDropdown}
                        >
                            {searchRef.current.category}
                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        <div
                            id="dropdown"
                            className={`z-10 ${isDropdownOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute left-0 mt-2`}
                        >
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdown-button">
                                <li>
                                    <button
                                        type="button"
                                        className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        onClick={handleChangeSearchCategory}
                                    >
                                        {searchRef.current.category === "Name" ? "Email" : "Name"}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative w-full">
                        <input
                            type="search"
                            id="search-dropdown"
                            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                            placeholder=""
                            onChange={(e) => {
                                searchRef.current.value = e.target.value;
                            }}
                            required
                        />
                        <button
                            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={handleSearch}
                        >
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 20 20">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col overflow-x-auto">
                <div className="sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4">Email</th>
                                    <th scope="col" className="px-6 py-4">Name</th>
                                    <th scope="col" className="px-6 py-4">Feedback</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    feedbacks.map((feedback) => (
                                        <tr key={feedback.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">{feedback.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{feedback.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{feedback.message}</td>
                                        </tr>
                                    ))

                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}