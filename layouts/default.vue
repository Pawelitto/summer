<script setup>
import { initFlowbite } from "flowbite";
// https://open-meteo.com/en/docs/

const isOpen = ref(false);

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const changeSite = (to) => {
  isOpen.value = false;
  navigateTo(to);
};

const links = [
  {
    label: "Strona główna",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "Okolica",
    icon: "i-heroicons-map-pin",
    to: "/okolica",
  },
  {
    label: "Galeria",
    icon: "i-heroicons-photo",
    to: "/galeria",
  },
  {
    label: "Apartamenty",
    icon: "i-heroicons-home-modern",
    to: "/apartamenty",
  },
  {
    label: "Oferta",
    icon: "i-heroicons-document-text",
    to: "/oferta",
  },
  {
    label: "Wskazówki",
    icon: "i-heroicons-light-bulb",
    to: "/wskazowki",
  },
  {
    label: "Kontakt",
    icon: "i-heroicons-phone",
    to: "/kontakt",
  },
];

onMounted(() => {
  initFlowbite();
});
</script>
<template>
  <div>
    <nav
      class="w-full flex flex-wrap items-center justify-between mx-auto p-4 bg-gray-100 border-gray-200 dark:bg-gray-900"
    >
      <NuxtLink
        to="/"
        class="w-full flex items-center justify-between md:justify-center mx-auto my-2"
      >
        <span
          class="flex items-center self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          ><nuxt-img src="/images/logo.png" class="h-8 pr-2" />
        </span>

        <UButton @click="isOpen = true" class="md:hidden">
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </UButton>
      </NuxtLink>

      <ul
        class="hidden md:flex flex-row items-center justify-center m-auto font-medium my-2 border border-gray-100 rounded-lg space-x-8 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      >
        <li>
          <NuxtLink
            to="/"
            class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
            aria-current="page"
            >Strona główna</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/okolica"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Okolica</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/galeria"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Galeria</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/apartamenty"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Apartamenty</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/oferta"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Oferta</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/wskazowki"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Wskazówki</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/kontakt"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Kontakt</NuxtLink
          >
        </li>
      </ul>

      <ClientOnly>
        <UButton
          :icon="
            isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
          "
          color="gray"
          class="hidden md:flex items-center"
          variant="ghost"
          aria-label="Theme"
          @click="isDark = !isDark"
        />
        <template #fallback>
          <div class="hidden md:block w-8 h-8" />
        </template>
      </ClientOnly>
    </nav>

    <USlideover v-model="isOpen">
      <UCard
        class="flex flex-col flex-1"
        :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              <ClientOnly>
                <UButton
                  :icon="
                    isDark
                      ? 'i-heroicons-moon-20-solid'
                      : 'i-heroicons-sun-20-solid'
                  "
                  color="gray"
                  variant="ghost"
                  aria-label="Theme"
                  @click="isDark = !isDark"
                />
                <template #fallback>
                  <div class="w-8 h-8" />
                </template>
              </ClientOnly>
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>

        <div class="flex flex-col w-full">
          <UButton
            v-for="item in links"
            :key="item"
            :icon="item.icon"
            size="sm"
            color="primary"
            variant="outline"
            :label="item.label"
            :trailing="false"
            class="my-0.5"
            @click="changeSite(item.to)"
          />
        </div>
      </UCard>
    </USlideover>

    <slot />

    <Footer />
  </div>
</template>
<style scoped>
.view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.view-enter-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
  transition-delay: 0.5s;
}

.view-enter,
.view-leave-to {
  opacity: 0;
}

.view-enter-to,
.view-leave {
  opacity: 1;
}
</style>
