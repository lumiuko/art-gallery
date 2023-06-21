export default function Location() {
  document.getElementById('app').innerHTML = `
    <header class="relative">
      <picture>
        <source srcset="/desktop/image-map@2x.png 2x" media="(min-width: 1110px)" />
        <source srcset="/tablet/image-map@2x.png 2x, /tablet/image-map.png 1x" media="(min-width: 768px)" />
        <source srcset="/mobile/image-map@2x.png 2x, /mobile/image-map.png 1x" />
        <img src="/mobile/image-map.png" alt="Map" class="w-full" />
      </picture>
      <div class="absolute w-full top-0 md:px-10">
        <div class="max-w-[1110px] mx-auto">
          <a href="/" data-navigo class="inline-block group">
            <span class="flex">
              <span class="bg-gold p-6 group-hover:bg-black transition-colors">
                <img src="/icon-arrow-left.svg" alt="Arrow left" />
              </span>
              <span class="bg-black text-white font-headings font-extrabold uppercase py-6 px-8 text-[1.25rem] leading-[1.5rem] tracking-[3.6px] group-hover:bg-gold transition-colors">
                Back to home
              </span>
            </span>
          </a>
        </div>
      </div>
    </header>
    <main class="bg-black text-white px-4 pt-12 pb-14 md:px-10 md:pt-[5.5rem] md:pb-20 xl:pt-[6.5rem] xl:pb-32">
      <div class="max-w-[1110px] mx-auto flex flex-col justify-between items-start gap-12 md:flex-row">
        <h1 class="font-headings uppercase font-black text-[3.125rem] leading-[2.8125rem] md:text-[3.4375rem] md:leading-[3.125rem] xl:text-l xl:leading-l xl:max-w-[350px]">
          Our location
        </h1>
        <div class="md:max-w-[400px] xl:max-w-[540px]">
          <h2 class="font-headings uppercase font-black text-[2rem] leading-[2rem] text-gold xl:text-s xl:leading-s">99 King Street</h2>
          <ul class="mt-5 xl:mt-6">
            <li>Newport</li>
            <li>RI 02840</li>
            <li>United States of America</li>
          </ul>
          <p class="mt-5 xl:mt-8">Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.</p>
        </div>
      </div>
    </main>
    <footer class="bg-gold text-black px-8 py-12 md:px-10 md:py-14 xl:py-20">
      <div class="max-w-[1110px] mx-auto flex flex-col gap-[2.375rem] md:flex-row md:items-start md:gap-0">
        <img src="/logo-dark.svg" alt="Logo" class="max-w-[110px] xl:max-w-[160px]" />
        <p class="text-[1rem] leading-[1.625rem] md:max-w-[280px] md:ml-16 xl:max-w-[430px] xl:text-body-s xl:leading-body-s xl:ml-[8.75rem]">The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
        <div class="flex items-center gap-5 md:ml-auto">
          <a href="#" aria-label="Facebook" class="hover:text-white transition-colors">
            <i class="fa-brands fa-square-facebook" aria-hidden="true"></i>
          </a>
          <a href="#" aria-label="Instagram" class="hover:text-white transition-colors">
            <i class="fa-brands fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="#" aria-label="Twitter" class="hover:text-white transition-colors">
            <i class="fa-brands fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </footer>
  `
}
