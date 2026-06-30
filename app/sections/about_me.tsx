import { Badge } from "@/components/retroui/Badge";
import { Text } from "@/components/retroui/Text";
import { Button } from "@base-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row w-full h-full items-center justify-center p-6 gap-12 text-center md:text-left border-black border-4 bg-background rounded-md">



        {/* PHOTO WITH FRAME & FLOATING ELEMENTS CONTAINER */}
        <div className="relative w-full max-w-[400px] h-[400px] flex items-center justify-center">

          {/* THE MAIN BG CARD CONTAINER */}
          <div className="relative w-[340px] h-[340px] bg-accent border-4 border-black rounded-[40px] overflow-hidden flex items-end justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">

            {/* ACTIVE IMAGE WORKSPACE */}
            <div className="relative w-full h-[110%] top-6">

              {/* BLACK SILHOUETTE SHADOW LAYER */}
              <div className="absolute inset-0 translate-x-2.5 translate-y-1.5 filter brightness-0 z-10 opacity-90">
                <Image
                  src="/avatar.png"
                  alt=""
                  fill
                  sizes="340px"
                  className="object-contain object-bottom"
                  priority
                />
              </div>

              {/* MAIN GRAYSCALE FOREGROUND IMAGE LAYER */}
              <div className="absolute inset-0 filter grayscale z-20">
                <Image
                  src="/avatar.png"
                  alt="Developer Profile"
                  fill
                  sizes="340px"
                  className="object-contain object-bottom"
                  priority
                />
              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  )

}
