<template>
  <div class="my-16 px">
    <!-- Title -->
    <h1 class="text-center font-montserrat font-extralight text-5xl">
      Order Bulk Milk
    </h1>

    <!-- Form Wrapper -->
    <div class="flex flex-col items-start mt-6 max-w-md mx-auto w-full">
      <!-- Label -->
      <p class="font-lato text-[16px] tracking-wide text-gray-500 mb-2">
        Enter Phone Number
      </p>

      <!-- Input + Button -->
      <div class="flex w-full">
        <input type="number" name="mobile" placeholder="Without +91 or 0 prefix" pattern="[0-9]{10}"
          maxlength="10"
          required
          class="border border-gray-400 w-full px-4 py-2 text-lg rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <button
          class="bg-lime-600 text-white px-6 py-3 text-lg rounded-r-md font-medium hover:bg-lime-700 transition w-48 " >
          GET OTP
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bulk",
};
</script>

