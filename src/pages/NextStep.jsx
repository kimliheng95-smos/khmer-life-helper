import { useEffect, useState } from "react";
import { useLanguage } from "../context/useLanguage";

function NextStep() {
  const { t } = useLanguage();

  const [goal, setGoal] = useState("");
  const [started, setStarted] = useState(false);
  const [showPlan, setShowPlan] = useState(false);
  const [form, setForm] = useState({});

  const [completedTasks, setCompletedTasks] = useState(function () {
    try {
      const saved = localStorage.getItem("khmer-life-helper-completed-tasks");

      if (saved) {
        const parsedTasks = JSON.parse(saved);

        return Array.isArray(parsedTasks) ? parsedTasks : [];
      }

      return [];
    } catch {
      return [];
    }
  });

  const goals = [
    {
      id: "Find an Internship",
      title: t("nextStep.goals.internship.title"),
      description: t("nextStep.goals.internship.description"),
      icon: "bi-briefcase",
    },
    {
      id: "Learn a Skill",
      title: t("nextStep.goals.skill.title"),
      description: t("nextStep.goals.skill.description"),
      icon: "bi-code-slash",
    },
    {
      id: "Improve My Studies",
      title: t("nextStep.goals.study.title"),
      description: t("nextStep.goals.study.description"),
      icon: "bi-mortarboard",
    },
    {
      id: "Reach a Goal",
      title: t("nextStep.goals.goal.title"),
      description: t("nextStep.goals.goal.description"),
      icon: "bi-bullseye",
    },
  ];

  const questions = {
    "Find an Internship": [
      {
        name: "year",
        label: t("nextStep.questions.internship.year.label"),
        type: "select",
        options: [
          t("nextStep.options.year1"),
          t("nextStep.options.year2"),
          t("nextStep.options.year3"),
          t("nextStep.options.year4"),
          t("nextStep.options.graduated"),
        ],
      },
      {
        name: "major",
        label: t("nextStep.questions.internship.major.label"),
        type: "text",
        placeholder: t("nextStep.questions.internship.major.placeholder"),
      },
      {
        name: "skills",
        label: t("nextStep.questions.internship.skills.label"),
        type: "text",
        placeholder: t("nextStep.questions.internship.skills.placeholder"),
      },
      {
        name: "experience",
        label: t("nextStep.questions.internship.experience.label"),
        type: "select",
        options: [
          t("nextStep.options.noExperience"),
          t("nextStep.options.schoolProjects"),
          t("nextStep.options.volunteer"),
          t("nextStep.options.partTime"),
          t("nextStep.options.workExperience"),
        ],
      },
      {
        name: "time",
        label: t("nextStep.questions.internship.time.label"),
        type: "select",
        options: [
          t("nextStep.options.less3h"),
          t("nextStep.options.h3to5"),
          t("nextStep.options.h5to10"),
          t("nextStep.options.h10plus"),
        ],
      },
    ],

    "Learn a Skill": [
      {
        name: "skill",
        label: t("nextStep.questions.skill.skill.label"),
        type: "text",
        placeholder: t("nextStep.questions.skill.skill.placeholder"),
      },
      {
        name: "level",
        label: t("nextStep.questions.skill.level.label"),
        type: "select",
        options: [
          t("nextStep.options.completeBeginner"),
          t("nextStep.options.beginner"),
          t("nextStep.options.intermediate"),
          t("nextStep.options.advanced"),
        ],
      },
      {
        name: "reason",
        label: t("nextStep.questions.skill.reason.label"),
        type: "text",
        placeholder: t("nextStep.questions.skill.reason.placeholder"),
      },
      {
        name: "time",
        label: t("nextStep.questions.skill.time.label"),
        type: "select",
        options: [
          t("nextStep.options.less3h"),
          t("nextStep.options.h3to5"),
          t("nextStep.options.h5to10"),
          t("nextStep.options.h10plus"),
        ],
      },
    ],

    "Improve My Studies": [
      {
        name: "major",
        label: t("nextStep.questions.study.major.label"),
        type: "text",
        placeholder: t("nextStep.questions.study.major.placeholder"),
      },
      {
        name: "subject",
        label: t("nextStep.questions.study.subject.label"),
        type: "text",
        placeholder: t("nextStep.questions.study.subject.placeholder"),
      },
      {
        name: "habit",
        label: t("nextStep.questions.study.habit.label"),
        type: "select",
        options: [
          t("nextStep.options.procrastinate"),
          t("nextStep.options.forgetLessons"),
          t("nextStep.options.hardToUnderstand"),
          t("nextStep.options.notEnoughPractice"),
          t("nextStep.options.lackMotivation"),
        ],
      },
      {
        name: "target",
        label: t("nextStep.questions.study.target.label"),
        type: "text",
        placeholder: t("nextStep.questions.study.target.placeholder"),
      },
    ],

    "Reach a Goal": [
      {
        name: "goalName",
        label: t("nextStep.questions.goal.goalName.label"),
        type: "text",
        placeholder: t("nextStep.questions.goal.goalName.placeholder"),
      },
      {
        name: "reason",
        label: t("nextStep.questions.goal.reason.label"),
        type: "text",
        placeholder: t("nextStep.questions.goal.reason.placeholder"),
      },
      {
        name: "deadline",
        label: t("nextStep.questions.goal.deadline.label"),
        type: "text",
        placeholder: t("nextStep.questions.goal.deadline.placeholder"),
      },
      {
        name: "progress",
        label: t("nextStep.questions.goal.progress.label"),
        type: "select",
        options: [
          t("nextStep.options.justStarted"),
          t("nextStep.options.less25"),
          t("nextStep.options.p25to50"),
          t("nextStep.options.p50to75"),
          t("nextStep.options.more75"),
        ],
      },
    ],
  };

  const plans = {
    "Find an Internship": [
      {
        week: 1,
        title: t("nextStep.plans.internship.1.title"),
        tasks: [
          t("nextStep.plans.internship.1.tasks.1"),
          t("nextStep.plans.internship.1.tasks.2"),
          t("nextStep.plans.internship.1.tasks.3"),
        ],
      },
      {
        week: 2,
        title: t("nextStep.plans.internship.2.title"),
        tasks: [
          t("nextStep.plans.internship.2.tasks.1"),
          t("nextStep.plans.internship.2.tasks.2"),
          t("nextStep.plans.internship.2.tasks.3"),
        ],
      },
      {
        week: 3,
        title: t("nextStep.plans.internship.3.title"),
        tasks: [
          t("nextStep.plans.internship.3.tasks.1"),
          t("nextStep.plans.internship.3.tasks.2"),
          t("nextStep.plans.internship.3.tasks.3"),
        ],
      },
      {
        week: 4,
        title: t("nextStep.plans.internship.4.title"),
        tasks: [
          t("nextStep.plans.internship.4.tasks.1"),
          t("nextStep.plans.internship.4.tasks.2"),
          t("nextStep.plans.internship.4.tasks.3"),
        ],
      },
      {
        week: 5,
        title: t("nextStep.plans.internship.5.title"),
        tasks: [
          t("nextStep.plans.internship.5.tasks.1"),
          t("nextStep.plans.internship.5.tasks.2"),
          t("nextStep.plans.internship.5.tasks.3"),
        ],
      },
      {
        week: 6,
        title: t("nextStep.plans.internship.6.title"),
        tasks: [
          t("nextStep.plans.internship.6.tasks.1"),
          t("nextStep.plans.internship.6.tasks.2"),
          t("nextStep.plans.internship.6.tasks.3"),
        ],
      },
      {
        week: 7,
        title: t("nextStep.plans.internship.7.title"),
        tasks: [
          t("nextStep.plans.internship.7.tasks.1"),
          t("nextStep.plans.internship.7.tasks.2"),
          t("nextStep.plans.internship.7.tasks.3"),
        ],
      },
      {
        week: 8,
        title: t("nextStep.plans.internship.8.title"),
        tasks: [
          t("nextStep.plans.internship.8.tasks.1"),
          t("nextStep.plans.internship.8.tasks.2"),
          t("nextStep.plans.internship.8.tasks.3"),
        ],
      },
      {
        week: 9,
        title: t("nextStep.plans.internship.9.title"),
        tasks: [
          t("nextStep.plans.internship.9.tasks.1"),
          t("nextStep.plans.internship.9.tasks.2"),
          t("nextStep.plans.internship.9.tasks.3"),
        ],
      },
      {
        week: 10,
        title: t("nextStep.plans.internship.10.title"),
        tasks: [
          t("nextStep.plans.internship.10.tasks.1"),
          t("nextStep.plans.internship.10.tasks.2"),
          t("nextStep.plans.internship.10.tasks.3"),
        ],
      },
      {
        week: 11,
        title: t("nextStep.plans.internship.11.title"),
        tasks: [
          t("nextStep.plans.internship.11.tasks.1"),
          t("nextStep.plans.internship.11.tasks.2"),
          t("nextStep.plans.internship.11.tasks.3"),
        ],
      },
      {
        week: 12,
        title: t("nextStep.plans.internship.12.title"),
        tasks: [
          t("nextStep.plans.internship.12.tasks.1"),
          t("nextStep.plans.internship.12.tasks.2"),
          t("nextStep.plans.internship.12.tasks.3"),
        ],
      },
    ],

    "Learn a Skill": [
      {
        week: 1,
        title: t("nextStep.plans.skill.1.title"),
        tasks: [
          t("nextStep.plans.skill.1.tasks.1"),
          t("nextStep.plans.skill.1.tasks.2"),
          t("nextStep.plans.skill.1.tasks.3"),
        ],
      },
      {
        week: 2,
        title: t("nextStep.plans.skill.2.title"),
        tasks: [
          t("nextStep.plans.skill.2.tasks.1"),
          t("nextStep.plans.skill.2.tasks.2"),
          t("nextStep.plans.skill.2.tasks.3"),
        ],
      },
      {
        week: 3,
        title: t("nextStep.plans.skill.3.title"),
        tasks: [
          t("nextStep.plans.skill.3.tasks.1"),
          t("nextStep.plans.skill.3.tasks.2"),
          t("nextStep.plans.skill.3.tasks.3"),
        ],
      },
      {
        week: 4,
        title: t("nextStep.plans.skill.4.title"),
        tasks: [
          t("nextStep.plans.skill.4.tasks.1"),
          t("nextStep.plans.skill.4.tasks.2"),
          t("nextStep.plans.skill.4.tasks.3"),
        ],
      },
      {
        week: 5,
        title: t("nextStep.plans.skill.5.title"),
        tasks: [
          t("nextStep.plans.skill.5.tasks.1"),
          t("nextStep.plans.skill.5.tasks.2"),
          t("nextStep.plans.skill.5.tasks.3"),
        ],
      },
      {
        week: 6,
        title: t("nextStep.plans.skill.6.title"),
        tasks: [
          t("nextStep.plans.skill.6.tasks.1"),
          t("nextStep.plans.skill.6.tasks.2"),
          t("nextStep.plans.skill.6.tasks.3"),
        ],
      },
      {
        week: 7,
        title: t("nextStep.plans.skill.7.title"),
        tasks: [
          t("nextStep.plans.skill.7.tasks.1"),
          t("nextStep.plans.skill.7.tasks.2"),
          t("nextStep.plans.skill.7.tasks.3"),
        ],
      },
      {
        week: 8,
        title: t("nextStep.plans.skill.8.title"),
        tasks: [
          t("nextStep.plans.skill.8.tasks.1"),
          t("nextStep.plans.skill.8.tasks.2"),
          t("nextStep.plans.skill.8.tasks.3"),
        ],
      },
      {
        week: 9,
        title: t("nextStep.plans.skill.9.title"),
        tasks: [
          t("nextStep.plans.skill.9.tasks.1"),
          t("nextStep.plans.skill.9.tasks.2"),
          t("nextStep.plans.skill.9.tasks.3"),
        ],
      },
      {
        week: 10,
        title: t("nextStep.plans.skill.10.title"),
        tasks: [
          t("nextStep.plans.skill.10.tasks.1"),
          t("nextStep.plans.skill.10.tasks.2"),
          t("nextStep.plans.skill.10.tasks.3"),
        ],
      },
      {
        week: 11,
        title: t("nextStep.plans.skill.11.title"),
        tasks: [
          t("nextStep.plans.skill.11.tasks.1"),
          t("nextStep.plans.skill.11.tasks.2"),
          t("nextStep.plans.skill.11.tasks.3"),
        ],
      },
      {
        week: 12,
        title: t("nextStep.plans.skill.12.title"),
        tasks: [
          t("nextStep.plans.skill.12.tasks.1"),
          t("nextStep.plans.skill.12.tasks.2"),
          t("nextStep.plans.skill.12.tasks.3"),
        ],
      },
    ],

    "Improve My Studies": [
      {
        week: 1,
        title: t("nextStep.plans.study.1.title"),
        tasks: [
          t("nextStep.plans.study.1.tasks.1"),
          t("nextStep.plans.study.1.tasks.2"),
          t("nextStep.plans.study.1.tasks.3"),
        ],
      },
      {
        week: 2,
        title: t("nextStep.plans.study.2.title"),
        tasks: [
          t("nextStep.plans.study.2.tasks.1"),
          t("nextStep.plans.study.2.tasks.2"),
          t("nextStep.plans.study.2.tasks.3"),
        ],
      },
      {
        week: 3,
        title: t("nextStep.plans.study.3.title"),
        tasks: [
          t("nextStep.plans.study.3.tasks.1"),
          t("nextStep.plans.study.3.tasks.2"),
          t("nextStep.plans.study.3.tasks.3"),
        ],
      },
      {
        week: 4,
        title: t("nextStep.plans.study.4.title"),
        tasks: [
          t("nextStep.plans.study.4.tasks.1"),
          t("nextStep.plans.study.4.tasks.2"),
          t("nextStep.plans.study.4.tasks.3"),
        ],
      },
      {
        week: 5,
        title: t("nextStep.plans.study.5.title"),
        tasks: [
          t("nextStep.plans.study.5.tasks.1"),
          t("nextStep.plans.study.5.tasks.2"),
          t("nextStep.plans.study.5.tasks.3"),
        ],
      },
      {
        week: 6,
        title: t("nextStep.plans.study.6.title"),
        tasks: [
          t("nextStep.plans.study.6.tasks.1"),
          t("nextStep.plans.study.6.tasks.2"),
          t("nextStep.plans.study.6.tasks.3"),
        ],
      },
      {
        week: 7,
        title: t("nextStep.plans.study.7.title"),
        tasks: [
          t("nextStep.plans.study.7.tasks.1"),
          t("nextStep.plans.study.7.tasks.2"),
          t("nextStep.plans.study.7.tasks.3"),
        ],
      },
      {
        week: 8,
        title: t("nextStep.plans.study.8.title"),
        tasks: [
          t("nextStep.plans.study.8.tasks.1"),
          t("nextStep.plans.study.8.tasks.2"),
          t("nextStep.plans.study.8.tasks.3"),
        ],
      },
      {
        week: 9,
        title: t("nextStep.plans.study.9.title"),
        tasks: [
          t("nextStep.plans.study.9.tasks.1"),
          t("nextStep.plans.study.9.tasks.2"),
          t("nextStep.plans.study.9.tasks.3"),
        ],
      },
      {
        week: 10,
        title: t("nextStep.plans.study.10.title"),
        tasks: [
          t("nextStep.plans.study.10.tasks.1"),
          t("nextStep.plans.study.10.tasks.2"),
          t("nextStep.plans.study.10.tasks.3"),
        ],
      },
      {
        week: 11,
        title: t("nextStep.plans.study.11.title"),
        tasks: [
          t("nextStep.plans.study.11.tasks.1"),
          t("nextStep.plans.study.11.tasks.2"),
          t("nextStep.plans.study.11.tasks.3"),
        ],
      },
      {
        week: 12,
        title: t("nextStep.plans.study.12.title"),
        tasks: [
          t("nextStep.plans.study.12.tasks.1"),
          t("nextStep.plans.study.12.tasks.2"),
          t("nextStep.plans.study.12.tasks.3"),
        ],
      },
    ],

    "Reach a Goal": [
      {
        week: 1,
        title: t("nextStep.plans.goal.1.title"),
        tasks: [
          t("nextStep.plans.goal.1.tasks.1"),
          t("nextStep.plans.goal.1.tasks.2"),
          t("nextStep.plans.goal.1.tasks.3"),
        ],
      },
      {
        week: 2,
        title: t("nextStep.plans.goal.2.title"),
        tasks: [
          t("nextStep.plans.goal.2.tasks.1"),
          t("nextStep.plans.goal.2.tasks.2"),
          t("nextStep.plans.goal.2.tasks.3"),
        ],
      },
      {
        week: 3,
        title: t("nextStep.plans.goal.3.title"),
        tasks: [
          t("nextStep.plans.goal.3.tasks.1"),
          t("nextStep.plans.goal.3.tasks.2"),
          t("nextStep.plans.goal.3.tasks.3"),
        ],
      },
      {
        week: 4,
        title: t("nextStep.plans.goal.4.title"),
        tasks: [
          t("nextStep.plans.goal.4.tasks.1"),
          t("nextStep.plans.goal.4.tasks.2"),
          t("nextStep.plans.goal.4.tasks.3"),
        ],
      },
      {
        week: 5,
        title: t("nextStep.plans.goal.5.title"),
        tasks: [
          t("nextStep.plans.goal.5.tasks.1"),
          t("nextStep.plans.goal.5.tasks.2"),
          t("nextStep.plans.goal.5.tasks.3"),
        ],
      },
      {
        week: 6,
        title: t("nextStep.plans.goal.6.title"),
        tasks: [
          t("nextStep.plans.goal.6.tasks.1"),
          t("nextStep.plans.goal.6.tasks.2"),
          t("nextStep.plans.goal.6.tasks.3"),
        ],
      },
      {
        week: 7,
        title: t("nextStep.plans.goal.7.title"),
        tasks: [
          t("nextStep.plans.goal.7.tasks.1"),
          t("nextStep.plans.goal.7.tasks.2"),
          t("nextStep.plans.goal.7.tasks.3"),
        ],
      },
      {
        week: 8,
        title: t("nextStep.plans.goal.8.title"),
        tasks: [
          t("nextStep.plans.goal.8.tasks.1"),
          t("nextStep.plans.goal.8.tasks.2"),
          t("nextStep.plans.goal.8.tasks.3"),
        ],
      },
      {
        week: 9,
        title: t("nextStep.plans.goal.9.title"),
        tasks: [
          t("nextStep.plans.goal.9.tasks.1"),
          t("nextStep.plans.goal.9.tasks.2"),
          t("nextStep.plans.goal.9.tasks.3"),
        ],
      },
      {
        week: 10,
        title: t("nextStep.plans.goal.10.title"),
        tasks: [
          t("nextStep.plans.goal.10.tasks.1"),
          t("nextStep.plans.goal.10.tasks.2"),
          t("nextStep.plans.goal.10.tasks.3"),
        ],
      },
      {
        week: 11,
        title: t("nextStep.plans.goal.11.title"),
        tasks: [
          t("nextStep.plans.goal.11.tasks.1"),
          t("nextStep.plans.goal.11.tasks.2"),
          t("nextStep.plans.goal.11.tasks.3"),
        ],
      },
      {
        week: 12,
        title: t("nextStep.plans.goal.12.title"),
        tasks: [
          t("nextStep.plans.goal.12.tasks.1"),
          t("nextStep.plans.goal.12.tasks.2"),
          t("nextStep.plans.goal.12.tasks.3"),
        ],
      },
    ],
  };

  useEffect(
    function () {
      localStorage.setItem(
        "khmer-life-helper-completed-tasks",
        JSON.stringify(completedTasks),
      );
    },
    [completedTasks],
  );

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setForm(function (previousForm) {
      return {
        ...previousForm,
        [name]: value,
      };
    });
  }

  function handleStart() {
    if (!goal) {
      alert(t("nextStep.alerts.chooseGoal"));
      return;
    }

    setForm({});
    setShowPlan(false);
    setStarted(true);

    localStorage.setItem("khmer-life-helper-goal", goal);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const currentQuestions = questions[goal] || [];

    for (let i = 0; i < currentQuestions.length; i++) {
      const question = currentQuestions[i];

      if (!form[question.name]) {
        alert(t("nextStep.alerts.answerAll"));
        return;
      }
    }

    localStorage.setItem("khmer-life-helper-goal", goal);
    setShowPlan(true);
  }

  function toggleTask(taskId) {
    setCompletedTasks(function (previousTasks) {
      if (previousTasks.includes(taskId)) {
        return previousTasks.filter(function (id) {
          return id !== taskId;
        });
      }

      return [...previousTasks, taskId];
    });
  }

  function resetPlan() {
    setCompletedTasks(function (previousTasks) {
      return previousTasks.filter(function (taskId) {
        return !taskId.startsWith(goal + "-");
      });
    });

    localStorage.removeItem("khmer-life-helper-goal");

    setGoal("");
    setStarted(false);
    setShowPlan(false);
    setForm({});
  }

  function getFocusAreas() {
    if (goal === "Find an Internship") {
      const areas = [
        t("nextStep.focus.internship.cv"),
        t("nextStep.focus.internship.portfolio"),
        t("nextStep.focus.internship.github"),
        t("nextStep.focus.internship.interview"),
      ];

      if (form.skills) {
        areas.push(
          t("nextStep.focus.internship.improveSkills") + " " + form.skills,
        );
      }

      return areas;
    }

    if (goal === "Learn a Skill") {
      const areas = [
        t("nextStep.focus.skill.fundamentals"),
        t("nextStep.focus.skill.practice"),
        t("nextStep.focus.skill.projects"),
        t("nextStep.focus.skill.mistakes"),
      ];

      if (form.skill) {
        areas.unshift(t("nextStep.focus.skill.focusOn") + " " + form.skill);
      }

      return areas;
    }

    if (goal === "Improve My Studies") {
      const areas = [
        t("nextStep.focus.study.routine"),
        t("nextStep.focus.study.difficultTopics"),
        t("nextStep.focus.study.review"),
        t("nextStep.focus.study.progress"),
      ];

      if (form.subject) {
        areas.unshift(t("nextStep.focus.study.improve") + " " + form.subject);
      }

      return areas;
    }

    if (goal === "Reach a Goal") {
      const areas = [
        t("nextStep.focus.goal.target"),
        t("nextStep.focus.goal.breakDown"),
        t("nextStep.focus.goal.track"),
        t("nextStep.focus.goal.consistency"),
      ];

      if (form.goalName) {
        areas.unshift(
          t("nextStep.focus.goal.workToward") + " " + form.goalName,
        );
      }

      return areas;
    }

    return [];
  }

  function getRecommendations() {
    if (goal === "Find an Internship") {
      return [
        {
          title: t("nextStep.recommendations.internship.cv.title"),
          description: t("nextStep.recommendations.internship.cv.description"),
          icon: "bi-file-earmark-person",
        },
        {
          title: t("nextStep.recommendations.internship.portfolio.title"),
          description: t(
            "nextStep.recommendations.internship.portfolio.description",
          ),
          icon: "bi-window",
        },
        {
          title: t("nextStep.recommendations.internship.interview.title"),
          description: t(
            "nextStep.recommendations.internship.interview.description",
          ),
          icon: "bi-chat-dots",
        },
      ];
    }

    if (goal === "Learn a Skill") {
      return [
        {
          title: t("nextStep.recommendations.skill.practice.title"),
          description: t("nextStep.recommendations.skill.practice.description"),
          icon: "bi-calendar-check",
        },
        {
          title: t("nextStep.recommendations.skill.projects.title"),
          description: t("nextStep.recommendations.skill.projects.description"),
          icon: "bi-code-square",
        },
        {
          title: t("nextStep.recommendations.skill.portfolio.title"),
          description: t(
            "nextStep.recommendations.skill.portfolio.description",
          ),
          icon: "bi-folder2-open",
        },
      ];
    }

    if (goal === "Improve My Studies") {
      return [
        {
          title: t("nextStep.recommendations.study.schedule.title"),
          description: t("nextStep.recommendations.study.schedule.description"),
          icon: "bi-calendar-week",
        },
        {
          title: t("nextStep.recommendations.study.practice.title"),
          description: t("nextStep.recommendations.study.practice.description"),
          icon: "bi-pencil-square",
        },
        {
          title: t("nextStep.recommendations.study.mistakes.title"),
          description: t("nextStep.recommendations.study.mistakes.description"),
          icon: "bi-arrow-repeat",
        },
      ];
    }

    if (goal === "Reach a Goal") {
      return [
        {
          title: t("nextStep.recommendations.goal.breakDown.title"),
          description: t("nextStep.recommendations.goal.breakDown.description"),
          icon: "bi-diagram-3",
        },
        {
          title: t("nextStep.recommendations.goal.track.title"),
          description: t("nextStep.recommendations.goal.track.description"),
          icon: "bi-graph-up",
        },
        {
          title: t("nextStep.recommendations.goal.consistency.title"),
          description: t(
            "nextStep.recommendations.goal.consistency.description",
          ),
          icon: "bi-check2-circle",
        },
      ];
    }

    return [];
  }

  function translateQuestionOption(option) {
    const optionMap = {
      "Year 1": "nextStep.options.year1",
      "Year 2": "nextStep.options.year2",
      "Year 3": "nextStep.options.year3",
      "Year 4": "nextStep.options.year4",
      Graduated: "nextStep.options.graduated",

      "No experience": "nextStep.options.noExperience",
      "School projects": "nextStep.options.schoolProjects",
      "Volunteer experience": "nextStep.options.volunteer",
      "Part-time experience": "nextStep.options.partTime",
      "Work experience": "nextStep.options.workExperience",

      "Less than 3 hours": "nextStep.options.less3h",
      "3 - 5 hours": "nextStep.options.h3to5",
      "5 - 10 hours": "nextStep.options.h5to10",
      "10+ hours": "nextStep.options.h10plus",

      "Complete beginner": "nextStep.options.completeBeginner",
      Beginner: "nextStep.options.beginner",
      Intermediate: "nextStep.options.intermediate",
      Advanced: "nextStep.options.advanced",

      "I procrastinate": "nextStep.options.procrastinate",
      "I forget lessons": "nextStep.options.forgetLessons",
      "I have trouble understanding": "nextStep.options.hardToUnderstand",
      "I do not practice enough": "nextStep.options.notEnoughPractice",
      "I lack motivation": "nextStep.options.lackMotivation",

      "Just started": "nextStep.options.justStarted",
      "Less than 25%": "nextStep.options.less25",
      "25% - 50%": "nextStep.options.p25to50",
      "50% - 75%": "nextStep.options.p50to75",
      "More than 75%": "nextStep.options.more75",
    };

    return optionMap[option] ? t(optionMap[option]) : option;
  }

  const currentQuestions = questions[goal] || [];
  const currentPlan = plans[goal] || [];

  const selectedGoal = goals.find(function (item) {
    return item.id === goal;
  });

  const focusAreas = getFocusAreas();
  const recommendations = getRecommendations();

  const totalTasks = currentPlan.reduce(function (total, week) {
    return total + week.tasks.length;
  }, 0);

  const completedCurrentTasks = completedTasks.filter(function (taskId) {
    return taskId.startsWith(goal + "-");
  });

  const progress =
    totalTasks === 0
      ? 0
      : Math.round((completedCurrentTasks.length / totalTasks) * 100);

  return (
    <main>
      <section className="next-step-hero py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span className="badge bg-primary-subtle text-primary mb-3">
                <i className="bi bi-compass me-2"></i>
                {t("nextStep.hero.badge")}
              </span>

              <h1 className="display-5 fw-bold mb-3">
                {t("nextStep.hero.title")}
              </h1>

              <p className="lead text-secondary mb-0">
                {t("nextStep.hero.description")}
              </p>
            </div>

            <div className="col-lg-5 text-center">
              <i
                className="bi bi-signpost-split-fill text-primary"
                style={{ fontSize: "130px" }}
              ></i>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          {!started && (
            <>
              <div className="text-center mb-5">
                <h2 className="fw-bold">{t("nextStep.choose.title")}</h2>

                <p className="text-secondary">
                  {t("nextStep.choose.description")}
                </p>
              </div>

              <div className="row g-4">
                {goals.map(function (item) {
                  const active = goal === item.id;

                  return (
                    <div className="col-md-6 col-lg-3" key={item.id}>
                      <div
                        className={
                          "goal-card h-100 " +
                          (active ? "goal-card-active" : "")
                        }
                        onClick={function () {
                          setGoal(item.id);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="goal-icon">
                          <i className={"bi " + item.icon}></i>
                        </div>

                        <h5 className="fw-bold mt-3">{item.title}</h5>

                        <p className="text-secondary small mb-0">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {goal && (
                <div className="text-center mt-5">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg px-5"
                    onClick={handleStart}
                  >
                    {t("nextStep.choose.continue")}
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              )}
            </>
          )}

          {started && !showPlan && (
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="question-card">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="question-icon">
                      <i
                        className={
                          "bi " +
                          (selectedGoal
                            ? selectedGoal.icon
                            : "bi-question-circle")
                        }
                      ></i>
                    </div>

                    <div>
                      <h3 className="fw-bold mb-1">{selectedGoal?.title}</h3>

                      <p className="text-secondary mb-0">
                        {t("nextStep.questions.description")}
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {currentQuestions.map(function (question, index) {
                      return (
                        <div className="mb-4" key={question.name}>
                          <label className="form-label fw-semibold">
                            {index + 1}. {question.label}
                          </label>

                          {question.type === "select" ? (
                            <select
                              className="form-select"
                              name={question.name}
                              value={form[question.name] || ""}
                              onChange={handleChange}
                              required
                            >
                              <option value="">
                                {t("nextStep.questions.chooseAnswer")}
                              </option>

                              {question.options.map(function (option) {
                                return (
                                  <option value={option} key={option}>
                                    {translateQuestionOption(option)}
                                  </option>
                                );
                              })}
                            </select>
                          ) : (
                            <input
                              type="text"
                              className="form-control"
                              name={question.name}
                              value={form[question.name] || ""}
                              onChange={handleChange}
                              placeholder={question.placeholder}
                              required
                            />
                          )}
                        </div>
                      );
                    })}

                    <div className="d-flex gap-2">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={function () {
                          setStarted(false);
                          setForm({});
                        }}
                      >
                        <i className="bi bi-arrow-left me-2"></i>
                        {t("nextStep.form.back")}
                      </button>

                      <button
                        type="submit"
                        className="btn btn-primary flex-grow-1"
                      >
                        {t("nextStep.form.createPlan")}
                        <i className="bi bi-magic ms-2"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {started && showPlan && (
            <div>
              <div className="personalized-summary mb-4">
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="personalized-icon">
                    <i className="bi bi-stars"></i>
                  </div>

                  <div>
                    <h2 className="fw-bold mb-1">{t("nextStep.plan.title")}</h2>

                    <p className="text-secondary mb-0">
                      {t("nextStep.plan.description")}
                    </p>
                  </div>
                </div>

                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="user-situation h-100">
                      <h5 className="fw-bold mb-3">
                        <i className="bi bi-person-check me-2 text-primary"></i>
                        {t("nextStep.plan.situation")}
                      </h5>

                      {currentQuestions.map(function (question) {
                        return (
                          <div className="situation-item" key={question.name}>
                            <span className="text-secondary">
                              {question.label}
                            </span>

                            <strong>
                              {question.type === "select"
                                ? translateQuestionOption(form[question.name])
                                : form[question.name] ||
                                  t("nextStep.plan.notProvided")}
                            </strong>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="focus-area h-100">
                      <h5 className="fw-bold mb-3">
                        <i className="bi bi-bullseye me-2 text-primary"></i>
                        {t("nextStep.plan.focus")}
                      </h5>

                      {focusAreas.map(function (item, index) {
                        return (
                          <div className="focus-item" key={index}>
                            <i className="bi bi-check-circle-fill"></i>
                            <span>{item}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="progress-section mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <h5 className="fw-bold mb-1">
                      {t("nextStep.progress.title")}
                    </h5>

                    <small className="text-secondary">
                      {t("nextStep.progress.description")}
                    </small>
                  </div>

                  <strong className="text-primary">{progress}%</strong>
                </div>

                <div
                  className="progress"
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: "12px" }}
                >
                  <div
                    className="progress-bar"
                    style={{
                      width: progress + "%",
                    }}
                  ></div>
                </div>

                <div className="d-flex justify-content-between mt-2">
                  <small className="text-secondary">
                    {completedCurrentTasks.length}{" "}
                    {t("nextStep.progress.completed")}
                  </small>

                  <small className="text-secondary">
                    {totalTasks} {t("nextStep.progress.total")}
                  </small>
                </div>

                <div className="mt-2">
                  <small className="text-success">
                    <i className="bi bi-cloud-check me-1"></i>
                    {t("nextStep.progress.saved")}
                  </small>
                </div>
              </div>

              <div className="recommendations mb-5">
                <div className="mb-4">
                  <h4 className="fw-bold mb-1">
                    {t("nextStep.recommendations.title")}
                  </h4>

                  <p className="text-secondary mb-0">
                    {t("nextStep.recommendations.description")}
                  </p>
                </div>

                <div className="row g-4">
                  {recommendations.map(function (item) {
                    return (
                      <div className="col-md-4" key={item.title}>
                        <div className="recommendation-card">
                          <div className="recommendation-icon mb-3">
                            <i className={"bi " + item.icon}></i>
                          </div>

                          <h5 className="fw-bold">{item.title}</h5>

                          <p className="text-secondary small mb-0">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
                  <div>
                    <h3 className="fw-bold mb-1">
                      {t("nextStep.roadmap.title")}
                    </h3>

                    <p className="text-secondary mb-0">
                      {t("nextStep.roadmap.description")}
                    </p>
                  </div>

                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    <i className="bi bi-calendar3 me-2"></i>
                    {t("nextStep.roadmap.weeks")}
                  </span>
                </div>

                {currentPlan.map(function (week) {
                  return (
                    <div className="week-card mb-4" key={week.week}>
                      <div className="week-header">
                        <div className="d-flex align-items-center gap-3">
                          <div className="week-number">{week.week}</div>

                          <div>
                            <h5 className="fw-bold mb-1">
                              {t("nextStep.roadmap.week")} {week.week}
                            </h5>

                            <span className="text-secondary">{week.title}</span>
                          </div>
                        </div>
                      </div>

                      <div className="week-tasks">
                        {week.tasks.map(function (task, index) {
                          const taskId = goal + "-" + week.week + "-" + index;

                          const completed = completedTasks.includes(taskId);

                          return (
                            <label
                              className={
                                "task-item " +
                                (completed ? "task-completed" : "")
                              }
                              key={taskId}
                            >
                              <input
                                type="checkbox"
                                checked={completed}
                                onChange={function () {
                                  toggleTask(taskId);
                                }}
                              />

                              <span>{task}</span>

                              {completed && (
                                <i className="bi bi-check-circle-fill ms-auto text-success"></i>
                              )}
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-center py-4">
                {progress === 100 ? (
                  <div className="alert alert-success">
                    <i className="bi bi-trophy-fill me-2"></i>

                    <strong>{t("nextStep.completed.title")}</strong>

                    <span className="ms-2">
                      {t("nextStep.completed.description")}
                    </span>
                  </div>
                ) : (
                  <div className="alert alert-primary">
                    <i className="bi bi-lightbulb-fill me-2"></i>
                    {t("nextStep.completed.nextTask")}
                  </div>
                )}

                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={resetPlan}
                >
                  <i className="bi bi-arrow-counterclockwise me-2"></i>
                  {t("nextStep.startAgain")}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default NextStep;

