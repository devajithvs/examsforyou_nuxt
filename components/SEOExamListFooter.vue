<template>
    <div>
        <div class="gray-2">
          <h2 class="font-20 text-center">Explore Exams, Courses, Blogs and more</h2>
          <div class="container flex space-around flex-wrap">
            <div id="engineering__list" class="margin-20">
              <h3 class="font-19">Engineering</h3>
              <ul>
                <li><a class="gray-2" href="">JEE Main</a></li>
                <li><a class="gray-2" href="">JEE Advanced</a></li>
                <li><a class="gray-2" href="">Gate CH</a></li>
                <li><a class="gray-2" href="">Gate CE</a></li>
                <li><a class="gray-2" href="">Gate ME</a></li>
                <li><a class="gray-2" href="">Gate CS</a></li>
                <li><a class="gray-2" href="">Bitsat</a></li>
                <li><a class="gray-2" href="">KEAM</a></li>
              </ul>
            </div>
            <div id="engineering__list" class="margin-20">
              <h3>Engineering</h3>
              <ul>
                <li><a class="gray-2" href="">JEE Main</a></li>
                <li><a class="gray-2" href="">JEE Advanced</a></li>
                <li><a class="gray-2" href="">Gate CH</a></li>
                <li><a class="gray-2" href="">Gate CE</a></li>
                <li><a class="gray-2" href="">Gate ME</a></li>
                <li><a class="gray-2" href="">Gate CS</a></li>
                <li><a class="gray-2" href="">Bitsat</a></li>
                <li><a class="gray-2" href="">KEAM</a></li>
              </ul>
            </div>
            <div id="engineering__list" class="margin-20">
              <h3>Engineering</h3>
              <ul>
                <li><a class="gray-2" href="">JEE Main</a></li>
                <li><a class="gray-2" href="">JEE Advanced</a></li>
                <li><a class="gray-2" href="">Gate CH</a></li>
                <li><a class="gray-2" href="">Gate CE</a></li>
                <li><a class="gray-2" href="">Gate ME</a></li>
                <li><a class="gray-2" href="">Gate CS</a></li>
                <li><a class="gray-2" href="">Bitsat</a></li>
                <li><a class="gray-2" href="">KEAM</a></li>
              </ul>
            </div>
            <div id="engineering__list" class="margin-20">
              <h3>Engineering</h3>
              <ul>
                <li><a class="gray-2" href="">JEE Main</a></li>
                <li><a class="gray-2" href="">JEE Advanced</a></li>
                <li><a class="gray-2" href="">Gate CH</a></li>
                <li><a class="gray-2" href="">Gate CE</a></li>
                <li><a class="gray-2" href="">Gate ME</a></li>
                <li><a class="gray-2" href="">Gate CS</a></li>
                <li><a class="gray-2" href="">Bitsat</a></li>
                <li><a class="gray-2" href="">KEAM</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="divider-horizontal"></div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
        return {
            items: [
                { title: 'ENGINEERING',
                    sub_items1: [
                        { title: 'JEE Advanced' },
                        { title: 'JEE Main' },
                        { title: 'BITSAT' },
                        { title: 'GATE',
                            sub_items2: [
                                { title: 'GATE - CE' },
                                { title: 'GATE - CH' },
                                { title: 'GATE - CS' },
                                { title: 'GATE - ME' },
                                { title: 'GATE - PH' },
                                { title: 'GATE - EE' },
                                { title: 'GATE - CY' },
                            ]
                        },
                    ],
                },
                { title: 'MEDICAL',
                    sub_items1: [
                        { title: 'NEET' },
                        { title: 'AIIMS' },
                        { title: 'NEET PG' },
                        { title: 'AIIMS PG' },
                    ],
                },
                { title: 'BANK',
                    sub_items1: [
                        { title: 'IBPS PO' },
                        { title: 'SBI PO' },
                        { title: 'IBPS RRB' },
                        { title: 'IBPS Clerk' },
                        { title: 'RBI Assistant' },
                        { title: 'RBI Grade B' },
                    ],
                },
                { title: 'MBA',
                    sub_items1: [
                        { title: 'CAT' },
                        { title: 'XAT' },
                        { title: 'SNAP' },
                        { title: 'MAT' },
                    ],
                },
                { title: 'CIVIL SERVICES',
                    sub_items1: [
                        { title: 'IAS' },
                        { title: 'IFS' },
                        { title: 'IES ISS' },
                        { title: 'RAS' },
                        { title: 'ESE' },
                    ],
                },
                { title: 'FOREIGN STUDY',
                    sub_items1: [
                        { title: 'GMAT' },
                        { title: 'IELTS' },
                        { title: 'GRE' },
                        { title: 'TOEFL' },
                        { title: 'SAT' },
                    ],
                },
                { title: 'SCHOOL',
                    sub_items1: [
                        { title: 'NTSE' },
                        { title: 'KVPY' },
                        { title: 'Class 9' },
                        { title: 'Class 10' },
                        { title: 'Class 11' },
                        { title: 'Class 12' },
                    ],
                },
            ],
        }
    },  
}
</script>
