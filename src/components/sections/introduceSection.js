import React from "react"
import tw from "twin.macro"
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24 `
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left text-4xl tracking-tight  sm:leading-none  lg:text-4xl`
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`

export default function IntroduceSection({
  introTitle1,
  introTitle2,
  introDescription,
  introImage,
}) {
  return (
    <section class="lg:relative ">
      <TwoColumn>
        <LeftColumn>
          <span class="block xl:inline text-center">
            {introTitle1 + " "}
            <span class="text-sunset-500">{introTitle2} </span>
          </span>

          <p class="mt-3  text-lg text-gray-500 sm:text-xl md:mt-5 text-left">
            {introDescription}
          </p>
        </LeftColumn>
        <RightColumn></RightColumn>
      </TwoColumn>
    </section>
  )
}
