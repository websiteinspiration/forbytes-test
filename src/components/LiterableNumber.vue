<template>
  <div class="literable-number">
    <h2>LiterableNumber</h2>
    <form action>
      <label for>Type some number</label>
      <input type="number" name="number" id="number" @input="literateNumber($event)">
      <div>
        Result: {{literate}}
      </div>
    </form>
  </div>
</template>

<script lang="ts">
const WOCABULARY = {
  TILL10:  ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
  TILL20: ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 
  'eightteen', 'nineteen'],
  TILL100: ['zero', 'ten', 'twenty', 'thirty', 'fouty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
  DEGRIES : [
    {
      name: 'septillion',
      pow : 24,
    },
    {
      name: 'sextillion',
      pow : 21,
    },
    {
      name: 'quintillion',
      pow : 18,
    },
    {
      name: 'quadrillion',
      pow : 15,
    },
    {
      name: 'trillion',
      pow : 12,
    },
    {
      name: 'billion',
      pow : 9,
    },
    {
      name: 'million',
      pow : 6,
    },
    {
      name: 'shousand',
      pow : 3,
    },
  ],
};
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class LiterableNumber extends Vue {

  public literate: string = '';
  
  literateNumber($event: any): void {
    const number = parseInt($event.target.value, 10);
    this.literate = this.convert(number);
  }

  convert(num: number): string {
    let result = '';
    
    if (!num && num !== 0) {
      return 'Oops, please eneter correct number';
    }
    if (num < 0) {
      result = 'minus ';
      num = Math.abs(num);
    }
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < WOCABULARY.DEGRIES.length; i++) {
      
      const degree = Math.pow(10, WOCABULARY.DEGRIES[i].pow);
      const degreeCount = this.literateTillShousand(Math.floor(num / degree));
      
      // if return not zero
      if (degreeCount !== WOCABULARY.TILL10[0]) {
        result += `${degreeCount} ${WOCABULARY.DEGRIES[i].name} `;
      }
      num = num % degree;
    }
    result += this.literateTillShousand(num);
    return result;
  }

  literateTillShousand(number: number): any {
      let result = '';
      let oneDegree = Math.floor(number / 100);
      if (oneDegree) {
        result += `${WOCABULARY.TILL10[oneDegree]} hundred `;
        number = number % 100;
      }
      if (number < 10) {
        if (!result || number) {
          result += WOCABULARY.TILL10[number];
        }
      } else if ( number < 20) {
        number -= 10;
        result += WOCABULARY.TILL20[number];
      } else {
        oneDegree = Math.floor(number / 10);
        if (oneDegree) {
          result += `${WOCABULARY.TILL100[oneDegree]} `;
          number = number % 10;
        }
        if (number) {
          result += WOCABULARY.TILL10[number];
        }
      }
      return result || WOCABULARY.TILL10[0];
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
