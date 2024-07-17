class Learner {
    #grades = [];
    #name = {
      first: "",
      last: ""
    };
    #age;
  
    constructor(firstName, lastName, age) {
      this.#name.first = firstName;
      this.#name.last = lastName;
      this.#age = age;
    }
  
    get name() {
      return this.#name.first + " " + this.#name.last;
    }
  
    get age() {
      return this.#age;
    }
  
    addGrades(...grades) {
      grades = grades.flat();
      grades.forEach((grade) => {
        grade = Number(grade);
  
        if (grade >= 0 && grade <= 100) {
          this.#grades.push(grade);
        }
      });
    }
  
    get grades() {
      return this.#grades;
    }
  
    get average() {
      const arr = [...this.#grades];
      arr.sort((a, b) => a - b).shift();
  
      return arr.reduce((a, b) => a + b) / arr.length;
    }
  }
  
  // Testing the Learner class
  
  // Instantiate a new Learner
  const learner1 = new Learner("John", "Doe", 20);
  
  // Log the learner's name and age
  console.log("Name:", learner1.name); // Expected: "Name: John Doe"
  console.log("Age:", learner1.age);   // Expected: "Age: 20"
  
  // Add grades
  learner1.addGrades([95, 87, 66], "98", "100", -60, 88, 89, [100, 76, 88], 105);
  
  // Log the current grades array
  console.log("Grades:", learner1.grades); 
  // Expected: [95, 87, 66, 98, 100, 88, 89, 100, 76, 88]
  
  // Calculate the average manually, excluding the lowest grade
  // Sorted grades: [66, 76, 87, 88, 88, 89, 95, 98, 100, 100]
  // Exclude the lowest grade: [76, 87, 88, 88, 89, 95, 98, 100, 100]
  const grades = [95, 87, 66, 98, 100, 88, 89, 100, 76, 88];
  const validGrades = grades.filter(grade => grade >= 0 && grade <= 100);
  const sortedGrades = validGrades.sort((a, b) => a - b).slice(1);
  const manualAverage = sortedGrades.reduce((a, b) => a + b, 0) / sortedGrades.length;
  console.log("Manual Average:", manualAverage); 
  // Expected manual average: (76 + 87 + 88 + 88 + 89 + 95 + 98 + 100 + 100) / 9 = 91.24
  
  // Log the average returned from .average
  console.log("Average from class:", learner1.average); // Expected: 91.24
  