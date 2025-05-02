// Dummy data - replace with your real project info
const projects = {
    tableau: [
      {
        title: "Sales Dashboard",
        description: "Interactive dashboard showing regional sales and trends.",
        link: "https://public.tableau.com/views/SalesDashboard123"
      },
      {
        title: "Customer Churn",
        description: "Visual analysis of customer retention rates.",
        link: "https://public.tableau.com/views/ChurnAnalysis"
      }
    ],
    excel: [
      {
        title: "Budget Tracker",
        description: "Personal finance tracker with charts and pivot tables.",
        link: "#"
      }
    ],
    powerbi: [
      {
        title: "Retail Performance",
        description: "Power BI dashboard tracking sales KPIs.",
        link: "#"
      }
    ],
    r: [
      {
        title: "Linear Regression in R",
        description: "Analyzing housing prices using R and ggplot2.",
        link: "#"
      }
    ]
  };
  
  // Function to render cards
  function renderProjects(sectionId, data) {
    const container = document.getElementById(sectionId);
    data.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
      container.appendChild(card);
    });
  }
  
  // Render each section
  renderProjects("tableau-projects", projects.tableau);
  renderProjects("excel-projects", projects.excel);
  renderProjects("powerbi-projects", projects.powerbi);
  renderProjects("r-projects-container", projects.r);
  