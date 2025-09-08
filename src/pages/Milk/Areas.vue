<template>
    <div class="mx-auto  px-4 leading-8 tracking-wide md:leading-8 mb-20 my-20">
        <h1 class="text-center font-montserrat font-medium text-4xl my-1">
            Our Service Areas
        </h1>
        <p class="font-lato text-[16px] text-center tracking-wide text-gray-500 mt-2">
            We are serving in more than 180+ areas of Chennai
        </p>
        <div class="flex flex-col lg:flex-row gap-10 w-full ">
            <div class="px-10">
                <img src="https://uzhavarbumi.com/images/areas/area.png" alt="">
                <input type="search" v-model="searchResults" name="location" placeholder="Search for your Location..."
                    maxlength="15" required
                    class=" w-full px-4 py-2 mt-6 text-lg rounded-md focus:outline-none bg-[#f5f5f5]" />
                <p v-for="(item, index) in filteredResult" :key="index"
                    class="font-lato te text-[18px] font-medium tracking-wide text-[#76a543] mt-2">{{ item }}</p>
            </div>
            <div class="px-4 lg:px-10">
                <h3 class="font-montserrat text-3xl font-medium my-6 items-center"><ion-icon name="location"
                        class="text-lime-600 text-3xl"></ion-icon>
                    Chengalpet
                </h3>
                <div class="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-3 ">
                    <div v-for="(area, index) in areas" :key="index">
                        <p class="font-lato text-[17px] tracking-wide text-gray-500 mt-2">{{ area }}</p>
                    </div>
                </div>
                <h3 class="font-montserrat text-3xl font-medium my-6 items-center"><ion-icon name="location"
                        class="text-lime-600 text-3xl"></ion-icon>
                    Chennai
                </h3>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
                    <div v-for="(n, index) in location" :key="index">
                        <p class="font-lato text-[17px] tracking-wide px-4 py-2 text-gray-500 mt-2">{{ n }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue';

export default {
    name: "areas",
    data() {
        return {
            searchResults: "",
            areas: [
                "Alapakkam",
                "Ammanampakkam",
                "Chengalpet",
                "Gokulapuram",
                "Melaiyur",
                "Municipal Colony",
                "Natham",
                "NGGO Nagar",
                "Thenur"
            ],
            location: [
                "Abiramapuram",
                "Adambakkam",
                "Adyar",
                "Alandur",
                "Alwarpet",
                "Ambattur",
                "Ambattur Estate",
                "Aminjikarai",
                "Anakaputhur",
                "Anna nagar",
                "Anna Nagar East",
                "Arumbakkam",
                "Ashok Nagar",
                "Athanur",
                "Avadi",
                "Ayanavaram",
                "Ayapakkam",
                "Besant Nagar",
                "Bharani Puthur, Iyyappanthangal",
                "Broadway",
                "Cantonment, Pallavaram",
                "Chetpet",
                "Chintadripet",
                "Chitlapakkam",
                "Choolaimedu",
                "Chrompet",
                "Egmore",
                "Ekkatuthangal",
                "Gandhi Nagar, Adayar",
                "Gerugambakkam",
                "GKM Colony, Kolathur",
                "Gopalapuram",
                "Guduvanchery",
                "Guindy",
                "Hasthinapuram",
                "Ice House",
                "IIT Madras",
                "Indira Nagar, Adyar",
                "Integral Coach Factory Quarters",
                "Iyyappanthangal",
                "Jalladiampet",
                "Jamalia",
                "Kallikuppam, Ambattur",
                "Kamarajapuram",
                "Kanagam",
                "Kandancavadi",
                "Kandanchavadi",
                "Karapakkam",
                "Karayanchavadi",
                "Karukku, Ambattur",
                "Kaspapuram",
                "Kattupakkam",
                "Kazhipattur",
                "Keelkattalai",
                "Kelambakkam",
                "Kilpauk",
                "KK Nagar",
                "Kodambakkam",
                "Kolapakkam",
                "Kolathur",
                "Kondithope",
                "Korattur",
                "Korrukupet",
                "Kosapet",
                "Kottivakkam",
                "Kotturpuram",
                "Kovilambakkam",
                "Kovur",
                "Koyambedu",
                "Krishna Nagar, Pammal",
                "Kumananchavadi",
                "Kundrathur",
                "Madambakkam",
                "Madanandapuram",
                "Madipakkam",
                "Maduravoyal",
                "Maduvangarai",
                "Mambakkam",
                "Manapakkam",
                "Mandaveli",
                "Mangadu",
                "Mannady",
                "Mappedu",
                "Medavakkam",
                "Mettukuppam",
                "MGR Nagar",
                "Mint",
                "Moolacheri",
                "Mount Road",
                "Mowlivakkam",
                "Mugalivakkam",
                "Mugapair",
                "Mylapore",
                "Nammalwarpet",
                "Nanganallur",
                "Navalur",
                "Neelangarai",
                "Nerkundram",
                "Nesapakkam",
                "New Perungalathur",
                "New Washermanpet",
                "Nolambur",
                "Noombal",
                "Nungambakkam",
                "Oggiyamduraipakkam",
                "Okkiyampet",
                "Old Washermanpet",
                "Otteri",
                "Ottiambakkam",
                "Padi",
                "Padur",
                "Padur, pudupaakam",
                "Palavakkam",
                "Pallavaram",
                "Pallikaranai",
                "Pammal",
                "Pattalam",
                "Pattravakkam, Ambattur",
                "Pazhavanthangal",
                "Perambur",
                "Peravallur",
                "Periyar Nagar, Perambur",
                "Perumattunallur",
                "Perumbakkam",
                "Perungalathur",
                "Perungudi",
                "Phoenix Mall (Behind)",
                "Polichalur",
                "Ponmar",
                "Ponniammanmedu",
                "Poompuhar Nagar, Kolathur",
                "Poonamallee",
                "Porur",
                "Potheri",
                "Pozhichalur",
                "Pudupakkam",
                "Pudupet",
                "Purasawalkam",
                "RA Puram, Nandanam",
                "Ragubathi Nagar, Nanganallur",
                "Rajakilpakkam",
                "Ramapuram",
                "Royapuram",
                "Saidapet",
                "Saligramam",
                "Santhome",
                "Santhosapuram",
                "Secretariat Colony",
                "Selaiyur",
                "Sembakkam",
                "Senneer Kuppam",
                "Shankar Nagar, Pammal",
                "Shastri Nagar, Adyar",
                "Sirucheri",
                "Sithalapakkam",
                "Sozhinganallur",
                "SRP Tools",
                "St.Thomas Mount",
                "Sunnambu Kolathur",
                "Surapet",
                "T Nagar",
                "Tambaram",
                "Thalambur",
                "Thillaiganga Nagar, Nanganallur",
                "Thirumullavoyal",
                "Thiruvanchery",
                "Thiruvanmiyur",
                "Thoraipakkam",
                "Tiruvottiyur",
                "TN Housing Board, Velachery",
                "Tondiarpet",
                "Triplicane",
                "Trunk Road, Poonnamallee",
                "TVS Green Acres - Vandalur",
                "Urapakkam",
                "Vadapalani",
                "Valasaravakkam",
                "Velachery",
                "Velachery (Check Post)",
                "Vengambakkam",
                "Villivakkam",
                "Virugambakkam",
                "Voltas Colony, Nanganallur",
                "VPG Avenue, Thoraipakkam",
                "Vyasarpadi",
                "West Mambalam"
            ]
        }
    },
    computed: {
        filteredResult() {
            if (!this.searchResults) return [];
            const result = this.searchResults.toLowerCase();
            return [...this.areas, ...this.location].filter(item =>
                item.toLowerCase().includes(result)
            )
        }
    }

}

</script>