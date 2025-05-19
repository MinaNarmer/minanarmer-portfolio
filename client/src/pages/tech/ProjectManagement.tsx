import TechContentLayout from "@/components/blog/TechContentLayout";
import { useTranslation } from "react-i18next";

export default function ProjectManagement() {
  const { t } = useTranslation();
  
  return (
    <TechContentLayout 
      title={t("projectManagement.title", "Project Management Roadmap")} 
      description={t("projectManagement.description", "A guide to Agile methodologies, Scrum, and effective project leadership.")}
    >
      <section>
        <h2>{t("projectManagement.fundamentals.title", "Project Management Fundamentals")}</h2>
        <p>
          {t("projectManagement.fundamentals.intro", "Project management is the application of knowledge, skills, tools, and techniques to meet project requirements and achieve specific objectives. Understanding its fundamentals is crucial for anyone looking to lead technical projects successfully.")}
        </p>
        
        <h3>{t("projectManagement.fundamentals.concepts.title", "Core Project Management Concepts")}</h3>
        <ul>
          <li><strong>{t("projectManagement.fundamentals.concepts.lifecycle", "Project Lifecycle")}</strong> - {t("projectManagement.fundamentals.concepts.lifecycleDesc", "Initiation, planning, execution, monitoring, and closure")}</li>
          <li><strong>{t("projectManagement.fundamentals.concepts.constraint", "Triple Constraint")}</strong> - {t("projectManagement.fundamentals.concepts.constraintDesc", "Managing scope, time, and cost effectively")}</li>
          <li><strong>{t("projectManagement.fundamentals.concepts.stakeholder", "Stakeholder Management")}</strong> - {t("projectManagement.fundamentals.concepts.stakeholderDesc", "Identifying and engaging with all involved parties")}</li>
          <li><strong>{t("projectManagement.fundamentals.concepts.risk", "Risk Management")}</strong> - {t("projectManagement.fundamentals.concepts.riskDesc", "Identifying, assessing, and mitigating project risks")}</li>
          <li><strong>{t("projectManagement.fundamentals.concepts.communication", "Communication Planning")}</strong> - {t("projectManagement.fundamentals.concepts.communicationDesc", "Determining who needs what information and when")}</li>
        </ul>
      </section>
      
      <section className="mt-10">
        <h2>{t("projectManagement.agile.title", "Agile Methodologies")}</h2>
        
        <div className="my-6">
          <h3>{t("projectManagement.agile.scrum.title", "Scrum Framework")}</h3>
          <p>{t("projectManagement.agile.scrum.intro", "A lightweight framework for complex product development:")}</p>
          <ul>
            <li><strong>{t("projectManagement.agile.scrum.roles", "Roles")}</strong> - {t("projectManagement.agile.scrum.rolesDesc", "Product Owner, Scrum Master, Development Team")}</li>
            <li><strong>{t("projectManagement.agile.scrum.events", "Events")}</strong> - {t("projectManagement.agile.scrum.eventsDesc", "Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective")}</li>
            <li><strong>{t("projectManagement.agile.scrum.artifacts", "Artifacts")}</strong> - {t("projectManagement.agile.scrum.artifactsDesc", "Product Backlog, Sprint Backlog, Increment")}</li>
            <li><strong>{t("projectManagement.agile.scrum.rules", "Rules")}</strong> - {t("projectManagement.agile.scrum.rulesDesc", "Self-organizing teams, time-boxes, empirical process control")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("projectManagement.agile.kanban.title", "Kanban Method")}</h3>
          <p>{t("projectManagement.agile.kanban.intro", "A visual method for managing work with an emphasis on continuous delivery:")}</p>
          <ul>
            <li>{t("projectManagement.agile.kanban.visualization", "Visualizing workflow on a Kanban board")}</li>
            <li>{t("projectManagement.agile.kanban.wip", "Limiting work in progress (WIP)")}</li>
            <li>{t("projectManagement.agile.kanban.flow", "Managing flow through the system")}</li>
            <li>{t("projectManagement.agile.kanban.policies", "Making process policies explicit")}</li>
            <li>{t("projectManagement.agile.kanban.feedback", "Implementing feedback loops")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("projectManagement.agile.others.title", "Other Agile Approaches")}</h3>
          <ul>
            <li><strong>{t("projectManagement.agile.others.xp", "Extreme Programming (XP)")}</strong> - {t("projectManagement.agile.others.xpDesc", "Focus on technical excellence and customer satisfaction")}</li>
            <li><strong>{t("projectManagement.agile.others.lean", "Lean Software Development")}</strong> - {t("projectManagement.agile.others.leanDesc", "Eliminating waste and optimizing efficiency")}</li>
            <li><strong>{t("projectManagement.agile.others.safe", "SAFe")}</strong> - {t("projectManagement.agile.others.safeDesc", "Scaled Agile Framework for enterprise-level agility")}</li>
            <li><strong>{t("projectManagement.agile.others.scrumban", "Scrumban")}</strong> - {t("projectManagement.agile.others.scrumbanDesc", "Hybrid of Scrum and Kanban for complex environments")}</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-10">
        <h2>{t("projectManagement.tools.title", "Project Management Tools")}</h2>
        <div className="my-6">
          <h3>{t("projectManagement.tools.software.title", "Software and Platforms")}</h3>
          <ul>
            <li><strong>{t("projectManagement.tools.software.jira", "Jira")}</strong> - {t("projectManagement.tools.software.jiraDesc", "Issue tracking and project management for software teams")}</li>
            <li><strong>{t("projectManagement.tools.software.azure", "Azure DevOps")}</strong> - {t("projectManagement.tools.software.azureDesc", "Comprehensive solution for planning, coding, and deployment")}</li>
            <li><strong>{t("projectManagement.tools.software.trello", "Trello")}</strong> - {t("projectManagement.tools.software.trelloDesc", "Visual collaboration tool for organizing projects")}</li>
            <li><strong>{t("projectManagement.tools.software.asana", "Asana")}</strong> - {t("projectManagement.tools.software.asanaDesc", "Work management platform for teams")}</li>
            <li><strong>{t("projectManagement.tools.software.monday", "Monday.com")}</strong> - {t("projectManagement.tools.software.mondayDesc", "Work OS for team management and collaboration")}</li>
            <li><strong>{t("projectManagement.tools.software.clickup", "ClickUp")}</strong> - {t("projectManagement.tools.software.clickupDesc", "All-in-one productivity platform")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("projectManagement.tools.reporting.title", "Reporting and Analytics")}</h3>
          <ul>
            <li>{t("projectManagement.tools.reporting.burndown", "Burndown and burnup charts")}</li>
            <li>{t("projectManagement.tools.reporting.velocity", "Velocity tracking")}</li>
            <li>{t("projectManagement.tools.reporting.flow", "Cumulative flow diagrams")}</li>
            <li>{t("projectManagement.tools.reporting.cycle", "Cycle time and lead time metrics")}</li>
            <li>{t("projectManagement.tools.reporting.sprint", "Sprint reports and dashboards")}</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-10">
        <h2>{t("projectManagement.pmp.title", "Project Management Professional (PMP)")}</h2>
        <p>
          {t("projectManagement.pmp.intro", "The PMP certification is globally recognized as the gold standard in project management. It validates your ability to lead projects in any industry, with any methodology.")}
        </p>
        <div className="my-6">
          <h3>{t("projectManagement.pmp.areas.title", "PMP Knowledge Areas")}</h3>
          <ul>
            <li>{t("projectManagement.pmp.areas.integration", "Integration Management")}</li>
            <li>{t("projectManagement.pmp.areas.scope", "Scope Management")}</li>
            <li>{t("projectManagement.pmp.areas.schedule", "Schedule Management")}</li>
            <li>{t("projectManagement.pmp.areas.cost", "Cost Management")}</li>
            <li>{t("projectManagement.pmp.areas.quality", "Quality Management")}</li>
            <li>{t("projectManagement.pmp.areas.resource", "Resource Management")}</li>
            <li>{t("projectManagement.pmp.areas.communications", "Communications Management")}</li>
            <li>{t("projectManagement.pmp.areas.risk", "Risk Management")}</li>
            <li>{t("projectManagement.pmp.areas.procurement", "Procurement Management")}</li>
            <li>{t("projectManagement.pmp.areas.stakeholder", "Stakeholder Management")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("projectManagement.pmp.process.title", "PMP Certification Process")}</h3>
          <ol>
            <li><strong>{t("projectManagement.pmp.process.eligibility", "Eligibility")}</strong> - {t("projectManagement.pmp.process.eligibilityDesc", "Verify education and experience requirements")}</li>
            <li><strong>{t("projectManagement.pmp.process.application", "Application")}</strong> - {t("projectManagement.pmp.process.applicationDesc", "Complete the PMI application")}</li>
            <li><strong>{t("projectManagement.pmp.process.fee", "Examination Fee")}</strong> - {t("projectManagement.pmp.process.feeDesc", "Pay the required fee")}</li>
            <li><strong>{t("projectManagement.pmp.process.preparation", "Exam Preparation")}</strong> - {t("projectManagement.pmp.process.preparationDesc", "Study the PMBOK Guide and take practice exams")}</li>
            <li><strong>{t("projectManagement.pmp.process.examination", "Examination")}</strong> - {t("projectManagement.pmp.process.examinationDesc", "Pass the 200-question, 4-hour exam")}</li>
            <li><strong>{t("projectManagement.pmp.process.maintenance", "Maintenance")}</strong> - {t("projectManagement.pmp.process.maintenanceDesc", "Earn 60 PDUs every three years")}</li>
          </ol>
        </div>
      </section>
      
      <section className="mt-10">
        <h2>{t("projectManagement.leadership.title", "Leadership and Soft Skills")}</h2>
        <p>
          {t("projectManagement.leadership.intro", "Technical skills are important, but leadership and soft skills often determine project success.")}
        </p>
        <div className="my-6">
          <h3>{t("projectManagement.leadership.skills.title", "Essential Leadership Skills")}</h3>
          <ul>
            <li><strong>{t("projectManagement.leadership.skills.decision", "Decision Making")}</strong> - {t("projectManagement.leadership.skills.decisionDesc", "Making informed choices under pressure")}</li>
            <li><strong>{t("projectManagement.leadership.skills.conflict", "Conflict Resolution")}</strong> - {t("projectManagement.leadership.skills.conflictDesc", "Addressing and resolving team conflicts")}</li>
            <li><strong>{t("projectManagement.leadership.skills.negotiation", "Negotiation")}</strong> - {t("projectManagement.leadership.skills.negotiationDesc", "Working with stakeholders to find win-win solutions")}</li>
            <li><strong>{t("projectManagement.leadership.skills.emotional", "Emotional Intelligence")}</strong> - {t("projectManagement.leadership.skills.emotionalDesc", "Understanding and managing emotions")}</li>
            <li><strong>{t("projectManagement.leadership.skills.strategic", "Strategic Thinking")}</strong> - {t("projectManagement.leadership.skills.strategicDesc", "Aligning projects with organizational goals")}</li>
            <li><strong>{t("projectManagement.leadership.skills.coaching", "Coaching and Mentoring")}</strong> - {t("projectManagement.leadership.skills.coachingDesc", "Developing team members' capabilities")}</li>
          </ul>
        </div>
        
        <div className="mt-6 p-4 bg-green-50 dark:bg-gray-800 rounded-lg">
          <h4 className="font-bold">{t("projectManagement.career.title", "Project Management Career Path:")}</h4>
          <ol className="mt-2">
            <li><strong>{t("projectManagement.career.coordinator", "Project Coordinator/Assistant")}</strong> - {t("projectManagement.career.coordinatorDesc", "Entry-level role supporting PM activities")}</li>
            <li><strong>{t("projectManagement.career.manager", "Project Manager")}</strong> - {t("projectManagement.career.managerDesc", "Leading individual projects")}</li>
            <li><strong>{t("projectManagement.career.senior", "Senior Project Manager")}</strong> - {t("projectManagement.career.seniorDesc", "Managing complex, high-impact projects")}</li>
            <li><strong>{t("projectManagement.career.program", "Program Manager")}</strong> - {t("projectManagement.career.programDesc", "Overseeing multiple related projects")}</li>
            <li><strong>{t("projectManagement.career.portfolio", "Portfolio Manager")}</strong> - {t("projectManagement.career.portfolioDesc", "Managing collections of programs and projects")}</li>
            <li><strong>{t("projectManagement.career.director", "PMO Director")}</strong> - {t("projectManagement.career.directorDesc", "Leading the Project Management Office")}</li>
          </ol>
        </div>
      </section>
    </TechContentLayout>
  );
}