<template>
    <h1  class="text-4xl font-montserrat font-medium mb-8  text-center mt-14">Frequently Asked Questions</h1>
  <section class="max-w-4xl mx-auto py-10 px-4 mb-20">
    <!-- Navigation -->
  <nav class="flex gap-6 mb-4 lg:w-[1100px]">
    <button  ><ion-icon name="chevron-back-outline"class="text-[#76A543] text-2xl"></ion-icon></button>
    
    <div class="flex gap-6">
      <button 
      v-for="(head,index) in heads"
      :key="index"
      @click="setActiveHead(index)" 
      class="pb-2 font-medium "
      :class="
      {
        'text-[#76A543] border-b-2 border-[#76A543] ' :activeHead==index,
          'text-[#76A543] hover:text-lime-900' :activeHead !==index,
        
      }">
      {{ head }}
    </button>
    </div>
  <button><ion-icon name="chevron-forward" class="text-[#76A543] text-2xl"></ion-icon></button>
  </nav>
  <div v-for="(faq,index) in faqs[activeHead]" :key="index" class="mb-2">
    <button
    @click="toggleFAQ(index)"
    class="w-full flex font-lato text-[16px] text-gray-700  justify-between items-center px-5 py-4 bg-[#00000008] rounded-lg">
    <span>{{ faq.question }}</span>
    <span class="bg-[#76A543] text-2xl flex items-center justify-center pb-1 text-white  w-7 h-7 font-bold  rounded-full">{{ activeIndex==index ? "-":"+" }}</span>
    </button>
    <div v-if="activeIndex===index" 
    class="px-4 py-3 bg-white ">
    {{ faq.answer }}

    

    </div>

  </div>

   
  </section>
</template>

<script>
export default {
  name: "FAQ",
  data() {
    return {
      activeHead: 0,
      activeIndex: null,
      heads: [
        "Product Related",
        "General FAQ",
        "Company Related",
        "App Related",
        " Delivery Related",
        "Process Related"
      ],
      faqs: [
        // 1.general query 
        [
          { question: "What are the areas UB serve in Chennai ?", answer: "We serve in more than 195+ areas in Chennai and 10+ areas in Chengalpattu. Check the link to know if we serve near you." },
          { question: "What is the price of your Milk ?", answer: "₹78 for 1 Liter and ₹44 for 500ml" },
          { question: "Should I pay if the milk bottle breaks ?", answer: "We don’t charge for the first bottle breakage. After that, we charge Rs.30 for a one-litre bottle and Rs.20 for a half-litre bottle" },
          { question: "Why is the price of UB Milk high ?", answer: "Our milk price is affordable compared to other fresh milk brands in Chennai. You can find that the same milk is being sold for Rs.100 to 120 per litre." }
        ],
        // 2. product related 
        [
          { question: "What is the shelf-life of UB milk ?", answer: "The shelf-life of the product is 1 day. Boil the milk as soon as you receive it. It can stay good/fresh upto 24 hours in the fridge." },
          { question: "How do we return the milk bottle after use ?", answer: "On the next morning delivery, our agents themselves will collect the bottles. Please clean it after use and put on the collection bag/unit." },
          { question: "How do we get a tax breakup ?", answer: "You will be able to see the tax breakup from the receipt or transaction summary. Milk: 0%, Honey: 0%, Ghee: 12%" },
          { question: "Will I be charged for a sample ?", answer: "Yes, you will be charged for the sample." },
          { question: "Can I feed my infant UB milk ?", answer: "Yes, but dilute with water before feeding." },
          { question: "How can you assure quality ?", answer: "We test milk in NABL accredited labs and in our own labs daily." },
          { question: "Is this A1 or A2 milk ?", answer: "We do not claim whether it is A1/A2 as we don't have any certificate. We collect milk from 75% native cows and 25% cross breeds." },
          { question: "How should I store the milk ?", answer: "Boil immediately and refrigerate. Consume within 24 hrs." },
          { question: "Why does milk spoil ?", answer: "Fresh cow milk is prone to spoilage due to temperature fluctuations. Refunds available via app before 9 AM." }
        ],
        // 3.company related 
        [
          { question: "Does UB own any dairy farm ?", answer: "No, we collect milk from dairy farmers of nearby villages." },
          { question: "What does UB do with excess milk ?", answer: "We distribute it to the local community." },
          { question: "Why no free samples ?", answer: "We value the effort behind milk production. Free samples may be misused." },
          { question: "What other products does UB provide ?", answer: "Pure Cow Ghee, Pure Honey, Country Eggs, Milky Mist, Palm Era, etc." },
          { question: "What is the dealership procedure ?", answer: "Currently, UB manages dealerships directly. No private dealerships." }
        ],
        // 4. app related
        [
          { question: "Are payments through the app secure ?", answer: "Yes, handled by Razorpay with high security." },
          { question: "Why encourage monthly subscriptions ?", answer: "It helps us plan procurement and ensures fresh milk delivery." },
          { question: "Why use the mobile app ?", answer: "To track purchase/payment history, request changes, and get offers." },
          { question: "Is there a referral program ?", answer: "Yes, 'Refer and Earn' gives ₹200 wallet credits to both referrer and new user." },
          { question: "When should I recharge my wallet ?", answer: "Recharge before balance drops below one day's delivery cost." }
        ],
        // 5. delivery related 
        [
          { question: "Do you charge for delivery ?", answer: "No, delivery is free with an active subscription. Otherwise ₹50." },
          { question: "What time is milk delivered ?", answer: "Usually by 7–7:30 AM, depending on weather." },
          { question: "Can I change/cancel my subscription ?", answer: "Yes, changes allowed until 7 PM of the previous day." },
          { question: "What is the sample delivery time ?", answer: "Delivered on your chosen date. Contact support if delayed." },
          { question: "Who to contact for issues ?", answer: "Contact your dealer or UB customer care (8939989887 / WhatsApp)." }
        ],
        // 6.process related
        [
          { question: "Is UB Milk pasteurized ?", answer: "No. It is fresh, unprocessed cow milk chilled below 4°C." },
          { question: "What type of feed is given to cows ?", answer: "Green fodder, oil cakes, paddy straw, etc." },
          { question: "How are bottles cleaned before reuse ?", answer: "Rinsing with RO water, detergent wash, intermediate rinse, sterilization with hot water." },
          { question: "Are cows injected with hormones ?", answer: "No. Farmers use ethnoveterinary practices to maintain cattle health." }
        ]
      ]
    };
  },
  methods: {
    toggleFAQ(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    setActiveHead(index) {
      this.activeHead = index;
      this.activeIndex = null;
    },
  },
};
</script>
