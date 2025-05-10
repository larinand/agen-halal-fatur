import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet?",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
  },
  {
    id: 2,
    question: "Quisque efficitur egestas arcu?",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
  },
  {
    id: 3,
    question: "Nunc lacinia placerat arcu?",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
  },
  {
    id: 4,
    question: "Vestibulum ante ipsum primis?",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
  },
  {
    id: 5,
    question: "Fusce convallis lacus id risus tincidunt?",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
  },
  {
    id: 6,
    question: "Phasellus lacinia velit a feugiat dapibus?",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
  },
  {
    id: 7,
    question: "Curabitur at massa eget justo commodo?",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
  },
  {
    id: 8,
    question: "Aenean facilisis sem vel libero dapibus?",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
  },
];

export default function PostTest() {
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 4;
  const indexOfLast = currentPage * questionsPerPage;
  const indexOfFirst = indexOfLast - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirst, indexOfLast);
  return (
    <div className="w-full lg:ps-64">
      <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
        {currentQuestions.map((q, index) => (
          <div
            key={q.id}
            className="w-full max-w-full sm:mx-0 bg-white border border-gray-200 rounded-xl shadow-sm my-4 p-4"
          >
            <h3 className="font-semibold mb-2 text-left">
              {indexOfFirst + index + 1}. {q.question}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {q.options.map((opt, i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={opt}
                    className="form-radio text-blue-500"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        {/* Pagination */}
        <div className="flex justify-center mt-6">
          {[1, 2].map((page) => (
            <div
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded cursor-pointer ${
                page === currentPage
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {page}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
