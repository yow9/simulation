// Benign placeholder for an OIDC trusted-publishing / provenance demo.
module.exports = function hello() {
  return "hello from @yow9/simulation";
};

if (require.main === module) {
  console.log(hello());
}
