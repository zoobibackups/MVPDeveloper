const numberToWord = (num) => {
    const numberMap = {
      0: 'Zero',
      1: 'One',
      2: 'Two',
      3: 'Three',
      4: 'Four',
      5: 'Five',
      6: 'Six',
      7: 'Seven',
      8: 'Eight',
      9: 'Nine',
      10: 'Ten',
      11: 'Eleven',
      12: 'Twelve',
      13: 'Thirteen',
      14: 'Fourteen',
      15: 'Fifteen',
      16: 'Sixteen',
      17: 'Seventeen',
      18: 'Eighteen',
      19: 'Nineteen',
      20: 'Twenty',
      30: 'Thirty',
      // Add more mappings as needed
    };
  
    if (numberMap[num]) {
      return numberMap[num];
    } else if (num > 20 && num < 30) {
      const tens = 'Twenty';
      const ones = numberMap[num % 10];
      return `${tens}-${ones}`;
    } else {
      return num.toString(); // Return the original number as string if not found in the mapping
    }
  };
  
  export default numberToWord
  