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
  TILL10:  ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
  TILL20: ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 
  'eightteen', 'nineteen'],
  TILL100: ['zero', '', 'twenty', 'thirty', 'fouty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
  DEGRIES: ['', 'shousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion'],
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
    const result = [];

    if (!num && num !== 0) {
      return 'Oops, please eneter correct number';
    }

    const minus = num < 0;
    num = Math.abs(num);

    let i = 0;
    while ( (num > 0) && (i < WOCABULARY.DEGRIES.length) ) {
      const degreeCount = this.literateTillShousand(num % 1000);

      if (degreeCount) {
        result.unshift(WOCABULARY.DEGRIES[i] ? `${degreeCount} ${WOCABULARY.DEGRIES[i]}` : degreeCount);
      }
      num = Math.floor(num / 1000);
      i++;
    }
    return `${minus ? 'minus ' : ''}${result.join(' ') || WOCABULARY.TILL100[0]}`;
  }

  literateTillShousand(number: number): any {
      const result = [];
      const charts = number
        .toString()
        .split('')
        .reverse()
        .map((item) => parseInt(item, 10));

      if (charts[2]) {
        result.push(`${WOCABULARY.TILL10[charts[2]]} hundred`);
      }
      if (charts[1]) {  
        result.push(`${WOCABULARY.TILL100[charts[1]]}`);
      }
      charts[1] === 1 ? result.push(WOCABULARY.TILL20[charts[0]]) : result.push(WOCABULARY.TILL10[charts[0]]);
      return result.filter((item) => !!item).join(' ');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
