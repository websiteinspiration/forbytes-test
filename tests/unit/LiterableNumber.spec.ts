import Vue from 'vue';
import LiterableNumber from '@/components/LiterableNumber.vue';

describe('LiterableNumber.vue', () => {
    let exampleComponent: any;
    beforeEach(() => {
        const ctor = Vue.extend(LiterableNumber);
        exampleComponent = new ctor().$mount();
    });

    it('Check iitialisation of variable', () => {
        expect(exampleComponent.literate).toBe('');
    });

    describe('literateTillShousand mehtod', () => {
        it('should return empty', () => {
            expect(exampleComponent.literateTillShousand(0)).toBe('');
        });

        it('should return hunderds', () => {
            expect(exampleComponent.literateTillShousand(500)).toBe('five hundred');
        });

        it('should return number less than hunderd', () => {
            expect(exampleComponent.literateTillShousand(97)).toBe('ninety seven');
        });

        it('should return number simple number after hundred', () => {
            expect(exampleComponent.literateTillShousand(107)).toBe('one hundred seven');
        });

        it('should return number less than 20', () => {
            expect(exampleComponent.literateTillShousand(15)).toBe('fifteen');
        });

        it('should return one hundred', () => {
            expect(exampleComponent.literateTillShousand('100')).toBe('one hundred');
        });

        it('should return empty string', () => {
            expect(exampleComponent.literateTillShousand('0')).toBe('');
        });
    });

    describe('convert mehtod', () => {

        it('should return result with minus', () => {
            expect(exampleComponent.convert('-2')).toBe('minus two');
        });

        it('should return positive result', () => {
            expect(exampleComponent.convert('2')).toBe('two');
        });

        it('should return one hundred', () => {
            expect(exampleComponent.convert('100')).toBe('one hundred');
        });

        it('should return one shousand', () => {
            expect(exampleComponent.convert('1000')).toBe('one shousand');
        });

        it('uncorrect input', () => {
            expect(exampleComponent.convert(NaN)).toBe('Oops, please eneter correct number');
        });
    });
});
