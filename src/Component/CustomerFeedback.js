import React from "react";
import axios from "../api/axios";

export default function CustomerFeedback() {
    // Set title of the page
    document.title = "Customer Feedback";

    // Handle submit form
    const handleSubmit = async () => {
        const code = document.getElementById("hs-feedback-post-comment-code-1").value;
        const name = document.getElementById("hs-feedback-post-comment-name-1").value;
        const email = document.getElementById("hs-feedback-post-comment-email-1").value;
        const feedback = document.getElementById("hs-feedback-post-comment-textarea-1").value;

        // Call submitFeedback function
        const res = await axios.get(`/submitFeedback?token=nthdat09&name=${name}&email=${email}&feedback=${feedback}&code=${code}`);
        if (res.data.status === 'success'){
            alert("Cảm ơn bạn đã phản hồi!");
        }
        else{
            alert(res.data.message);
        }

    }
    return (
        <div className="App">
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="mx-auto max-w-2xl">
                    <div className="text-center">
                        <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
                            Phản hồi
                        </h2>
                    </div>

                    <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700">
                        <form>
                            <div className="mb-4 sm:mb-8">
                                <label htmlFor="hs-feedback-post-comment-code-1"
                                       className="block mb-2 text-sm font-medium dark:text-white">Mã bí mật</label>
                                <input type="text" id="hs-feedback-post-comment-code-1"
                                       className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                       placeholder="Mã bí mật"/>
                            </div>
                            <div className="mb-4 sm:mb-8">
                                <label htmlFor="hs-feedback-post-comment-name-1"
                                       className="block mb-2 text-sm font-medium dark:text-white">Tên của bạn</label>
                                <input type="text" id="hs-feedback-post-comment-name-1"
                                       className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                       placeholder="Tên của bạn"/>
                            </div>

                            <div className="mb-4 sm:mb-8">
                                <label htmlFor="hs-feedback-post-comment-email-1"
                                       className="block mb-2 text-sm font-medium dark:text-white">Email</label>
                                <input type="email" id="hs-feedback-post-comment-email-1"
                                       className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                       placeholder="Địa chỉ email của bạn"/>
                            </div>

                            <div>
                                <label htmlFor="hs-feedback-post-comment-textarea-1"
                                       className="block mb-2 text-sm font-medium dark:text-white">Phản hồi</label>
                                <div className="mt-1">
                                    <textarea id="hs-feedback-post-comment-textarea-1"
                                              name="hs-feedback-post-comment-textarea-1" rows="3"
                                              className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                              placeholder="Để lại phản hồi của bạn tại đây..."></textarea>
                                </div>
                            </div>

                            <div className="mt-6 grid">
                                <button
                                    type="submit"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleSubmit();
                                    }}
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}