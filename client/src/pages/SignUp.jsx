import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="">
        {/* left */}
        <div className="">
          <Link
            to="/"
            className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-400 to-orange-400 rounded-lg text-white">
              Harry&apos;s{" "}
            </span>
            Blog
          </Link>
        </div>
        {/* right */}
        <div className=""></div>
      </div>
    </div>
  );
}
