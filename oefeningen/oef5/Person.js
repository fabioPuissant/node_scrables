class Person {
  constructor(voornaam, achternaam, email) {
    this._voornaam = voornaam;
    this._achternaam = achternaam;
    this._email = email;
  }

  set voornaam(voornaam) {
    this._voornaam = voornaam;
  }

  get voornaam() {
    return this._voornaam;
  }

  set achternaam(achternaam) {
    this._achternaam = achternaam;
  }

  get achternaam() {
    return this._achternaam;
  }

  set email(mail) {
    this._email = mail;
  }

  get email() {
    return this._email;
  }
}

module.exports = (voornaam, achternaam, email) =>
  new Person(voornaam, achternaam, email);
