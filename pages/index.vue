<script setup>
// f9a8f2a4505f190d2530a741d5d7aa67

const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];

const scrollContainerRef = ref(null);

const scroll = (direction) => {
  const scrollAmount = 300;
  const container = scrollContainerRef.value;
  if (container) {
    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }
};

const weather = ref({
  source: "ow",
  timezone: "Europe/Zagreb",
  current: {
    icon: "cloudy",
    summary: "pochmurno z przejaśnieniami",
    temp: 13,
    feelsLike: 13,
    cloudCover: 62,
    percipitation: 0,
    windSpeed: 3.18,
    windDir: 33,
    humidity: 74,
    visibility: 10,
    pressure: 1005,
  },
  nextHours: [
    {
      hour: "16:00",
      temp: 13,
      summary: "pochmurno z przejaśnieniami",
      icon: "cloudy",
    },
    {
      hour: "17:00",
      temp: 13,
      summary: "pochmurno z przejaśnieniami",
      icon: "cloudy",
    },
    {
      hour: "18:00",
      temp: 13,
      summary: "pochmurno z przejaśnieniami",
      icon: "cloudy",
    },
    {
      hour: "19:00",
      temp: 12,
      summary: "pochmurno z przejaśnieniami",
      icon: "cloudy",
    },
    {
      hour: "20:00",
      temp: 12,
      summary: "rozproszone chmury",
      icon: "cloudy",
    },
    {
      hour: "21:00",
      temp: 11,
      summary: "rozproszone chmury",
      icon: "cloudy",
    },
    {
      hour: "22:00",
      temp: 10,
      summary: "rozproszone chmury",
      icon: "cloudy",
    },
    {
      hour: "23:00",
      temp: 10,
      summary: "pochmurno z przejaśnieniami",
      icon: "cloudy",
    },
    {
      hour: "00:00",
      temp: 10,
      summary: "pochmurno z przejaśnieniami",
      icon: "cloudy",
    },
    {
      hour: "01:00",
      temp: 10,
      summary: "pochmurno z przejaśnieniami",
      icon: "cloudy",
    },
    {
      hour: "02:00",
      temp: 10,
      summary: "całkowite zachmurzenie",
      icon: "cloudy",
    },
    {
      hour: "03:00",
      temp: 10,
      summary: "całkowite zachmurzenie",
      icon: "cloudy",
    },
    {
      hour: "04:00",
      temp: 10,
      summary: "całkowite zachmurzenie",
      icon: "cloudy",
    },
    {
      hour: "05:00",
      temp: 10,
      summary: "całkowite zachmurzenie",
      icon: "cloudy",
    },
    {
      hour: "06:00",
      temp: 10,
      summary: "całkowite zachmurzenie",
      icon: "cloudy",
    },
    {
      hour: "07:00",
      temp: 9,
      summary: "całkowite zachmurzenie",
      icon: "cloudy",
    },
    {
      hour: "08:00",
      temp: 10,
      summary: "całkowite zachmurzenie",
      icon: "cloudy",
    },
    {
      hour: "09:00",
      temp: 11,
      summary: "całkowite zachmurzenie",
      icon: "cloudy",
    },
    {
      hour: "10:00",
      temp: 12,
      summary: "całkowite zachmurzenie",
      icon: "cloudy",
    },
    {
      hour: "11:00",
      temp: 13,
      summary: "całkowite zachmurzenie",
      icon: "cloudy",
    },
    {
      hour: "12:00",
      temp: 14,
      summary: "całkowite zachmurzenie",
      icon: "cloudy",
    },
    {
      hour: "13:00",
      temp: 14,
      summary: "całkowite zachmurzenie",
      icon: "cloudy",
    },
    {
      hour: "14:00",
      temp: 14,
      summary: "pochmurno z przejaśnieniami",
      icon: "cloudy",
    },
    {
      hour: "15:00",
      temp: 14,
      summary: "pochmurno z przejaśnieniami",
      icon: "cloudy",
    },
  ],
  forecast: [
    {
      date: 1707735600,
      maxTemp: 13,
      minTemp: 10,
      sunrise: "07:01",
      sunset: "17:21",
      summary: "słabe opady deszczu",
      windSpeed: 3.28,
      windDir: 99,
      percipitation: 0.47,
      humidity: 70,
      pressure: 1004,
      cloudCover: 100,
      dewPoint: 7,
      chancePrecipitation: 72,
      chanceRain: 0,
      chanceSnow: 0,
      chanceThunder: 0,
      chanceSleet: 0,
      icon: "rain",
      day: "poniedziałek",
      dayShort: "pon",
    },
    {
      date: 1707822000,
      maxTemp: 14,
      minTemp: 9,
      sunrise: "07:00",
      sunset: "17:22",
      summary: "całkowite zachmurzenie",
      windSpeed: 8.56,
      windDir: 21,
      percipitation: 0,
      humidity: 57,
      pressure: 1016,
      cloudCover: 100,
      dewPoint: 5,
      chancePrecipitation: 33,
      chanceRain: 0,
      chanceSnow: 0,
      chanceThunder: 0,
      chanceSleet: 0,
      icon: "cloudy",
      day: "wtorek",
      dayShort: "wt",
    },
    {
      date: 1707908400,
      maxTemp: 13,
      minTemp: 8,
      sunrise: "06:58",
      sunset: "17:24",
      summary: "pochmurno z przejaśnieniami",
      windSpeed: 8.23,
      windDir: 4,
      percipitation: 0,
      humidity: 47,
      pressure: 1024,
      cloudCover: 84,
      dewPoint: 1,
      chancePrecipitation: 0,
      chanceRain: 0,
      chanceSnow: 0,
      chanceThunder: 0,
      chanceSleet: 0,
      icon: "cloudy",
      day: "środa",
      dayShort: "śr",
    },
    {
      date: 1707994800,
      maxTemp: 14,
      minTemp: 8,
      sunrise: "06:57",
      sunset: "17:25",
      summary: "lekkie zachmurzenie",
      windSpeed: 4.43,
      windDir: 17,
      percipitation: 0,
      humidity: 54,
      pressure: 1022,
      cloudCover: 12,
      dewPoint: 4,
      chancePrecipitation: 0,
      chanceRain: 0,
      chanceSnow: 0,
      chanceThunder: 0,
      chanceSleet: 0,
      icon: "partly-cloudy-day",
      day: "czwartek",
      dayShort: "czw",
    },
    {
      date: 1708081200,
      maxTemp: 14,
      minTemp: 11,
      sunrise: "06:56",
      sunset: "17:27",
      summary: "pochmurno z przejaśnieniami",
      windSpeed: 3.18,
      windDir: 299,
      percipitation: 0,
      humidity: 60,
      pressure: 1024,
      cloudCover: 84,
      dewPoint: 6,
      chancePrecipitation: 0,
      chanceRain: 0,
      chanceSnow: 0,
      chanceThunder: 0,
      chanceSleet: 0,
      icon: "cloudy",
      day: "piątek",
      dayShort: "pt",
    },
    {
      date: 1708167600,
      maxTemp: 15,
      minTemp: 11,
      sunrise: "06:54",
      sunset: "17:28",
      summary: "całkowite zachmurzenie",
      windSpeed: 2.77,
      windDir: 356,
      percipitation: 0,
      humidity: 61,
      pressure: 1029,
      cloudCover: 100,
      dewPoint: 6,
      chancePrecipitation: 0,
      chanceRain: 0,
      chanceSnow: 0,
      chanceThunder: 0,
      chanceSleet: 0,
      icon: "cloudy",
      day: "sobota",
      dayShort: "sob",
    },
    {
      date: 1708254000,
      maxTemp: 17,
      minTemp: 11,
      sunrise: "06:53",
      sunset: "17:29",
      summary: "bezchmurnie",
      windSpeed: 6.35,
      windDir: 6,
      percipitation: 0,
      humidity: 51,
      pressure: 1030,
      cloudCover: 2,
      dewPoint: 6,
      chancePrecipitation: 0,
      chanceRain: 0,
      chanceSnow: 0,
      chanceThunder: 0,
      chanceSleet: 0,
      icon: "clear-day",
      day: "niedziela",
      dayShort: "ndz",
    },
    {
      date: 1708340400,
      maxTemp: 13,
      minTemp: 11,
      sunrise: "06:51",
      sunset: "17:31",
      summary: "całkowite zachmurzenie",
      windSpeed: 5.27,
      windDir: 121,
      percipitation: 0,
      humidity: 63,
      pressure: 1024,
      cloudCover: 100,
      dewPoint: 6,
      chancePrecipitation: 0,
      chanceRain: 0,
      chanceSnow: 0,
      chanceThunder: 0,
      chanceSleet: 0,
      icon: "cloudy",
      day: "poniedziałek",
      dayShort: "pon",
    },
  ],
});
</script>
<template>
  <div>
    <section>
      <div
        class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1
            class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
          >
            Payments tool for software companies
          </h1>
          <p
            class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          >
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Oferta
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <UCarousel
            v-slot="{ item }"
            :items="items"
            :ui="{ item: 'basis-full' }"
            class="rounded-lg overflow-hidden"
            arrows
          >
            <img :src="item" class="w-full" draggable="false" />
          </UCarousel>
        </div>
      </div>
    </section>
    <section class="flex flex-col max-w-screen-xl py-4 mx-auto lg:py-12">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10 pl-4 cursor-pointer"
          @click="scroll('right')"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>

      <div
        ref="scrollContainerRef"
        class="flex flex-row items-center justify-between overflow-x-scroll w-full p-4"
      >
        <WeatherCard
          v-for="item in weather.forecast"
          :key="item"
          :data="item"
        />
      </div>
    </section>
  </div>
</template>
