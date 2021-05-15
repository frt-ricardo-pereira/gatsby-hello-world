import React from "react"
import { Link } from "gatsby"
import CodingFor from "../images/codingfor.png"
import Layout from "../shared/mainlayout"

export default function Home() {
  return (
    <div class="">
      <Layout>
        <div class="max-w-7xl mx-auto ">
          <main class="lg:relative py-24">
            <div class="mx-auto max-w-7xl w-full text-center ">
              <div class="px-4  sm:px-8 ">
                <div class="">
                  <h1 class="text-4xl   tracking-tight font-extrabold text-gray-900 sm:text-5xl">
                    <span class="block xl:inline text-center">
                      Coding <span class="text-red-700">for integration </span >
                    </span>
                    <span className="block  xl:inline text-sunset-500"></span>
                  </h1>

                  <p class="mt-3  text-lg text-gray-500 sm:text-xl md:mt-5 text-left">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <div class="flex justify-center mt-2">
                <img class=" object-cover   " src={CodingFor} alt=""></img>
                </div>
              </div>
            </div>
          </main>
        </div>

   <p class="text-center  text-lg text-gray-600 ">In collaboration with:</p>    
<div class="bg-red-50  mt-2 opacity-70">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
      <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple"></img>
      </div>
      <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <img class="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage"></img>
      </div>
      <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <img class="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit"></img>
      </div>
      <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
        <img class="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor"></img>
      </div>
      <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
        <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation"></img>
      </div>
    </div>
  </div>
</div>

<div class="bg-gray-50">


<p>About</p>


</div>
<div class="flex justify-center">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <h2 class="inline text-3xl font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl">
      Want product news and updates?
    </h2>
    <p class="inline text-3xl font-extrabold tracking-tight text-indigo-600 sm:block sm:text-4xl">Sign up for our newsletter.</p>
    <form class="mt-8 sm:flex">
      <label for="emailAddress" class="sr-only">Email address</label>
      <input id="emailAddress" name="email" type="email" autocomplete="email" required class="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs  border-2 border-gray-300 rounded-md" placeholder="Enter your email"></input>
      <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
        <button type="submit" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sunset-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Subscribe
        </button>
      </div>
    </form>
  </div>
</div>

      </Layout>
    </div>
  )
}
