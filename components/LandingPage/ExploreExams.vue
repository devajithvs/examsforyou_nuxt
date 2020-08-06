<template>
    <div class="megaMenu-container" >
       <div class="pt-2 bg-white round-border-5 shadow">
            <div class="flex">
                <ul class="flex-vertical space-around width-50">
                    <li class="cursor-pointer flex space-around align-center font-16 gray-1 hover-darker pt-1 pb-1"
                        v-for="(item, index) in exam_list_level1"
                        :key="index"
                        @click="current_item_1 = item"
                        @mouseover="current_item_1 = item"
                        >
                        <img :src="require('@/assets/svgs/categoryicons/' + exam_list_level1_icons[index] + '.svg')" class="icon">
                        <div class="width-50">
                            {{ item }}
                        </div>
                        <span class="icon right__icon-black"></span>
                    </li>
                </ul>
                <ul class="flex-vertical space-around width-50 secondary">
                    <li class="cursor-pointer flex space-around align-center font-16 mb-1 gray-1">
                        <div class="width-80 font-18 mb-2">
                            {{current_item_1}}
                        </div>
                    </li>
                    <li class="cursor-pointer flex space-around align-center font-16 mb-1 gray-1"
                        v-for="(item, index) in exam_list_level2[current_item_1]"
                        :key="index"
                        >
                        <a class="width-80">
                            {{ item }}
                        </a>
                    </li>
                </ul>
            </div>
       </div>
    </div>
</template>

<script>
export default {
  name: 'App',
    computed: {
    },
    data () {
        return {
            current_item_1 : '',
            exam_list_level1_icons: ['engineering', 'medical', 'bank', 'mba', 'civilservices', 'foreignstudy', 'school'],
            exam_list_level1: ['ENGINEERING', 'MEDICAL', 'BANK', 'MBA', 'CIVIL SERVICES', 'FOREIGN STUDY', 'SCHOOL'],
            exam_list_level2: {
                'ENGINEERING' : ['JEE Main', 'JEE Advanced', 'BITSAT', 'GATE'],
                'MEDICAL' : ['NEET', 'AIIMS', 'NEET PG', 'AIIMS PG'],
                'BANK' : ['IBPS PO', 'SBI PO', 'IBPS RRB', 'IBPS Clerk', 'RBI Assistant', 'RBI Grade B'],
                'MBA' : ['CAT', 'XAT', 'SNAP', 'MAT'],
                'CIVIL SERVICES' : ['IFS', 'IESISS', 'RAS', 'ESE'],
                'FOREIGN STUDY' : ['GMAT', 'IELTS', 'GRE', 'TOEFL', 'SAT'],
                'SCHOOL' : ['NTSE', 'KVPY', 'CLASS 9', 'CLASS 10', 'CLASS 11', 'CLASS 12']
            },
            exam_list_level3: {
                'GATE' : ['GATE - CE', 'GATE - CH', 'GATE - CS', 'GATE - ME', 'GATE - PH', 'GATE - EE', 'GATE - CY']
            },
        }
    },  
}
</script>