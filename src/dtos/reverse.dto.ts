export class ReverseDto {
  // TODO: add necessary fields
  public reversed: any;

  public reverseIt(input: string) {
    const arr = input.split('').reverse();
    this.reversed = arr.join('');
    if (!isNaN(this.reversed)) {
      this.reversed = +this.reversed;
    }
  }
}
