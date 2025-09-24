// let studentName = "Pratik Patil";
// let studentAge = 15;
// let studentStandard = "10th";
// let studentGender = "male";
// let studentAddress= "Viman Nagar, Pune";

// let motherName = "Priya Singh";
// let motherAge = 32;
// let motherGender = "female";
// let motherAddress= "Baner, Pune";

// let mother = {
//   name: "Priya Singh",
//   age: 33,
//   address: "Baner, Pune",
//   city: "Pune",
// };

// let student = {
//   name: "Pratik Patil",
//   age: 15,
//   standard: "10th",
//   gender: "male",
//   address: "Viman Nagar, Pune",
//   section: "C",
// };

// mother.occupation = "HouseWife";
// mother.age = 34;

// console.log({ mother, student });

// let vehicle = {
//   noOfSeats: 7,
//   topSpeed: 180,
//   mileage: 40,
//   noOfAirbags: 5,
// };

// vehicle.address = {
//   city: "Pune",
// };

// console.log(vehicle?.address?.city);

// const vehicles = [
//   {
//     name: "Thar",
//     noOfSeats: 7,
//     topSpeed: 180,
//     mileage: 40,
//     noOfAirbags: 5,
//     address: {
//       city: "Amt",
//     },
//   },
//   {
//     name: "Jeep",
//     noOfSeats: 4,
//     topSpeed: 120,
//     mileage: 20,
//     noOfAirbags: 4,
//     address: {
//       city: "Pune",
//     },
//   },
// ];

// for (let i = 0; i < vehicles.length; i++) {
//   console.log(
//     "Name of vehicle:",
//     vehicles[i]?.name,
//     "& city:",
//     vehicles[i]?.address?.city
//   );
// }

// for (const key in vehicles) {
//   if (!Object.hasOwn(vehicles, key)) continue;

//   const element = vehicles[key];
//   console.log(key, ": " + element);
// }

// const vehiclesObjKeys = Object.keys(vehicles[0]); // return keys array
// const vehiclesObjValues = Object.values(vehicles[0]); // return valuesof key array
// console.log(vehiclesObjKeys, vehiclesObjValues);

// for of -> whole obj in arr -> no iterator

// for (let vehicle of vehicles) {
//   if (vehicle?.address?.city === "Pune") {
//     vehicle.address.city = "Mumbai";
//   }
// }

// console.log(vehicles);

// Resume Management System
const resume = {
  // properties
  name: "Deep",
  email: "deephiwase@gmail.com",
  phone: "1234567890",
  skills: ["JavaScript", "HTML", "CSS"],
  workExperiences: [],

  // functions
  display: function () {
    console.log("Name:", this.name);
    console.log("Email:", this.email);
    console.log("Phone Number:", this.phone);
    console.log("Skills:", this.skills);
    console.log("Work Experience:", this.workExperiences);
  },

  addSkill: function (newSkill) {
    this.skills.push(newSkill);
    return this.skills;
  },

  addWorkExperience: function (newExperience) {
    this.workExperiences.push(newExperience);
    return this.workExperiences;
  },

  showSkills: function () {
    for (const skill of this.skills) {
      console.log(skill);
    }
  },
};

resume.display();
resume.addSkill("MongoDB");
resume.showSkills();
resume.addWorkExperience("AccioJobs");
resume.display();
