const courseInfo = { id: 1, name: "Course 1" };
const assignmentGroup = {
    id: 1,
    name: "Group 1",
    course_id: 1,
    group_weight: 20,
    assignments: [
        { id: 1, name: "Assignment 1", 
            due_at: "2024-06-20", 
            points_possible: 100 },
        { id: 2, name: "Assignment 2", 
            due_at: "2024-06-10", 
            points_possible: 200 }
    ]
};
const learnerSubmissions = [
    {
        learner_id: 1,
        assignment_id: 1,
        submission: { submitted_at: "2024-06-15", 
                      score: 90 }
    },
    {
        learner_id: 1,
        assignment_id: 2,
        submission: { submitted_at: "2024-06-11", 
                     score: 180 }
    },
    {
        learner_id: 2,
        assignment_id: 1,
        submission: { submitted_at: "2024-06-21", 
                     score: 80 }
    },
    {
      learner_id: 2,
      assignment_id: 2,
      submission: { submitted_at: "2024-06-21", 
                   score: 89 }
  }
];
function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
  // Validate if the assignment group belongs to the correct course
  if (courseInfo.id !== assignmentGroup.course_id) {
      throw new Error("Invalid input: Assignment group does not belong to the specified course.");
  }

  const results = [];
  const assignments = assignmentGroup.assignments;

  // Process each learner's submissions
  learnerSubmissions.forEach(submission => {
      const learnerId = submission.learner_id;
      const assignmentId = submission.assignment_id;
      const submissionData = submission.submission;
      const assignment = assignments.find(a => a.id === assignmentId);

      if (!assignment) {
          console.error(`Assignment with ID ${assignmentId} not found.`);
          return; // Skip this submission
      }

      const dueDate = new Date(assignment.due_at);
      const submittedDate = new Date(submissionData.submitted_at);

      // Skip assignments that are not yet due
      if (dueDate > new Date()) {
          return;
      }

      // Deduct 10 percent for late submissions
      let score = submissionData.score;
      if (submittedDate > dueDate) {
          score -= assignment.points_possible * 0.10;
      }

      let learner = results.find(r => r.id === learnerId);
      if (!learner) {
          learner = { id: learnerId, avg: 0, totalPoints: 0, totalScore: 0 };
          results.push(learner);
      }

      if (assignment.points_possible === 0) {
          console.error(`Assignment with ID ${assignmentId} has zero possible points.`);
          return; // Skip this submission
      }

      const scorePercentage = (score / assignment.points_possible) * 100;
      learner[assignmentId] = scorePercentage;

      learner.totalPoints += assignment.points_possible;
      learner.totalScore += score;
  });

  // Calculate the average for each learner
  results.forEach(learner => {
      if (learner.totalPoints > 0) {
          learner.avg = (learner.totalScore / learner.totalPoints) * 100;
      }
      // Remove helper properties to match the required output format
      delete learner.totalPoints;
      delete learner.totalScore;
  });

  return results;
}

try {
  const results = getLearnerData(courseInfo, assignmentGroup, learnerSubmissions);
  console.log(results);
} catch (error) {
  console.error(error.message);
}