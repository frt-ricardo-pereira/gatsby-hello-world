import React from "react"


export default function IntroduceSection({
  introTitle1,
  introTitle2,
  introDescription,
  introImage,
}) {
  return (
    <section class="lg:relative ">
     
          <span class="block xl:inline text-center">
            {introTitle1 + " "}
            <span class="text-sunset-500">{introTitle2} </span>
          </span>

          <p class="mt-3  text-lg text-gray-500 sm:text-xl md:mt-5 text-left">
            {introDescription}
          </p>
   
  
    </section>
  )
}
