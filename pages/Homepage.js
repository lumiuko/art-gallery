export default function Homepage() {
  document.getElementById('app').innerHTML = `
    <header class="relative before:hidden xl:before:block before:top-0 before:left-0 before:w-1/2 before:absolute before:h-full before:bg-black">
      <div class="xl:max-w-[1110px] xl:mx-auto flex flex-col md:flex-row md:items-center xl:items-start">
        <h1 class="hidden xl:block text-gradient mr-[-10.5rem] relative z-10 text-white uppercase font-headings font-black text-xl leading-xl mt-[11.875rem]">
          <span>Modern</span>
          <span class="block">art gallery</span>
        </h1>
        <picture class="shrink-0 relative">
          <source srcset="/desktop/image-hero@2x.jpg 2x" media="(min-width: 1110px)" />
          <source srcset="/tablet/image-hero@2x.jpg 2x, /tablet/image-hero.jpg 1x" media="(min-width: 768px)" />
          <source srcset="/mobile/image-hero@2x.jpg 2x, /mobile/image-hero.jpg 1x" />
          <img src="/mobile/image-hero.jpg" class="w-full" alt="Gallery" />
        </picture>
        <div class="relative pt-8 px-4 md:px-0 md:max-w-[340px] md:-ml-12 md:pt-0 xl:max-w-[350px] xl:mt-[11.875rem] xl:-ml-16">
          <h1 class="uppercase font-headings font-black text-m leading-[3.5rem] text-black md:text-l md:leading-[4.0625rem] xl:hidden">
            <span>Modern</span>
            <span class="block">art gallery</span>
          </h1>
          <p class="mt-8 md:mt-12 xl:mt-0">The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</p>
          <a href="/location" data-navigo class="inline-block mt-8 group md:mt-12 xl:mt-16">
            <span class="flex">
              <span class="bg-black text-white font-headings font-extrabold uppercase py-6 px-8 text-[1.25rem] leading-[1.5rem] tracking-[3.6px] group-hover:bg-gold transition-colors">
                Our location
              </span>
              <span class="bg-gold p-6 group-hover:bg-black transition-colors">
                <img src="/icon-arrow-right.svg" alt="Arrow right" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </header>
    <main class="my-[7.5rem] px-4 md:px-10 xl:my-[11.25rem]">
      <div class="max-w-[1110px] mx-auto">
        <section class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-[4.25rem]">
          <picture class="shrink-0">
            <source srcset="/desktop/image-grid-1@2x.jpg 2x" media="(min-width: 1110px)" />
            <source srcset="/tablet/image-grid-1@2x.jpg 2x, /tablet/image-grid-1.jpg 1x" media="(min-width: 768px)" />
            <source srcset="/mobile/image-grid-1@2x.jpg 2x, /mobile/image-grid-1.jpg 1x" />
            <img src="/mobile/image-grid-1.jpg" class="w-full" alt="Grid image 1" />
          </picture>
          <div class="md:-order-1 xl:max-w-[350px]">
            <h2 class="font-headings font-black text-[3.125rem] leading-[2.875rem] text-black uppercase xl:text-m xl:leading-m">Your Day at <span class="xl:block">the Gallery</span></h2>
            <p class="mt-5 md:mt-6 xl:mt-8">Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
          </div>
        </section>
        <div class="mt-8 grid gap-4 md:mt-3 md:gap-3 md:grid-cols-[58%_auto] xl:mt-[1.875rem] xl:gap-[1.875rem] xl:grid-cols-[auto_445px]">
          <picture class="md:row-span-2">
            <source srcset="/desktop/image-grid-2@2x.jpg 2x" media="(min-width: 1110px)" />
            <source srcset="/tablet/image-grid-2.jpg 1x, /tablet/image-grid-2@2x.jpg 2x" media="(min-width: 768px)" />
            <source srcset="/mobile/image-grid-2.jpg 1x, /mobile/image-grid-2@2x.jpg 2x" />
            <img src="/mobile/image-grid-2.jpg" alt="Grid image 2" class="w-full h-full object-cover" />
          </picture>
          <picture>
            <source srcset="/desktop/image-grid-3@2x.jpg 2x" media="(min-width: 1110px)" />
            <source srcset="/tablet/image-grid-3.jpg 1x, /tablet/image-grid-3@2x.jpg 2x" media="(min-width: 768px)" />
            <source srcset="/mobile/image-grid-3.jpg 1x, /mobile/image-grid-3@2x.jpg 2x" />
            <img src="/mobile/image-grid-3.jpg" alt="Grid image 3" class="w-full h-full object-cover" />
          </picture>
          <section class="px-6 py-12 bg-black text-white md:py-[5.25rem] xl:px-12 xl:py-16">
            <h2 class="font-headings font-black uppercase text-[3.125rem] leading-[2.875rem] xl:text-m xl:leading-m">Come & be inspired</h2>
            <p class="mt-6 xl:mt-8">We’re excited to welcome you to our gallery and see how our collections influence you.</p>
          </section>
        </div>
      </div>
    </main>
    <footer class="bg-black text-white px-8 py-12 md:px-10 md:py-14 xl:py-20">
      <div class="max-w-[1110px] mx-auto flex flex-col gap-[2.375rem] md:flex-row md:items-start md:gap-0">
        <img src="/logo-light.svg" alt="Logo" class="max-w-[110px] xl:max-w-[160px]" />
        <p class="text-[1rem] leading-[1.625rem] md:max-w-[280px] md:ml-16 xl:max-w-[430px] xl:text-body-s xl:leading-body-s xl:ml-[8.75rem]">The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
        <div class="flex items-center gap-5 md:ml-auto">
          <a href="#" aria-label="Facebook" class="hover:text-gold transition-colors">
            <i class="fa-brands fa-square-facebook" aria-hidden="true"></i>
          </a>
          <a href="#" aria-label="Instagram" class="hover:text-gold transition-colors">
            <i class="fa-brands fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="#" aria-label="Twitter" class="hover:text-gold transition-colors">
            <i class="fa-brands fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </footer>
  `
}
