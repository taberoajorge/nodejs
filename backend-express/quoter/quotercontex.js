function QuoterContext(stragtegy, gain) {
  this.stragtegy = stragtegy;
  this.gain = gain;

  this.setStragtegy = (stragtegy) => {
    this.stragtegy = stragtegy;
  }

  this.quote = (amount) => this.stragtegy.quote(amount, this.gain)

};