import { Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left */}
        <div className="">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-400 to-orange-400 rounded-lg text-white">
              Harry&apos;s{" "}
            </span>
            Blog
          </Link>
          <p className="mt-5">
            Welcome to my blog! This is the page to sign up which grants access
            to more features across the site!
          </p>
        </div>
        {/* right */}

        <div className="">
          <form className="">
            <Label value="Your username" />
            <TextInput type="text" placeholder="Username" id="username" />
          </form>
        </div>
      </div>
    </div>
  );
}
