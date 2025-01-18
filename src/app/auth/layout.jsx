import Image from "next/image";
import Link from "next/link";

export default function AuthPage({children}) {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-2 w-full">
        <div className="sm:mx-auto sm:w-full sm:max-w-md mt-10">
        <Link href="/">
            <Image 
              priority
              className="mx-auto h-auto w-auto "
              src="/emprende horizontal blanco.png"
              alt="compañia"
              width={200}
              height={50}
            />
          </Link>
        </div>

        <div className="mt-8 mx-3 sm:mx-auto w-[95%] sm:max-w-md">
          <div className=" bg-nav-800 py-8 px-4 rounded-xl sm:px-10 h-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}