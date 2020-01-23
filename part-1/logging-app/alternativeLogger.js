module.exports = () => {
  this.log = msg => {
    console.log(`<<< Log: ${msg} >>>`);
  };

  this.info = msg => {
    console.log(`<<< Info: ${msg} >>>`);
  };

  this.error = msg => {
    console.log(`<<< Error: ${msg} >>>`);
  };

  return this;
};
